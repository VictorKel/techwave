import { X } from "lucide-react";
import React from "react";
import { useRouter } from "next/router";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  if (!isOpen) return null;

  const handleCheckout = () => {
    router.push("/checkout"); 
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1100] bg-black/50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-6 flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center pb-3 border-b border-[#EEEEEE]">
            <div className="flex items-center space-x-4">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <div className="text-base text-black bg-[#F1F1F1] rounded-full px-3 py-1.5">0</div>
            </div>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Empty Cart */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src="/images/empty-cart.png"
            alt="Empty Cart"
            className="w-35 h-25"
          />
          <h3 className="text-base font-medium">Your Cart is Empty</h3>
          <p className="text-sm text-gray-500 mt-1">Add some items to the cart.</p>
          <button className="mt-4 bg-[#7D0101] hover:bg-[#7D0101] text-white text-sm px-4 py-2 rounded">
            See Products & Add
          </button>
        </div>

        {/* Subtotal and Checkout */}
        <div className="w-full border-t border-[#EEEEEE] pt-3">
          <div className="flex justify-between text-sm mb-4">
            <span>Subtotal:</span>
            <span className="font-bold">₦0</span>
          </div>
          <button 
                onClick={handleCheckout}
                className="w-full bg-[#7D0101] text-white py-3 rounded text-sm"
           >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
