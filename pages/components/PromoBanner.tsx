import Image from "next/image";

export default function PromoBanner() {
    return (
      <section className="w-[90%] md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-6">
        <div className="bg-[#7D0101] text-white p-10 rounded-tl-2xl rounded-bl-2xl">
          <h2 className="text-4xl font-bold mb-4 mt-10">Reliable Cabling <br /> Solutions</h2>
          <p className="text-sm">Expert installation and maintenance for dependable connectivity.</p>
          <button className="mt-4 px-4 py-2 bg-white text-sm text-[#7D0101] rounded-sm">Connect With Our Experts</button>
        </div>
        <Image src="/images/plug.png" alt="Logo" width={600} height={30} />
      </section>
    );
  }