import React from "react";
import Link from "next/link";
import Image from "next/image";
import RelatedProducts from "@/components/RelatedProducts";
// import FeaturedProducts from "../components/FeaturedProducts";

export default function ProductInfo() {
  return (
    <React.Fragment>
      <div className="mx-[60px]">
        <Navigation />
        <ProductDescription />
        <Specification />
        <RelatedProducts />
        <Newsletter />
        {/* <div className=" my-[60px] bg-red-100 flex items-center justify-start">
          <p className="text-[18px]">Left</p>
          <Image
            src="/images/cable-one.png"
            alt="img"
            width={40}
            height={0}
            className="h-[60px]"
          />
          <p className="text-[18px]">Right</p>
          <Image
            src="/images/view-two.png"
            alt="img"
            width={40}
            height={0}
            className="h-[30px]"
          />
        </div> */}
      </div>
    </React.Fragment>
  );
}

const Navigation = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center mb-[60px] pt-[120px]">
      <Link href="Home" className="text-[14px] text-[#272727B2]">
        Home
      </Link>
      <span className="text-[14px] text-[]#272727B2">/</span>
      <Link href="Home" className="text-[14px] text-[#272727B2]">
        Cabling
      </Link>
      <span className="text-[14px] text-[]#272727B2">/</span>
      <Link href="Home" className="text-[14px] font-bold">
        Mixed Horizontal PDU 4 x C12 + 5 x C19
      </Link>
    </div>
  );
};

const ProductImages = () => {
  return (
    <div className="flex flex-wrap gap-3 bg-[#EBEBEB] justify-center py-[20px] rounded-md">
      <div>
        <Image
          height={0}
          width={650}
          className=" h-[500px]"
          src="/images/prod-details-first-image.webp"
          alt="product image"
        />
      </div>
      <div className="flex gap-2 mt-[12px] ">
        <MainImageView />
        <SecondImageView />
        <ThirdImageView />
      </div>
    </div>
  );
};

//THESE ARE THE AVAILABLE IMAGE VIEWS ON THE LEFT SIDE ->
const MainImageView = () => {
  return (
    <Image
      src="/images/prod-details-first-image.webp"
      alt=""
      height={0}
      width={70}
      className="h-[45px] rounded"
    />
  );
};
const SecondImageView = () => {
  return (
    <Image
      src="/images/prod-details-alt-2.webp"
      alt=""
      height={0}
      width={70}
      className="h-[45px] rounded"
    />
  );
};
const ThirdImageView = () => {
  return (
    <Image
      src="/images/prod-details-alt-3.webp"
      alt=""
      height={0}
      width={70}
      className="h-[45px] rounded"
    />
  );
};

//THESE GO TO THE RIGHT
const ProductDescription = () => {
  return (
    <div className="flex w-[100%] mt-[0px] justify-between">
      <div className="w-[60%]">
        <ProductImages />
      </div>
      <div className="w-[35%]">
        <ProductName />
        <ProductAttributes />
        <MoreProductInfo />
      </div>
    </div>
  );
};
const ProductName = () => {
  return (
    <p className="text-[34px] font-bold tracking-tighter leading-[37px]">
      Mixed Horizontal PDU 4 x C13 + 5 x C19
    </p>
  );
};
const ProductAttributes = () => {
  return (
    <div className="flex flex-wrap gap-2.5 justify-between mt-[15px] mb-[40px]">
      <p className="text-[13px]">
        Part: <span className="text-[#272727B2] ]">E707343B3</span>
      </p>
      <p className="text-[13px]">
        Brand: <span className="text-[#7D0101] ]">PowerData</span>
      </p>
      <p className="text-[13px]">
        Availability: <span className="text-[#69B809] ]">In stock</span>
      </p>
    </div>
  );
};
const MoreProductInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex flex-wrap gap-3">
        <Image
          alt=""
          src="./svg/reddot.svg"
          width={12}
          height={12}
          className=""
        />
        <p className="text-[12px] font-[500]">
          IEC PDUs with C12 & C19 Mixed Sockets.
        </p>
      </div>
      <div className=" flex flex-wrap gap-3">
        <Image
          alt=""
          src="./svg/reddot.svg"
          width={12}
          height={12}
          className=""
        />
        <p className="text-[12px] font-[500]">
          1U 19&quot; Horizontally Rack Mounted.
        </p>
      </div>
      <div className=" flex flex-wrap gap-3">
        <Image
          alt=""
          src="./svg/reddot.svg"
          width={12}
          height={12}
          className=""
        />
        <p className="text-[12px] font-[500]">Quality UK manufactured.</p>
      </div>
      <div className=" flex flex-wrap gap-3 items-top">
        <Image
          alt=""
          src="./svg/reddot.svg"
          width={12}
          height={12}
          className=""
        />
        <p className="text-[12px] font-[500] w-[320px]">
          Punched and folded steel units with textured black powder coat finish.
          Bespoke colours available.
        </p>
      </div>
      <div className=" flex flex-wrap gap-3">
        <Image
          alt=""
          src="./svg/reddot.svg"
          width={12}
          height={12}
          className=""
        />
        <p className="text-[12px] font-[500]">
          All come with 3m lead as standard. Bespoke lengths available.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Image
          alt=""
          src="./svg/reddot.svg"
          width={12}
          height={12}
          className=""
        />
        <p className="text-[12px] font-[500]">
          Genuine Integra Brand power distribution units.
        </p>
      </div>
      <Price />
      <Counter />
      <Cart />
    </div>
  );
};

const Price = () => {
  return <p className="text-[26px] font-bold my-[20px]">₦500,000.00</p>;
};
const Counter = () => {
  return (
    <div className="block mb-[30px]">
      <div className=" bg-[#F1F1F1]  rounded-lg flex justify-between w-[35%] h-[35px] items-center px-[15px]">
        <p className="font-medium">-</p>
        <p className="font-medium">1</p>
        <p className="font-medium">+</p>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[45px] w-[full] rounded-lg mb-[5px] border border-[#7D010140] bg-[] text-[#272727] ">
        <p className="text-[13px]">Add to cart</p>
      </div>
      <div className="flex justify-center items-center h-[45px] w-[full] rounded-lg  border bg-[#7D0101] text-[#fff] ">
        <p className="text-[13px]">Buy now</p>
      </div>
    </>
  );
};

//OUT OF THE PRODUCT DESCRIPTION VIEW
const Specification = () => {
  return (
    <div className="mb-[100px]">
      <p className=" mt-[60px] mb-[20px] text-[13px] tracking-wide flex justify-center items-center h-[35px] w-[120px] rounded border bg-[#7D0101] text-[#fff] ">
        Specification
      </p>
      <div className="flex flex-col gap-[10px]">
        <div className=" flex flex-wrap gap-3">
          <Image
            alt=""
            src="./svg/reddot.svg"
            width={12}
            height={12}
            className=""
          />
          <p className="text-[13px] font-[500]">Steel Chasis Construction</p>
        </div>
        <div className=" flex flex-wrap gap-3">
          <Image
            alt=""
            src="./svg/reddot.svg"
            width={12}
            height={12}
            className=""
          />
          <p className="text-[13px] font-[500]">
            Black RAL 9005 Fine Texture Powder Coat Finish{" "}
          </p>
        </div>
        <div className=" flex flex-wrap gap-3">
          <Image
            alt=""
            src="./svg/reddot.svg"
            width={12}
            height={12}
            className=""
          />
          <p className="text-[13px] font-[500]">
            M5 External Earth Stud c/w Anti Shake Washer & Nut
          </p>
        </div>
        <div className=" flex flex-wrap gap-3">
          <Image
            alt=""
            src="./svg/reddot.svg"
            width={12}
            height={12}
            className=""
          />
          <p className="text-[13px] font-[500]">
            Red Illuminated 16A Double Pole Switch c/w Switch Cover (Where
            Applicable)
          </p>
        </div>
        <div className=" flex flex-wrap gap-3">
          <Image
            alt=""
            src="./svg/reddot.svg"
            width={12}
            height={12}
            className=""
          />
          <p className="text-[13px] font-[500]">
            Operating Voltage 250V 50Hz AC max
          </p>
        </div>
        <div className=" flex flex-wrap gap-3">
          <Image
            alt=""
            src="./svg/reddot.svg"
            width={12}
            height={12}
            className=""
          />
          <p className="text-[13px] font-[500]">EN IEC 62368 1:2020+A11:2020</p>
        </div>
      </div>
    </div>
  );
};

// const RelatedProducts = () => {
//   return (
//     <div className="my-[40px]">
//       <div className="flex justify-between mb-[20px]">
//         <p className="text-[18px] font-[500]">Related Products</p>
//         <div className="flex gap-[10px] items-center">
//           <p className="text-[14px] text-[#7D0101]">See all</p>
//           <Image
//             src="/svg/arrow-see-more.svg"
//             alt="see more"
//             height={0}
//             width={5}
//           />
//         </div>
//       </div>
//       <div className="  inline-flex flex-col space-y-[15px]">
//         <Image
//           src="/images/r-one.png"
//           alt="Product image"
//           height={0}
//           width={310}
//           className="rounded-[20]"
//         />
//         <div className=" flex justify-between">
//           <p className="text-[13px] w-[180px] font-[500]">
//             Great proof of delivery with Hikvision
//           </p>
//           <p className="text-[14px] font-[500] ">₦500,000.00</p>
//         </div>
//         <div className="flex justify-between">
//           <div className="flex gap-3">
//             <p className="text-[13px]">Color</p>
//             <Image
//               src="/svg/arrow-down.svg"
//               alt="see more"
//               height={0}
//               width={13}
//             />
//           </div>
//           <p className="text-[#7D0101] text-[13px]">VAT:₦5,000.00</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Newsletter = () => {
  return (
    <div className="flex flex-col space-y-2 items-center mt-[120px] mb-[80px] ">
      <p className="text-[#fff] flex w-[110px] h-[35px] bg-[#7D0101] font-thin justify-center items-center rounded-full">
        Newsletter
      </p>
      <p className="text-[52px] mt-[20px] font-[600] tracking-tighter w-[600px] leading-[56px] text-center text-[#111]">
        Stay Updated on Latest Product Releases{" "}
      </p>
      <p className="text-[16px] w-[300px] text-center mt-[10px] font-InstrumentSans">
        Never miss a beat and stay updated with new products arrivals and
        promotions
      </p>

      <div className="flex gap-4 mt-[30px]">
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className="w-[440px] pl-[20px] pr-[25px] rounded-full flex placeholder:text-[13px] text-[13px] bg-[#EAEBEACC] placeholder:text-[#111]"
        />
        <label
          htmlFor="email"
          className="flex justify-center items-center rounded-full bg-[#7D0101] text-[#fff] text-[14px] h-[43px] w-[110px]"
        >
          Subscribe
        </label>
      </div>
    </div>
  );
};
