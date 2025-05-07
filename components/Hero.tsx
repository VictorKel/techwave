export default function Hero() {
    return (
      <section className="bg-cover h-[100vh] bg-center" style={{ backgroundImage: 'url(/hero.png)' }}>
        <div className="pl-20 pt-89 text-white">
          <h1 className="text-6xl font-bold">Professional Cabling <br/> Services</h1>
          <p className="text-sm mt-4">Expert installation and maintenance for dependable connectivity.</p>
          <button className="mt-4 px-6 py-2 bg-[#7D0101] text-base cursor-pointer text-white rounded-md">Connect With Our Experts</button>
        </div>
      </section>
    );
};