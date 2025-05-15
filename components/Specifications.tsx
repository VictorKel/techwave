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



// import { X } from "lucide-react";
// import React from "react";
// import { useRouter } from "next/router";
// import { useCart } from "../contexts/CartContext";
// import { toast } from "react-hot-toast"

// interface CartModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
//   const { cart, removeFromCart } = useCart();

//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const vat = cart.reduce((acc, item) => acc + item.vat * item.quantity, 0);
//   const total = subtotal + vat;

  

//   const format = (amt: number) =>
//     new Intl.NumberFormat("en-NG", {
//       style: "currency",
//       currency: "NGN",
//     }).format(amt);

//   const router = useRouter();
//   if (!isOpen) return null;

//   const handleCheckout = () => {
//     router.push("/checkout");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-[1100] bg-black/50 flex justify-end">
//       <div className="bg-white w-full max-w-md h-full p-6 flex flex-col relative">
//         {/* Header */}
//         <div className="flex justify-between items-center pb-3 border-b border-[#EEEEEE]">
//           <div className="flex items-center space-x-4">
//             <h2 className="text-lg font-semibold">Your Cart</h2>
//             <div className="text-base text-black bg-[#F1F1F1] rounded-full px-3 py-1.5">
//               ({cart.length})
//             </div>
//           </div>
//           <button onClick={onClose}>
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Empty Cart */}
//         {/* {cartItems.length === 0 ? (
//           <div className="flex-1 flex flex-col items-center justify-center">
//             <img
//               src="/images/empty-cart.png"
//               alt="Empty Cart"
//               className="w-35 h-25"
//             />
//             <h3 className="text-base font-medium">Your Cart is Empty</h3>
//             <p className="text-sm text-gray-500 mt-1">
//               Add some items to the cart.
//             </p>
//             <button className="mt-4 bg-[#7D0101] hover:bg-[#7D0101] text-white text-sm px-4 py-2 rounded">
//               See Products & Add
//             </button>
//           </div>
//         ) : (
//           cartItems.map(({ product, quantity }) => (
//             <div key={product.id}>
//               <img src={product.images[0]} alt={product.name} />
//               <p>{product.name}</p>
//               <p>Qty: {quantity}</p>
//               <p>Price: ₦{product.price.toLocaleString()}</p>
//               {/* Add subtotal, delete button etc. */}
//             </div>
//           {/* ))
//         )} */}

//         {cart.map((item) => (
//           <div key={item.id} className="flex justify-between items-center py-4">
//             <img src={item.images[0]} className="w-20 h-20 object-cover" />
//             <div>
//               <p className="font-medium">{item.name}</p>
//               <p className="text-sm text-gray-500">
//                 {item.quantity} × {format(item.price)}
//               </p>
//             </div>
//             <p>{format(item.price * item.quantity)}</p>
//             <button 
//                onClick={() => {
//                 removeFromCart(item.id);
//                 toast(`${item.name} removed from cart`, {
//                   icon: '🗑️',
//                   style: {
//                     borderRadius: '8px',
//                     background: '#222',
//                     color: '#fff',
//                   },
//                 });
//               }}
//             >
//               🗑
//             </button>
//           </div>
//         ))}
//         <hr />

//         {/* Subtotal and Checkout */}
//         <div className="w-full border-t border-[#EEEEEE] pt-3">
//           <div className="flex justify-between text-sm mb-4">
//             <div>
//               <span>Subtotal:</span>
//               <p>VAT: {format(vat)}</p>
//               <span className="font-bold">{format(subtotal)}</span>
//               <p className="font-bold">Total: {format(total)}</p>
            
//           </div>
//           <button
//             onClick={handleCheckout}
//             className="w-full bg-[#7D0101] text-white py-3 rounded text-sm"
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;
