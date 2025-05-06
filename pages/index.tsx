import { Instrument_Sans } from "next/font/google";
import Nav from './components/Nav';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import FeaturedProducts from './components/FeaturedProducts';
import NewArrivals from './components/NewArrivals';
import PromoBanner from './components/PromoBanner';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FeaturedProducts2 from './components/FeaturedProducts2';

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${instrumentSans.className} font-sans`}>
      <Nav />
      <Hero />
      <BestSellers />
      <FeaturedProducts />
      <NewArrivals />
      <FeaturedProducts2 />
      <PromoBanner />
      <Newsletter />
      <Footer />
    </div>
  );
};
