import React from "react";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 md:px-12 py-25">
      <h1 className="text-2xl font-semibold mb-6 text-black">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Customer Address */}
          <div className="bg-white rounded-md p-6 shadow-sm">
            <h2 className="text-sm font-semibold mb-4">CUSTOMER ADDRESS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Enter your first name" className="input" />
              <input placeholder="Enter your last name" className="input" />
              <input placeholder="Enter your email address" className="input" />
              <input placeholder="Enter your phone number" className="input" />
              <input placeholder="Enter your home address" className="input col-span-2" />
              <input placeholder="Enter your address" className="input col-span-2" />
              <select className="input">
                <option>Select your region</option>
              </select>
              <select className="input">
                <option>Select your city</option>
              </select>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-white rounded-md p-6 shadow-sm">
            <h2 className="text-sm font-semibold mb-4">DELIVERY METHOD</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between border px-4 py-2 rounded cursor-pointer">
                <span className="flex items-center gap-2">
                  <span>🏪</span> Store
                </span>
                <input type="radio" name="delivery" />
              </label>
              <label className="flex items-center justify-between border px-4 py-2 rounded cursor-pointer">
                <span className="flex items-center gap-2">
                  <span>🏠</span> Home Delivery
                </span>
                <input type="radio" name="delivery" />
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-md p-6 shadow-sm">
            <h2 className="text-sm font-semibold mb-4">PAYMENT METHOD</h2>
            <div className="space-y-4">
              {["Pay on Delivery", "Pay with Monieswitch", "Pay with Paystack", "Pay Bank transfer"].map((method, i) => (
                <label key={i} className="flex items-center justify-between border px-4 py-2 rounded cursor-pointer">
                  <span>{method}</span>
                  <input type="radio" name="payment" />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-[350px]">
          <div className="bg-white rounded-md p-6 shadow-sm">
            <h2 className="text-sm font-semibold mb-4">Order Summary</h2>
            <div className="flex items-center gap-4 mb-4">
              <img src="/images/pdu1.png" alt="Product" className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="text-sm font-medium">Get proof of delivery with Hikvision</p>
                <p className="text-xs text-gray-500">Qty 1</p>
              </div>
              <span className="ml-auto text-sm font-medium">₦500,000.00</span>
            </div>

            <div className="text-sm space-y-2 mb-4">
              <div className="flex justify-between"><span>Subtotal</span><span>₦500,000.00</span></div>
              <div className="flex justify-between"><span>Shipping fees</span><span>₦5,000.00</span></div>
              <div className="flex justify-between font-semibold"><span>Total</span><span>₦505,000.00</span></div>
            </div>

            {/* Promo Code */}
            <div className="bg-[#FAFAFA] p-4 rounded mb-4">
              <label className="text-sm mb-2 block">Promo Code</label>
              <div className="flex gap-2">
                <input placeholder="Enter promo code" className="input flex-1" />
                <button className="bg-[#7D0101] text-white px-4 text-sm rounded">Apply Code</button>
              </div>
            </div>

            <button className="w-full bg-[#7D0101] text-white py-3 rounded text-sm">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;