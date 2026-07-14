"use client";

import Button from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

type Props = {
  product: {
    id: number;
    product_name: string;
    price: number;
    image?: string;
  };
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() =>
        addToCart({
          id: product.id,
          product_name: product.product_name,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
    >
      Add to Cart
    </Button>
  );
}