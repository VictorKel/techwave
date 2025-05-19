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
        <div className="flex flex-col flex-wrap gap-4 my-[45px] justify-center items-center">
          <p className=" text-[42px] font-[480] text-[#272727] tracking-tighter leading-[55px] text-center w-[350px]">
            Your End-To-End Cabling Partner
          </p>
          <p className="text-center w-[450px] text-[14px] text-[#8C8C8C] ">
            From initial planning and design to expert installation and ongoing
            support, we ensure seamless connectivity for your business.
          </p>
        </div>
      </section>
      <section className="p-6 w-[90%] md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="inline-flex p-4 flex-col  bg-[#FAFAFA] border border-[1px] border-[#CCCCCC] rounded-xl">
            <div className="p-4">
              <Image
                src="/svg/installations.svg"
                alt=""
                width={25}
                height={0}
                className="flex justify-center items-center w-[50px] h-[50px] p-2 rounded-xl bg-[#7D0101] mb-2"
              />
              <p className="text-[22px] font-[500] mb-2">Installations</p>
              <p className="text-[13px] text-[#8C8C8C] w-[450px]">
                Professional setup and implementation of cabling systems. Our
                certified technicians ensure a smooth and efficient installation
                process.
              </p>
            </div>
            <Image
              src="/images/installation-image.png"
              alt="installation"
              width={545}
              height={0}
              className="h-[200px] rounded-xl"
            />
          </div>
          <div className="inline-flex p-4 flex-col  bg-[#FAFAFA] border border-[1px] border-[#CCCCCC] rounded-xl">
            <div className="p-4">
              <Image
                src="/svg/consultancy.svg"
                alt=""
                width={25}
                height={0}
                className="flex justify-center items-center w-[50px] h-[50px] p-2 rounded-xl bg-[#7D0101] mb-2"
              />
              <p className="text-[22px] font-[500] mb-2">Consultancy</p>
              <p className="text-[13px] text-[#8C8C8C] w-[450px]">
                Expert advice and planning for your cabling infrastructure needs.  
                Let us help you design a solution that meets your specific requirements.
              </p>
            </div>
            <Image
              src="/images/Consultancy.png"
              alt="installation"
              width={545}
              height={0}
              className="h-[200px] rounded-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[10px] mb-4">
          <div className="inline-flex py-[15px] px-[10px] flex-col  bg-[#FAFAFA] border border-[1px] border-[#CCCCCC] rounded-xl">
            <Image
              src="/svg/data-recovery.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] p-2 rounded-xl bg-[#7D0101] mb-2"
            />
            <p className="text-[22px] font-[500] mb-2">Data Recovery</p>
            <p className="text-[13px] text-[#8C8C8C] w-[355px]">
              Professional setup and implementation of cabling systems. Our
              certified technicians ensure a smooth and efficient installation
              process.
            </p>
          </div>
          <div className="inline-flex py-[15px] px-[10px] flex-col bg-[#FAFAFA] border border-[1px] border-[#CCCCCC] rounded-xl">
            <Image
              src="/svg/office-solution.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] p-2 mb-2 rounded-xl bg-[#7D0101]"
            />
            <p className="text-[22px] font-[500] mb-2">Office Solution</p>
            <p className="text-[13px] text-[#8C8C8C] w-[355px]">
              Professional setup and implementation of cabling systems. Our
              certified technicians ensure a smooth and efficient installation
              process.
            </p>
          </div>
          <div className="inline-flex p-4 flex-col bg-[#FAFAFA] border border-[1px] border-[#CCCCCC] rounded-xl">
            <Image
              src="/svg/training.svg"
              alt=""
              width={25}
              height={0}
              className="flex justify-center items-center w-[50px] h-[50px] p-2 rounded-xl bg-[#7D0101] mb-2"
            />
            <p className="text-[22px] font-[500] mb-2">Training</p>
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
