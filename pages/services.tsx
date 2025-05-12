import React from "react";
// import Link from "next/link";
import Image from "next/image";
import PromoBanner from "../components/PromoBanner";
import Newsletter from "../components/Newsletter";

export default function Services() {
  return (
    <>
      <section
        className="bg-cover h-[80vh] bg-center"
        style={{ backgroundImage: "url(/images/services-background.png)" }}
      >
        <div className="pl-20 pt-[180px] text-white ">
          <h1 className="text-[48px] font-[350]">
            Functional Cabling Solutions
          </h1>
          <p className="text-[16px] leading-[30px] font-[150] mt-[10px] mb-[20px] w-[600px]">
            Reliable and effective cabling services that simply get the job
            done. We offer Consultancy, Data Recovery, Installations, Office
            Solutions, and Training.
          </p>
          <button className="mt-4 px-6 py-2 bg-[#7D0101] text-base cursor-pointer text-white rounded-md">
            Connect With Our Experts
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-col flex-wrap gap-4 my-[60px] justify-center items-center">
          <p className=" text-[42px] font-[480] tracking-tighter leading-[55px] text-center w-[350px]">
            Your End-To-End Cabling Partner
          </p>
          <p className="text-center w-[450px] text-[14px] text-[#8C8C8C] ">
            From initial planning and design to expert installation and ongoing
            support, we ensure seamless connectivity for your business.
          </p>
        </div>
      </section>
      <section className="mx-[60px]">
        <div className="flex justify-between">
          <div className="inline-flex py-[15px] px-[10px] flex-col gap-[15px] bg-[#CCCCCCCC] border border-[#FAFAFA] rounded-md">
            <Image
              src="/svg/installations.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] rounded bg-[#7D0101]"
            />
            <p className="text-[22px] font-[500]">Installations</p>
            <p className="text-[13px] text-[#8C8C8C] w-[450px]">
              Professional setup and implementation of cabling systems. Our
              certified technicians ensure a smooth and efficient installation
              process.
            </p>
            <Image
              src="/images/r-one.png"
              alt="installation"
              width={545}
              height={0}
              className="h-[250px]"
            />
          </div>
          <div className="inline-flex py-[15px] px-[10px] flex-col gap-[15px] bg-[#CCCCCCCC] border border-[#FAFAFA] rounded-md">
            <Image
              src="/svg/installations.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] rounded bg-[#7D0101]"
            />
            <p className="text-[22px] font-[500]">Installations</p>
            <p className="text-[13px] text-[#8C8C8C] w-[450px]">
              Professional setup and implementation of cabling systems. Our
              certified technicians ensure a smooth and efficient installation
              process.
            </p>
            <Image
              src="/images/r-one.png"
              alt="installation"
              width={545}
              height={0}
              className="h-[250px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[10px] mb-[60px]">
          <div className="inline-flex py-[15px] px-[10px] flex-col gap-[15px] bg-[#CCCCCCCC] border border-[#FAFAFA] rounded-md">
            <Image
              src="/svg/installations.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] rounded bg-[#7D0101]"
            />
            <p className="text-[22px] font-[500]">Installations</p>
            <p className="text-[13px] text-[#8C8C8C] w-[355px]">
              Professional setup and implementation of cabling systems. Our
              certified technicians ensure a smooth and efficient installation
              process.
            </p>
          </div>
          <div className="inline-flex py-[15px] px-[10px] flex-col gap-[15px] bg-[#CCCCCCCC] border border-[#FAFAFA] rounded-md">
            <Image
              src="/svg/installations.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] rounded bg-[#7D0101]"
            />
            <p className="text-[22px] font-[500]">Installations</p>
            <p className="text-[13px] text-[#8C8C8C] w-[355px]">
              Professional setup and implementation of cabling systems. Our
              certified technicians ensure a smooth and efficient installation
              process.
            </p>
          </div>
          <div className="inline-flex py-[15px] px-[10px] flex-col gap-[15px] bg-[#CCCCCCCC] border border-[#FAFAFA] rounded-md">
            <Image
              src="/svg/installations.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] rounded bg-[#7D0101]"
            />
            <p className="text-[22px] font-[500]">Installations</p>
            <p className="text-[13px] text-[#8C8C8C] w-[355px]">
              Professional setup and implementation of cabling systems. Our
              certified technicians ensure a smooth and efficient installation
              process.
            </p>
          </div>
        </div>
      </section>
      <PromoBanner />
      <Newsletter />
    </>
  );
}
