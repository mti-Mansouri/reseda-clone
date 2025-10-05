// import Stripe from "stripe";

// export default async function SuccessPage({
//   searchParams,
// }: {
//   searchParams: { session_id?: string };
// }) {
//   const sessionId = searchParams.session_id;
//   let session: Stripe.Checkout.Session | null = null;
//   if (sessionId) {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
//     session = await stripe.checkout.sessions.retrieve(sessionId);
//   }

//   return (
//     <section
//       style={{
//         marginTop: "100px",
//         padding: "2rem",
//       }}
//     >
//       <h1>Payment Successful 🎉</h1>
//       {session && (
//         <>
//           <p>Thank you for your order!</p>
//           {/* <p>Session ID: {session.id}</p> */}
//           <p>Amount paid: ${session.amount_total! / 100}</p>
//         </>
//       )}
//     </section>
//   );
// }
