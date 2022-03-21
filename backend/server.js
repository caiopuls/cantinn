require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Stripe = require("stripe");
const stripe = Stripe("sk_test_51KZzOJG8Qd1I79lZgxSUeKY4GAdiN7DbtDgaMOiscXdMuexo3uvGbIgyYk9dhoDRgkCV3BDmxYLp1ZU0lvGZzyG700vWvsSYhd");

app.use(cors());
app.use(express.json());

app.post("/pay", async (req, res) => {
  try {
    const amount = 1000;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseFloat(amount) * 100,
      currency: "brl",
      payment_method_types: ["card"],
      metadata: {
        name: "value",
      },
    });
    const clientSecret = paymentIntent.client_secret;
    res.json({ clientSecret, message: "Payment Initiated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/stripe", (req, res) => {
  if (req.body.type === "payment_intent.created") {
    console.log(`${req.body.data.object.metadata.name} initated payment!`);
  }
  if (req.body.type === "payment_intent.succeeded") {
    console.log(`${req.body.data.object.metadata.name} succeeded payment!`);
  }
});

app.listen(5000, () => console.log(`Server running successfully on port 5000! - Cantinn Plataform`));

/* const { token, amount } = req.body;
    const charge = await stripe.charges.create({
      amount,
      currency: "usd",
      source: token,
    });
    res.json(charge); */

    /* Comment lines: "Shift + alt + a" */

    /* const amount = req.body.amount; */