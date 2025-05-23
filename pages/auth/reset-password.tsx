import { Onest } from "next/font/google";

import Link from "next/link";
import Image from "next/image";
import React from "react";
const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

export default function ResetPassword() {
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
        <Link
          href="/sign-in"
          className="mb-10 flex cursor-pointer space-x-2 items-center"
        >
          <Image src="/icons/arrow-back.svg" alt="" height={20} width={20} />
          <p className="text-xs font-medium">Back to Sign In</p>
        </Link>
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
          Reset Password
        </p>
        <p
          className={`text-xs  ${onest.className} text-[#6D6D6D] mb-5 w-[90%] leading-5 `}
        >
          Enter the 6-digit OTP code sent to your email address and proceed to
          enter your new password to reset your password.
        </p>

        <div className="mb-6">
          <p className="text-sm mb-3 text-[#272727]">OTP Code</p>

          <div className="flex">
            <input
              type="number"
              placeholder="Enter 6-digit code"
              className="h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 px-3 border rounded  w-full"
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-sm mb-3">New Password</p>
          <div className="relative">
            <input
              type="password"
              className=" h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 pl-3 pr-24 border rounded w-full"
            />
            <p
              className={` text-[11px] font-medium rounded right-6 top-2 flex justify-center items-center h-6 w-12 absolute bg-[#7D01011A] text-[#7d0101] ${onest.className} `}
            >
              Show
            </p>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-sm mb-3">Confirm Password</p>
          <div className="relative">
            <input
              type="password"
              className=" h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 pl-3 pr-24 border rounded w-full"
            />
            <p
              className={` text-[11px] font-medium rounded right-6 top-2 flex justify-center items-center h-6 w-12 absolute bg-[#7D01011A] text-[#7d0101] ${onest.className} `}
            >
              Show
            </p>
          </div>
        </div>

        <div className="p-5 bg-[#7D01010D] rounded mb-4 font-medium  ">
          <p className="text-xs font-medium mb-4">Password Policy</p>

          <li className="text-xs ">upper and lower case letter [Aa-Zb]</li>
          <li className="text-xs ">one digit [0-9]</li>
          <li className="text-xs ">one special character [!@#$%^&*_=+-/]</li>
          <li className="text-xs ">minimum length of eight characters</li>
        </div>

        <button
          className={` flex justify-center items-center w-full h-11 mb-8 cursor-pointer text-sm bg-[#7d0101] rounded text-[#fff] ${onest.className} `}
        >
          Rest Password
        </button>
      </section>
    </div>
  );
}
