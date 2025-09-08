import React from "react";

export default function Landing({ setPage }) {
  return (
    <div className="min-h-[60vh] bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center flex items-center">
      <div className="bg-white/85 max-w-4xl mx-auto p-8 rounded-md shadow-lg">
        <h1 className="text-4xl font-extrabold">Paradise Nursery</h1>
        <p className="mt-4 text-gray-700">
          Paradise Nursery brings lush, healthy houseplants to your home.
          Carefully grown and sustainably sourced — we make it easy to keep your
          space green.
        </p>
        <button
          onClick={() => setPage("products")}
          className="mt-6 px-5 py-2 bg-green-600 text-white rounded-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
