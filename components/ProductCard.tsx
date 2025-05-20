import Link from "next/link";
import Image from 'next/image';
import { ChevronDown } from "lucide-react";
import { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  const formatAmount = (amt: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      currencyDisplay: "code",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amt);

  const altText = typeof name === 'string' ? name : 'Product Image';

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white transition-transform hover:scale-[1.02] duration-200 space-y-4 cursor-pointer">
        <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white">
          <Image
           src={product.images?.[0] || "placeholder.png"}
           alt={altText}
           fill
           className="object-cover"
           sizes="(max-width: 768px) 100vw, 33vw"
         />
        </div>

        <div className="px-2 pb-4 space-y-4">
          <h3 className="leading-tight font-medium">{product.name}</h3>

          <div className="flex items-center justify-between text-xs mt-1">
            <div className="flex items-center text-zinc-400 cursor-pointer gap-1">
              <span>Color</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            <span className="font-semibold text-[#7D0101]">
              {formatAmount(product.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};