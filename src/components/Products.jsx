import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { PRODUCTS } from "../data/products";

export default function Products({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  // Group products by category
  const grouped = PRODUCTS.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Browse Our Plants</h2>

      {Object.keys(grouped).map((cat) => (
        <section key={cat} className="mb-10">
          <h3 className="text-xl font-semibold mb-4">{cat} Plants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {grouped[cat].map((p) => (
              <div
                key={p.id}
                className="border rounded p-4 bg-white shadow-sm"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h4 className="font-semibold">{p.name}</h4>
                <p className="text-gray-600">${p.price}</p>
                <button
                  onClick={() => dispatch(addItem(p))}
                  disabled={items[p.id]}
                  className={`mt-2 px-4 py-2 rounded ${
                    items[p.id]
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {items[p.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
