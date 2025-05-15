import { TrashIcon, X } from "lucide-react";
import React from "react";
import { useRouter } from "next/router";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-hot-toast";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vat = cart.reduce((acc, item) => acc + item.vat * item.quantity, 0);
  const total = subtotal + vat;

  const format = (amt: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amt);

  const router = useRouter();
  if (!isOpen) return null;

  const handleCheckout = () => {
    router.push("/checkout");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1100] bg-black/50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-6 flex flex-col relative overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center pb-3 border-b border-[#EEEEEE]">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <div className="text-base text-black bg-[#F1F1F1] rounded-full px-3 py-1.5">
              ({cart.length})
            </div>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center pt-10">
            <img
              src="/images/empty-cart.png"
              alt="Empty Cart"
              className="w-40 h-32 object-contain mb-4"
            />
            <h3 className="text-base font-medium">Your Cart is Empty</h3>
            <p className="text-sm text-gray-500 mt-1">
              Add some items to the cart.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#7D0101] hover:bg-[#a30000] text-white text-sm px-4 py-2 rounded"
            >
              See Products & Add
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto my-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-4 border-b border-[#EEEEEE]"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × {format(item.price)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p>{format(item.price * item.quantity)}</p>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast(`${item.name} removed from cart`, {
                          icon: "🗑️",
                          style: {
                            borderRadius: "4px",
                            background: "#222",
                            color: "#fff",
                          },
                        });
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-5 h-5 mt-2"/>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal and Checkout */}
            <div className="border-t border-[#EEEEEE] pt-3">
              <div className="text-sm mb-4 space-y-1">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{format(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT:</span>
                  <span>{format(vat)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>{format(total)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#7D0101] hover:bg-[#a30000] text-white py-3 rounded text-sm"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;











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
//             <button onClick={() => removeFromCart(item.id)}>🗑</button>
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
