"use client";
import { updateUserCart, getUserCart } from "../actions";
import { User } from "@supabase/supabase-js";
import { supabase } from "../../../lib/supabaseClient";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  photo: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  // ----
  useEffect(() => {
    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
    if (user) {
      updateUserCart(cartItems);
    }
  }, [cartItems, user]);
  // ----
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);

      const syncCart = async () => {
        const localCartJson = localStorage.getItem("shoppingCart");
        const localCart: CartItem[] = localCartJson
          ? JSON.parse(localCartJson)
          : [];
        if (session) {
          const dbCart = await getUserCart();
          if (dbCart) {
            const mergedCartMap = new Map(
              dbCart.map((item) => [item.id, item])
            );
            localCart.forEach((localItem) => {
              const existingItem = mergedCartMap.get(localItem.id);
              if (existingItem) {
                existingItem.quantity += localItem.quantity;
                // update db one
              } else {
                mergedCartMap.set(localItem.id, localItem);
              }
            });
            const mergedCart = Array.from(mergedCartMap.values());
            setCartItems(mergedCart);
          } else {
            setCartItems(localCart);
          }
        } else {
          setCartItems([]);
        }
      };
      // ---------
      syncCart();
    });

    return () => subscription.unsubscribe();
  }, []);
  // ----

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((previous) => previous.filter((i) => id !== i.id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    itemCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
