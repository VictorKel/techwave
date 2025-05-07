import Image from 'next/image';
import { ChevronDown } from "lucide-react";

type CategoryProductCardProps = {
  title: React.ReactNode;
  price: number;
  vat: number;
  image: string;
};

export default function ProductCard({
  title,
  price,
  vat,
  image,
}: CategoryProductCardProps) {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const altText = typeof title === "string" ? title : "Product Image";

  return (
    <div className="p-4 rounded shadow transition-transform hover:scale-[1.02] duration-200">
      {/* <img src={image} alt={title} className="w-full h-60 object-cover" /> */}
      <Image
        src={image}
        alt={altText}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center justify-between text-sm font-medium text-black mb-6">
          <h3 className="leading-tight">{title}</h3>
          <span className="font-semibold text-[#1A1A1A]">
            {formatter.format(price)}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs mt-1">
          <div className="flex items-center text-zinc-400 cursor-pointer gap-1">
            <span>Color</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="text-[#7D0101] font-semibold">
            VAT: {formatter.format(vat)}
          </span>
        </div>
      </div>
    </div>
  );
};
