import router from "next/router";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts() {
  const trackProducts = products.filter(
    (product) => product.category === "Tracking Device"
  );

  return (
    <section className="p-6 w-[90%] md:w-[90%] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Tracking Device</h2>
        <button
          className="text-sm text-[#7D0101] hover:underline flex items-center gap-1"
          onClick={() => router.push("/category/tracking-devices")}
        >
          See all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {trackProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
