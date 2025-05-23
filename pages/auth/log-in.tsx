import { Onest } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
        <Image
          src="/icons/logo-2.svg"
          alt=""
          width={100}
          height={100}
          className="mb-16"
        />
        <p
          className={`text-2xl font-medium ${onest.className} text-[#272727] `}
        >
          Login to Manage Your Business
        </p>
        <p className="text-xs font-medium  text-[#272727B2] mt-2 mb-12 ">
          Don`t have an account ?{" "}
          <Link href="/sign-up" className="text-[#7D0101]">
            Sign Up
          </Link>
        </p>

        <div className="mb-4">
          <p className="text-sm mb-3 text-[#272727]">Email or Phone Number</p>

          <div className="flex">
            <input
              type="text"
              placeholder="Enter your phone number"
              className="h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 px-3 border rounded  w-full"
            />
          </div>
        </div>

        <div className="mb-1">
          <p className="text-sm mb-3">Password</p>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className=" h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 pl-3 pr-24 border rounded w-full"
              placeholder="Enter your password"
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className={` text-[11px] font-medium rounded cursor-pointer right-6 top-2 flex justify-center items-center h-6 w-12 absolute bg-[#7D01011A] text-[#7d0101] ${onest.className} `}
            >
              {showPassword ? "Hide" : "Show"}
            </p>
          </div>
        </div>

        <div className="mb-9">
          <Link
            href="/forgot-password"
            className={` text-xs ${onest.className} text-[#7d0101]  `}
          >
            Forgot Password? 
          </Link>
        </div>

        <button
          className={` flex justify-center items-center w-full h-11 mb-14 cursor-pointer text-sm bg-[#7d0101] rounded text-[#fff] ${onest.className} `}
        >
          Login
          <Image
            src="/icons/arrow-next.svg"
            alt=""
            width={20}
            height={20}
            className="ml-2"
          />
        </button>
      </section>
    </div>
  );
}
