"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";
import CustomerForm, {
  CustomerDetails,
} from "@/components/cart/CustomerForm";
import WhatsAppOrderButton from "@/components/cart/WhatsAppOrderButton";
import Button from "@/components/ui/button";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const [isValid, setIsValid] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-8">
          🛒 Your Cart
        </h1>

        <CustomerForm
          onChange={(data, valid) => {
            setCustomer(data);
            setIsValid(valid);
          }}
        />

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-5"
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <h2 className="text-xl font-semibold">
                        {item.product_name}
                      </h2>

                      <p className="text-green-600 font-bold mt-2">
                        ₹{item.price}
                      </p>
                    </div>

                    <div className="text-right">

                      <div className="flex items-center gap-2">

                        <Button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          -
                        </Button>

                        <span className="font-bold text-lg w-8 text-center">
                          {item.quantity}
                        </span>

                        <Button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </Button>

                      </div>

                      <p className="mt-3 font-bold">
                        ₹
                        {item.price * item.quantity}
                      </p>

                      <button
                        className="text-red-600 mt-3 hover:underline"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t pt-6">

              <div className="flex justify-between text-2xl font-bold mb-6">
                <span>Total</span>

                <span>₹{total}</span>
              </div>

              <WhatsAppOrderButton />

            </div>
          </>
        )}
      </section>
    </Container>
  );
}