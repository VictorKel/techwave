
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

interface Props {
  onClose: () => void;
  amount?: number;
  email?: string;
  onPaymentSuccess?: () => void;
}

const CardPaymentModal: React.FC<Props> = ({
  onClose,
  amount = 500,
  email = "testing@testingteam.com",
  onPaymentSuccess,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [reference, setReference] = useState("");
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins in seconds
  const [bankSuccess, setBankSuccess] = useState(false);

  useEffect(() => {
    const cardValid = /^\d{16}$/.test(cardNumber.replace(/\s+/g, ""));
    const expiryValid = /^(0[1-9]|1[0-2])\/\d{4}$/.test(expiry);
    const cvvValid = /^\d{3}$/.test(cvv);
    setIsValid(cardValid && expiryValid && cvvValid);
  }, [cardNumber, expiry, cvv]);

  useEffect(() => {
    if (paymentMethod === "bank") {
      const interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [paymentMethod]);

  useEffect(() => {
    if (bankSuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [bankSuccess, onClose]);

  const formatAmount = (amt: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      currencyDisplay: "code",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amt);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const bankDetails = [
    { label: "Amount", value: formatAmount(amount) },
    { label: "Account number", value: "9023474808", copyable: true },
    { label: "Bank name", value: "Monieswitch" },
    { label: "Account name", value: "Campeonbet" },
  ];

  const handleCardPayment = () => {
    setTimeout(() => {
      alert("Card payment successful!");
      onPaymentSuccess?.();
    }, 1000);
  };

  const handleBankConfirmation = () => {
    setBankSuccess(true);
    onPaymentSuccess?.();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm  z-1100 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-7 right-114 text-lg text-white"
      >
        ✕
      </button>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-[400px] p-6 rounded relative"
        >
          <div className="flex justify-between text-center mb-6">
            <img
              src="/images/monieswitch-logo.png"
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="text-sm mt-2">{email}</p>
              <p className="text-xs text-end text-[#FB9701] font-medium">
                Pay {formatAmount(amount)}
              </p>
            </div>
          </div>

          <div className="flex justify-between p-2 mb-4 bg-[#FFF7F7] rounded-full">
            <button
              className={`flex items-center py-2 px-3 rounded-full text-sm font-medium ${
                paymentMethod === "card"
                  ? "bg-[#FB9701] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              <img
                src="/images/card.png"
                alt="Card"
                className="w-3 h-3 object-cover rounded mr-2"
              />
              Card Payment
            </button>
            <button
              className={`flex items-center py-2 px-3 rounded-full text-sm font-medium ${
                paymentMethod === "bank"
                  ? "bg-[#FB9701] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setPaymentMethod("bank")}
            >
              <img
                src="/images/bank.png"
                alt="Bank"
                className="w-5 h-5 object-cover rounded mr-2"
              />
              Bank Transfer
            </button>
          </div>

          {paymentMethod === "card" ? (
            <div className="space-y-4">
              <p className="mb-5 text-sm">
                Enter your card details to continue this transaction
              </p>
              <div>
                <label className="block text-xs mb-1">Card Number</label>
                <input
                  className="w-full outline-none border border-[#EEEEEE] p-2 rounded text-sm"
                  placeholder="Enter your card number"
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                    )
                  }
                />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs mb-1">Expires</label>
                  <input
                    className="w-full outline-none border border-[#EEEEEE] p-2 rounded text-sm"
                    placeholder="MM/YYYY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs mb-1 flex items-center gap-1">
                    CVV
                    <span
                      className="text-sm font-bold border border-[#FB9701] rounded-full w-4 h-4 flex items-center justify-center cursor-help"
                      title="3-digit code at the back of your card"
                    >
                      <p className="text-[#FB9701]">?</p>
                    </span>
                  </label>
                  <input
                    className="w-full outline-none border border-[#EEEEEE] p-2 rounded text-sm"
                    placeholder="CVV"
                    maxLength={3}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#FB9701]" />
                <label className="text-xs">Save card information</label>
              </div>
              <button
                disabled={!isValid}
                onClick={handleCardPayment}
                className={`w-full py-2 rounded text-white text-sm font-bold ${
                  isValid ? "bg-[#FB9701]" : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Make payment
              </button>
            </div>
          ) : bankSuccess ? (
            <div className="text-center py-10">
              <img
                src="/icons/success-check.svg"
                alt="Success"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                Payment Confirmed!
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                We've successfully received your bank transfer.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#FB9701] text-white rounded text-sm font-medium"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded bg-[#FFF7F7] border border-dotted border-[#FFF7F7]">
                <p className="text-center text-xs font-medium mb-1">
                  Account expires in
                </p>
                <p className="text-center text-2xl font-semibold mb-4">
                  {formatTime(timeLeft)} minutes
                </p>

                <div className="space-y-3 text-sm mb-4">
                  {bankDetails.map(({ label, value, copyable }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center  pb-1"
                    >
                      <span className="font-medium text-gray-700">
                        {label}:
                      </span>
                      <span className="font-semibold text-right text-black flex items-center gap-1">
                        {value}
                        {copyable && (
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(value);
                              toast.success("Account number copied!");
                            }}
                            title="Copy to clipboard"
                            className="w-6 h-6 bg-[#FB9701] rounded-sm flex items-center justify-center"
                          >
                            <img
                              src="/icons/copy.svg"
                              alt="copy"
                              className="w-4 h-4"
                            />
                          </button>
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <input
                  className="w-full outline-none border border-[#EEEEEE] p-2 rounded text-sm mb-4"
                  placeholder="Enter transfer reference"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
                <button
                  disabled={reference.length < 5}
                  onClick={handleBankConfirmation}
                  className={`w-full py-2 rounded text-white text-sm font-bold ${
                    reference.length >= 5
                      ? "bg-[#FB9701]"
                      : "bg-gray-300 text-black cursor-not-allowed"
                  }`}
                >
                  I've made the transfer
                </button>
              </div>
            </div>
          )}

          <p className="text-center text-xs mt-4 text-gray-500">
            🔒 Secured by Monieswitch
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardPaymentModal;