import React from "react";

export default function Landing({ setPage }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/src/assets/landing-bg.jpg')", // use your downloaded image
      }}
    >
      <div className="max-w-4xl bg-black/80 p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-green-300">
          Paradise Nursery
        </h1>
        <p className="text-xl leading-relaxed mb-10 text-gray-100">
          Welcome to <span className="font-semibold text-green-200">Paradise Nursery</span>, 
          your trusted destination for lush and vibrant houseplants. Whether you’re 
          an experienced plant enthusiast or just starting your journey, we provide 
          carefully selected plants that thrive in every space — from cozy apartments 
          and busy offices to sunlit patios. Our commitment goes beyond greenery; we 
          believe plants bring calm, creativity, and inspiration to your everyday life. 
          Each plant is sustainably grown, hand-picked for health and beauty, and 
          delivered with care, ensuring you always feel the joy of nature indoors.
          <br /><br />
          At Paradise Nursery, we make it simple to transform your home or workspace 
          into a natural sanctuary. Browse our curated collections, explore care tips, 
          and bring home a plant companion that grows with you. Let’s cultivate 
          happiness, one leaf at a time.
        </p>
        <button
          onClick={() => setPage("products")}
          className="px-8 py-4 text-lg bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
