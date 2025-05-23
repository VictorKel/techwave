import { Onest } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React from "react";
const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

export default function Sign() {
  return (
    <div className=" flex flex-wrap mx-5  justify-between">
      <section className="bg-[url('/images/signup-img.webp')] bg-cover bg-bottom h-[94vh] w-[53%] fixed  rounded-2xl mt-4">
        <div className="pt-90 pl-6">
          <Image
            src="/images/logo.png"
            alt=""
            width={130}
            height={0}
            className=" h-10 pt-2 mb-4"
          />
          <p
            className={` text-5xl w-[90%] leading-14 tracking-wide font-semibold  text-[#fff]  ${onest.className} `}
          >
            Simplify Your Business with Business name
          </p>
        </div>
      </section>
      <section className="w-[35%] ml-[60%] mt-18">
        {/* <Image
          src="/icons/logo-2.svg"
          alt="Dartwood"
          width={100}
          height={100}
          className="mb-8"
        /> */}
        <div className="mb-10 flex space-x-2 items-center">
          <Image src="/icons/arrow-back.svg" alt="" height={20} width={20} />
          <p className="text-xs font-medium">Back to Login</p>
        </div>
        <Image
          src="/icons/biglock.svg"
          alt="secured"
          width={40}
          height={40}
          className="mb-8"
        />
        <p
          className={`text-2xl font-medium ${onest.className} text-[#272727] mb-4 `}
        >
          Forgot Password
        </p>
        <p
          className={`text-xs  ${onest.className} text-[#6D6D6D] mb-10 w-[75%] leading-5 `}
        >
          Enter your registered email address and we’ll send you a 6-digit code
          to reset your password.
        </p>

        <div className="mb-12">
          <p className="text-sm mb-3 text-[#272727]">Email Address</p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 px-3 border rounded  w-full"
            />
          </div>
        </div>

        <button
          className={` flex justify-center items-center w-full h-11 mb-8 cursor-pointer text-sm bg-[#7d0101] rounded text-[#fff] ${onest.className} `}
        >
          Submit
        </button>
      </section>
    </div>
  );
}
