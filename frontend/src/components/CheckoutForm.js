import React from "react";
import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

import toast, { Toaster } from 'react-hot-toast';


export default function CheckoutForm({ money }) {
  const stripe = useStripe();
  const elements = useElements();

  const pay = async () => {
    try {
      const response = await fetch("http://localhost:5000/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: money }),
      });
      const data = await response.json();
      const cardElement = elements.getElement(CardElement);
      const confirmPayment = await stripe.confirmCardPayment(
        data.clientSecret,
        { payment_method: { card: cardElement } }
      );
      console.log(confirmPayment);
      const { paymentIntent } = confirmPayment;
      if (paymentIntent.status === "succeeded") toast.success(`Pagamento confirmado com sucesso!`);
      else toast.error(`Houve um erro no pagamento :(`);
    } catch (err) {
      console.error(err);
      toast.error("Algo deu errado, tente novamente!");
    }
  };
  

  const lids = Math.floor(Math.random() * 30);

  return (
    <div className="flex flex-col">
       <Toaster />
        <div className="w-full flex-col bg-white border border-gray-200 shadow-sm py-3 px-4 rounded-md
          focus:outline-blue-300">
          <CardElement />
        </div>

        <p className="py-3 text-center text-gray-400">↺ Reembolsos gratuitos em até 7 dias.</p>
     

        <button type="submit" onClick={pay} className="btn-blue">
          Concluir compra
        </button>

        <p className="py-3 text-red-700">🔥 {lids} pessoas estão na tela de compra. Compre antes que seja tarde!</p>
    </div>
  );
}
