import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      image: "/images/cam1.png",
      title: (
        <>
          Get proof of delivery with <br /> Hikvision
        </>
      ),
      price: 500000,
      vatPrice: 600000,
    },
    {
      image: "/images/fuse.png",
      title: (
        <>
          Compact PoE Switches 10/100 or <br /> 10/100/1000
        </>
      ),
      price: 5000000,
      vatPrice: 6000000,
    },
    {
      image: "/images/cam2.png",
      title: (
        <>
          Discover Hikvision's Latest <br /> ColorVu Technology
        </>
      ),
      price: 500000,
      vatPrice: 600000,
    },
  ];

  return (
    <section className="p-6 w-[90%] md:w-[90%] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Featured Products</h2>
        <button className="text-sm text-[#006699] hover:underline flex items-center gap-1">
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
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
