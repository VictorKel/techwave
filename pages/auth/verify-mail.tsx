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
        <div className="mb-22 flex space-x-2 items-center">
          <Image src="/icons/arrow-back.svg" alt="" height={30} width={30} />
          <p className="text-sm">Go back</p>
        </div>
        <p
          className={`text-2xl font-medium ${onest.className} text-[#272727] mb-4 `}
        >
          Verify your email address
        </p>
        <p className={`text-xs  ${onest.className} text-[#6D6D6D] mb-10 `}>
          We have just sent a 6-digit OTP code to{" "}
          <span className="text-[#7d0101] font-medium ">
            tobilobaakintunde@gmail.com
          </span>
          . Check your inbox and enter it here
        </p>

        <div className="mb-12">
          <p className="text-sm mb-3 text-[#272727]">Enter OTP</p>

          <div className="flex">
            <input
              type="number"
              placeholder="Enter 6-digit code"
              className="h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 px-3 border rounded  w-full"
            />
          </div>
        </div>

        <button
          className={` flex justify-center items-center w-full h-11 mb-8 cursor-pointer text-sm bg-[#7d0101] rounded text-[#fff] ${onest.className} `}
        >
          Verify Email
          <Image
            src="/icons/arrow-next.svg"
            alt=""
            width={20}
            height={20}
            className="ml-2"
          />
        </button>
        <div className="flex justify-between ">
          <p className="text-xs text-[#6d6d6d] font-medium">
            Didn`t get the code?
            <Link href="/" className="cursor-pointer underline">
              {" "}
              Resend code{" "}
            </Link>
          </p>
          <p className="text-xs font-medium text-[#7d0101]">00:12</p>
        </div>
      </section>
    </div>
  );
}
