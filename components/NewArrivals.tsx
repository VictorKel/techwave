import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function NewArrivals() {
  const fuseProducts = products.filter(
    (product) => product.category === "Fuse"
  );

  return (
    <section className="p-6 w-[90%] md:w-[90%] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Fuse</h2>
        <button className="text-sm text-[#7D0101] hover:underline flex items-center gap-1">
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
        {fuseProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
