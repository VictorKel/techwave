import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useRouter } from "next/router";

type ProductCardProps = {
  image: string;
  title: React.ReactNode;
  price: number;
  vatPrice: number;
};

export default function ProductCard({ image, title, price, vatPrice }: ProductCardProps) {
  const formatAmount = (amt: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      currencyDisplay: 'code',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amt);

  const altText = typeof title === 'string' ? title : 'Product Image';

  const router = useRouter();

  return (
    <div className="bg-white transition-transform hover:scale-[1.02] duration-200 space-y-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white" onClick={() => router.push("/products")}>
        <Image
          src={image}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center justify-between text-sm font-medium text-black mb-6">
          <h3 className="leading-tight">{title}</h3>
          <span className="font-semibold text-[#1A1A1A]">
            {formatAmount(price)}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs mt-1">
          <div className="flex items-center text-zinc-400 cursor-pointer gap-1">
            <span>Color</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="text-[#7D0101] font-semibold">
            VAT: {formatAmount(vatPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};
