"use client";

import type Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useMemo, useState } from "react";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          className="w-full max-w-md rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          value={searchTerm}
          type="text"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProduct.map((product, key) => {
          return (
            <li key={key} className="w-full min-w-0">
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
