import React, { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
import { useSelected } from "../../Helper/selectedContext";
import { useAuth } from "../../store/Store";
import { CreateOrder, deleteCart, payment } from "../../Helper/Helper";

export default function RazorpayButton({
  amount,
  Name,
  Email,
  Phonenumber,
  Address,
  customclass,
  text,
}) {
  const [Razorpay] = useRazorpay();
  const navigate = useNavigate();
  const { state } = useAuth();
  const { selectedItem } = useSelected();
  const data = {
    userid: JSON.parse(state.user)?.id,
    productid: selectedItem?.id,
    quantity: selectedItem?.quantity || 1,
  };

  const MakeOrder = async () => {
    try {
      const response = await CreateOrder({ values: data });
      console.log(response);
      try {
        await deleteCart({ values: data.productid });
      } catch (err) {
        console.log(err);
      }
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = useCallback(async () => {
    try {
      const options = {
        key: "rzp_test_2TaIC7QnswdLYF", // Replace with your Razorpay API key
        amount: amount * 100, // Amount is in paise (100 paise = 1 INR)
        currency: "INR",
        name: "Ecommerce",
        description: "Test Transaction",
        handler: async (respay) => {
          console.log(respay);
          // const payData = {
          //   razorpay_order_id: respay.razorpay_payment_id,
          //   amount: String(amount),
          //   currency: "INR",
          //   status: "completed",
          // };

          // try {
          //   const response = await payment({ values: payData });
          // } catch (error) {
          //   console.error("Payment saving error:", error);
          // }

          try {
            await MakeOrder();
          } catch (error) {
            console.error("Order creation error:", error);
          }
          // const MakePay = async () => {
          //   try {
          //     const response = await payment({ values: payData });
          //     console.log(response);
          //   } catch (error) {
          //     console.error(error);
          //   }
          // };
          // MakePay();
          // MakeOrder();
        },
        prefill: {
          name: Name,
          email: Email,
          contact: Phonenumber,
        },
        notes: {
          address: Address,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err);
    }
  }, [Razorpay, amount, Name, Email, Phonenumber, Address]);

  return (
    <button className={customclass} onClick={handlePayment}>
      {text}
    </button>
  );
}
