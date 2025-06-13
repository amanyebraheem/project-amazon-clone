// import Stripe from "stripe"

// // export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil", 
});
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

