"use client";
import WhatsAppOrderButton from "@/components/cart/WhatsAppOrderButton";
import Container from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

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

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <h2 className="font-semibold">
                      {item.product_name}
                    </h2>

                    <p>
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="font-bold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
  <div className="flex justify-end">
    <h2 className="text-2xl font-bold">
      Total: ₹{total}
    </h2>
  </div>

  <WhatsAppOrderButton />
</div>
          </>
        )}
      </section>
    </Container>
  );
}