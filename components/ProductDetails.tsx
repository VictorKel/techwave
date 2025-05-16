import { useState } from "react";
import { Product } from "../types";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const formatAmount = (amt: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      currencyDisplay: "code",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amt);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} × ${product.name} added to cart`, {
      style: {
        borderRadius: '8px',
        background: '#7D0101',
        color: '#fff',
      },
      icon: '🛒',
    });
  };

  return (
    <section className="p-6 w-[90%] md:w-[90%] mx-auto">
      <div className="pt-20 flex space-x-4">
        <a href="/">Home / </a>
        <h2>Cabling / </h2>
        <h2 className="text-[#272727]">{product.name}</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-15 py-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-3/5 bg-[#EBEBEB] p-3 rounded-md">
          <img
            src={selectedImage}
            alt={product.name}
            className="rounded-lg w-full max-h-[570px] object-cover"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                  selectedImage === img
                    ? "border-[#7D0101]"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-4xl font-bold mb-5">{product.name}</h1>

          <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-12">
            <p>
              Part: <span className="text-[#272727]">{product.part}</span>
            </p>
            <p>
              Brand: <span className="text-[#7D0101]">{product.brand}</span>
            </p>
            <p>
              Availability:{" "}
              <span className="text-[#69B809]">{product.availability}</span>
            </p>
          </div>

          <div className="space-y-4 text-sm items-center mb-4">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-[#7D0101] flex-shrink-0" />
                <p>{f}</p>
              </div>
            ))}
          </div>

          <div className="space-y-1 mb-6">
            <div className="flex space-x-8">
              <p className="text-sm text-gray-500">
                Unit Price: {formatAmount(product.price)}
              </p>
              <p className="text-sm text-[#7D0101]">
                Unit VAT: {formatAmount(product.vat)}
              </p>
            </div>
            <div className="flex space-x-8">
              <p className="text-xl font-semibold text-black mt-1">
                Total: {formatAmount(product.price * quantity)}
              </p>
              <p className="text-md text-[#7D0101] mt-1">
                VAT: {formatAmount(product.vat * quantity)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8 bg-[#F1F1F1] p-2 w-fit rounded-md">
            <button
              onClick={decrement}
              className="text-black px-2 py-1 text-lg"
            >
              –
            </button>
            <span className="text-xl font-medium">{quantity}</span>
            <button
              onClick={increment}
              className="text-black px-2 py-1 text-lg"
            >
              +
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-4 items-center">
            <button 
             className=" w-full  text-gray-400 border border-[#7D010140] px-6 py-2 rounded-md"
             onClick={handleAddToCart}
            >
                <div className="flex items-center justify-center w-full gap-2">

                    Add to Cart
                    <FaShoppingCart className="text-lg ml-3 text-[#272727]" />
                </div>
            </button>
            <button className="bg-[#7D0101] w-full text-white px-6 py-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
