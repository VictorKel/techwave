import {  RelatedProduct } from "../types";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import Image from 'next/image';

interface Props {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: Props) {
  const formatAmount = (amt: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      currencyDisplay: "code",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amt);
   
    const router = useRouter();

    const altText = typeof name === 'string' ? name : 'Product Image';

  return (
    <section className="p-6 w-[90%] md:w-[90%] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Related Products</h2>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((prod) => (
          <div key={prod.id} className="bg-white transition-transform hover:scale-[1.02] duration-200 space-y-4">
            <div
              className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white"
              
            >
              <Image
                src={prod.image}
                alt={altText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="px-4 pt-3 pb-4">
              <div className="flex items-center justify-between text-sm font-medium text-black mb-6 space-x-6">
                <h3 className="leading-tight">{prod.name}</h3>
                <span className="font-semibold text-[#1A1A1A]">
                  {formatAmount(prod.price)}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs mt-1">
                <div className="flex items-center text-zinc-400 cursor-pointer gap-1">
                  <span>Color</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <span className="text-[#7D0101] font-semibold">
                  VAT: {formatAmount(prod.vat)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
