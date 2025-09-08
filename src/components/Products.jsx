import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "../data/products";
import { addItem } from "../redux/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.items);

  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PRODUCTS.map((p) => {
        const disabled = !!cart[p.id];
        return (
          <div key={p.id} className="border rounded p-4 bg-white shadow-sm">
            <img
              src={p.img}
              alt={p.name}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="mt-3 font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.category}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-lg font-bold">${p.price.toFixed(2)}</div>
              <button
                disabled={disabled}
                onClick={() => dispatch(addItem(p))}
                className={`px-3 py-1 rounded ${
                  disabled ? "bg-gray-300" : "bg-green-500 text-white"
                }`}
              >
                {disabled ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
