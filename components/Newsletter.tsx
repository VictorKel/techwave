export default function Newsletter() {
  return (
    <section className="p-10 mt-10">
      <div className="flex flex-col items-center">
        <p className="bg-[#7D0101] text-white text-sm px-4 py-2 rounded-full w-fit mb-2">
          Newsletter
        </p>
        <h2 className="text-4xl font-semibold mb-4 text-center text-[#111111]">
          Stay Updated on Latest <br /> Product Releases
        </h2>
        <p className="mb-8 text-sm ">
          Never miss a beat and stay up to date with <br /> new product arrivals
          and promotions
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-2 outline-none bg-[#EAEBEA] w-80 rounded-full mr-2"
        />
        <button className="bg-[#7D0101] text-white px-4 py-2 rounded-full">
          Subscribe
        </button>
      </div>
    </section>
  );
};
