import Stripe from "stripe";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sessionId = Array.isArray(searchParams.session_id)
    ? searchParams.session_id[0]
    : searchParams.session_id;
  let session: Stripe.Checkout.Session | null = null;
  if (sessionId) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // session = await stripe.checkout.sessions.retrieve(sessionId);
  }

  return (
    <section
      style={{
        marginTop: "100px",
        padding: "2rem",
      }}
    >
      <h1>Payment Successful 🎉</h1>
      {session && (
        <>
          <p>Thank you for your order!</p>
          {/* <p>Session ID: {session.id}</p> */}
          {/* <p>Amount paid: ${session.amount_total! / 100}</p> */}
        </>
      )}
    </section>
  );
}
