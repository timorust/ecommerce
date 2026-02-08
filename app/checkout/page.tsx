"use client";

import { useCartStore } from "@/store/cart-store";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0)
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Cart is Empty
        </h1>
      </div>
    );
  return <div>CheckoutPage</div>;
}
