import React from "react";
import { useSelector } from "react-redux";

export default function Header({ page, setPage }) {
  const items = useSelector((s) => s.cart.items);
  const totalItems = Object.values(items).reduce((s, it) => s + it.qty, 0);

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Paradise Nursery</div>
        {(page === "products" || page === "cart") && (
          <div className="flex items-center gap-4">
            {page !== "products" && (
              <button onClick={() => setPage("products")}>Products</button>
            )}
            {page !== "cart" && (
              <button onClick={() => setPage("cart")}>Cart</button>
            )}
            <button onClick={() => setPage("cart")} className="relative">
              🛒 <span className="ml-1">{totalItems}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
