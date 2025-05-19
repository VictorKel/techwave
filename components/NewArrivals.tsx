import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const products = [
    {
      image: "/images/pdu2.png",
      title: (
        <>
          Mixed Horizontal PDU  4 x C13 + 5 x C19
        </>
      ),
      price: 500000,
      vatPrice: 600000,
    },
    {
      image: "/images/pdu1.png",
      title: (
        <>
          Mixed Horizontal PDU  4 x C13 + 5 x C19
        </>
      ),
      price: 500000,
      vatPrice: 600000,
    },
    {
      image: "/images/router.png",
      title: (
        <>
          Mercusys AC12 Cable Router  Dual  Band with Switch 3x 10/100
        </>
      ),
      price: 5000000,
      vatPrice: 6000000,
    },
  ];


  return (
    <section className="p-6 w-[90%] md:w-[90%] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">New Arrivals</h2>
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
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};
  