import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CardPaymentModal from "@/components/CardPaymentModal";
import { useCart } from "../contexts/CartContext";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  region: string;
  city: string;
  delivery: string;
  payment: string;
}

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showCardModal, setShowCardModal] = useState(false);
  const { cart } = useCart();

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Data:", data);
    if (data.payment === "Pay with Monieswitch") {
      setShowCardModal(true);
    } else {
      alert("Proceeding with: " + data.payment);
    }
  };

  const shippingFee = 5000;

  const subtotal  = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const vat = cart.reduce((acc, item) => acc + item.vat * item.quantity, 0);

  const total = subtotal + vat + shippingFee;

  const formatAmount = (amt: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      currencyDisplay: "code",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amt);

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 md:px-12 py-25">
      <div className="flex items-center mb-6">
        <img
          src="/images/arrowback.png"
          alt="Back"
          className="w-3 h-5 object-cover rounded mr-3 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <h1 className="text-2xl font-semibold text-black">Checkout</h1>
      </div>

      {showCardModal && (
        <CardPaymentModal onClose={() => setShowCardModal(false)} />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Customer Address */}
          <div className="bg-white rounded-md p-6 shadow-sm">
            <div className="border-b border-[#EEEEEE] text-gray-300 mb-6">
              <h2 className="text-sm font-semibold mb-2">CUSTOMER ADDRESS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  placeholder="Enter your first name"
                  className="outline-none border border-[#EEEEEE] text-gray-300 mt-2"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-sm text-[#7D0101]">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  placeholder="Enter your last name"
                  className="outline-none border border-[#EEEEEE] text-gray-300 mt-2"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-sm text-[#7D0101]">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Enter your email address"
                  className="outline-none border border-[#EEEEEE] text-gray-300 mt-2"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-[#7D0101]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  placeholder="Enter your phone number"
                  className="outline-none border border-[#EEEEEE] text-gray-300 mt-2"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-[#7D0101]">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <Label htmlFor="address1">Home Address</Label>
                <Input
                  placeholder="Enter your home address"
                  className="outline-none border border-[#EEEEEE] text-gray-300 mt-2"
                  {...register("address1", { required: "Address is required" })}
                />
                {errors.address1 && (
                  <p className="text-sm text-[#7D0101]">
                    {errors.address1.message}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <Label htmlFor="address2">Additional Address</Label>
                <Input
                  placeholder="Enter your address"
                  className="outline-none border border-[#EEEEEE] text-gray-300 mt-2"
                  {...register("address2")}
                />
              </div>
              <div>
                <Label htmlFor="region" className="mb-2">
                  Region
                </Label>
                <Controller
                  name="region"
                  control={control}
                  rules={{ required: "Region is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#F0F4F8] text-black">
                        <SelectItem
                          value="north"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          North
                        </SelectItem>
                        <SelectItem
                          value="south"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          South
                        </SelectItem>
                        <SelectItem
                          value="east"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          East
                        </SelectItem>
                        <SelectItem
                          value="west"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          West
                        </SelectItem>
                        <SelectItem
                          value="central"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Central
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.region && (
                  <p className="text-sm text-[#7D0101]">
                    {errors.region.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="city" className="mb-2">
                  State
                </Label>
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: "City is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#F0F4F8] text-black">
                        <SelectItem
                          value="lagos"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Lagos
                        </SelectItem>
                        <SelectItem
                          value="abuja"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Abuja
                        </SelectItem>
                        <SelectItem
                          value="port-harcourt"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Port Harcourt
                        </SelectItem>
                        <SelectItem
                          value="kano"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Kano
                        </SelectItem>
                        <SelectItem
                          value="ibadan"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Ibadan
                        </SelectItem>
                        <SelectItem
                          value="enugu"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Enugu
                        </SelectItem>
                        <SelectItem
                          value="benin-city"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Benin City
                        </SelectItem>
                        <SelectItem
                          value="jos"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Jos
                        </SelectItem>
                        <SelectItem
                          value="kaduna"
                          className="hover:bg-[#E0ECF4] focus:bg-[#D0E4F0] cursor-pointer"
                        >
                          Kaduna
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.city && (
                  <p className="text-sm text-[#7D0101]">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-white rounded-md p-6 shadow-sm">
            <div className="border-b border-[#EEEEEE] mb-6">
              <h2 className="text-sm font-semibold mb-2">DELIVERY METHOD</h2>
            </div>
            <Controller
              name="delivery"
              control={control}
              rules={{ required: "Delivery method is required" }}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={(val) => {
                    field.onChange(val);
                    setSelectedDelivery(val);
                  }}
                  value={field.value}
                >
                  <div className="space-y-4">
                    {[
                      { label: "🏪 Store", value: "store" },
                      { label: "🏠 Home Delivery", value: "home" },
                    ].map(({ label, value }) => (
                      <Label
                        key={value}
                        className={`flex items-center justify-between px-4 py-2 rounded cursor-pointer border ${
                          selectedDelivery === value
                            ? "bg-[#FFF7F7] border-[#CCCCCC] text-[#272727]"
                            : "border border-[#EEEEEE]"
                        }`}
                      >
                        <span className="flex items-center gap-2 ">
                          {label}
                        </span>
                        <RadioGroupItem value={value} />
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
              )}
            />
            {errors.delivery && (
              <p className="text-sm text-red-500">{errors.delivery.message}</p>
            )}
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-md p-6 shadow-sm">
            <div className="border-b border-[#EEEEEE] mb-6">
              <h2 className="text-sm font-semibold mb-2">PAYMENT METHOD</h2>
            </div>
            <Controller
              name="payment"
              control={control}
              rules={{ required: "Payment method is required" }}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={(val) => {
                    field.onChange(val);
                    setSelectedPayment(val);
                  }}
                  value={field.value}
                >
                  <div className="space-y-4">
                    {[
                      "Pay on Delivery",
                      "Pay with Monieswitch",
                      "Pay with Paystack",
                      "Pay Bank transfer",
                    ].map((method) => (
                      <Label
                        key={method}
                        className={`flex items-center justify-between px-4 py-2 rounded cursor-pointer border ${
                          selectedPayment === method
                            ? "bg-[#FFF7F7] border-[#CCCCCC]"
                            : "border-[#EEEEEE]"
                        }`}
                      >
                        <span>{method}</span>
                        <RadioGroupItem value={method} />
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
              )}
            />
            {errors.payment && (
              <p className="text-sm text-red-500">{errors.payment.message}</p>
            )}
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-white rounded-md p-6 shadow-sm">
            <div className="border-b border-[#EEEEEE] mb-6">
              <h2 className="text-sm font-semibold mb-2">Order Summary</h2>
            </div>
            <div className="border-b border-[#EEEEEE] mb-6 space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-4">
                  <img
                    src={item.images[0] || "/images/placeholder.png"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty {item.quantity}</p>
                  </div>
                  <span className="ml-auto text-sm font-medium">
                    {formatAmount(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-b border-[#EEEEEE]">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatAmount(subtotal).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#7D0101]">
                  <span>Vat</span>
                  <span>{formatAmount(vat).toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Shipping fees</span>
                  <span>{formatAmount(shippingFee).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between font-semibold mt-4 mb-4">
              <span>Total</span>
              <span>{formatAmount(total).toLocaleString()}</span>
            </div>

            {/* Promo Code */}
            <div className="bg-[#FAFAFA] p-4 rounded mb-4">
              <h2>Promo Code</h2>
              <div className="p-4">
                <Label htmlFor="promo">Promo Code</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    id="promo"
                    className="outline-none border border-[#EEEEEE] mt-2"
                  />
                  <button className="bg-[#7D0101] text-white  text-xs w-full py-2 rounded-md">
                    Apply Code
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7D0101] text-white py-2 rounded-md text-sm"
            >
              Proceed to payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
