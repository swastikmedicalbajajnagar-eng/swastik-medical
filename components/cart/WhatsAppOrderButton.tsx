"use client";

import Button from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function WhatsAppOrderButton() {
  const { cart } = useCart();

  const handleOrder = () => {
    if (cart.length === 0) return;

    let message = "🛒 *New Order - Swastik Medical*%0A%0A";

    cart.forEach((item) => {
      message += `• ${item.product_name}%0A`;
      message += `Qty: ${item.quantity}%0A`;
      message += `Price: ₹${item.price}%0A%0A`;
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    message += `💰 *Total: ₹${total}*`;

    window.open(
      `https://wa.me/919860800296?text=${message}`,
      "_blank"
    );
  };

  return (
    <Button
      className="w-full mt-6"
      onClick={handleOrder}
    >
      Order on WhatsApp
    </Button>
  );
}