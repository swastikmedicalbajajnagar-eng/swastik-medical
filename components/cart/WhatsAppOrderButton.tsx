"use client";

import Button from "@/components/ui/button";
import { CustomerDetails } from "@/components/cart/CustomerForm";
import { useCart } from "@/context/CartContext";

type Props = {
  customer: CustomerDetails;
  isValid: boolean;
};

export default function WhatsAppOrderButton({
  customer,
  isValid,
}: Props) {
  const { cart, clearCart } = useCart();

  const handleOrder = () => {
    if (!isValid) {
      alert("Please fill all required customer details.");
      return;
    }

    if (cart.length === 0) {
      return;
    }

    let message = "🛒 *New Order - Swastik Medical*%0A%0A";

    message += `👤 Name: ${customer.name}%0A`;
    message += `📱 Mobile: ${customer.phone}%0A`;
    message += `🏠 Address: ${customer.address}%0A`;
    message += `📮 PIN: ${customer.pincode}%0A%0A`;

    message += "--------------------%0A";

    cart.forEach((item) => {
      message += `💊 ${item.product_name}%0A`;
      message += `Qty: ${item.quantity}%0A`;
      message += `Price: ₹${item.price}%0A%0A`;
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    message += "--------------------%0A";
    message += `💰 *Total: ₹${total}*`;

    window.open(
      `https://wa.me/919860800296?text=${message}`,
      "_blank"
    );
    const confirmed = window.confirm(
        "After sending your WhatsApp order, click OK to clear your cart."
      );
      
      if (confirmed) 
    clearCart();
  };

  return (
    <Button
      className="w-full mt-6"
      onClick={handleOrder}
      disabled={!isValid || cart.length === 0}
    >
      Order on WhatsApp
    </Button>
  );
}