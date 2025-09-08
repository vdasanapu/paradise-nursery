import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeItem } from "../redux/cartSlice";

export default function CartPage({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => Object.values(s.cart.items));

  const totalItems = items.reduce((s, it) => s + it.qty, 0);
  const totalCost = items.reduce((s, it) => s + it.qty * it.product.price, 0);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <p className="text-sm text-gray-600">Total items: {totalItems}</p>
      <div className="mt-4 space-y-4">
        {items.map((it) => (
          <div
            key={it.product.id}
            className="flex items-center gap-4 border p-3 rounded bg-white"
          >
            <img
              src={it.product.img}
              alt={it.product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-semibold">{it.product.name}</div>
              <div className="text-sm">Unit: ${it.product.price.toFixed(2)}</div>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => dispatch(decrement(it.product.id))}
                  className="px-2 border rounded"
                >
                  -
                </button>
                <span>{it.qty}</span>
                <button
                  onClick={() => dispatch(increment(it.product.id))}
                  className="px-2 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItem(it.product.id))}
                  className="ml-4 text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="font-bold">
              ${(it.product.price * it.qty).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded flex justify-between">
        <div>
          Total Cost: <span className="font-bold">${totalCost.toFixed(2)}</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setPage("products")}
            className="px-4 py-2 border rounded"
          >
            Continue shopping
          </button>
          <button
            onClick={() => alert("Coming Soon")}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
