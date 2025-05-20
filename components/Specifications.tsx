import { Product } from '../types';

interface Props {
  product: Product;
}

export default function Specifications({ product }: Props) {
  return (
    <section className="py-8 p-6 w-[90%] md:w-[90%] mx-auto">
      <div className="bg-[#7D0101] p-2 w-fit rounded-sm mb-6">
        <h2 className="text-base font-semibold text-white">Specification</h2>
        
      </div>

      <div className="space-y-2 text-sm items-center">
        {product.specifications.map((spec, i) => (
          <div key={i} className="flex items-start gap-3">
            {/* Custom red round bullet */}
            <span className="mt-1 w-4 h-4 rounded-full bg-[#7D0101] flex-shrink-0" />
            <p>{spec}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
