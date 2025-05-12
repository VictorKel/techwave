import Image from "next/image";

const RelatedProducts = () => {
  return (
    <div className="my-[40px]">
      <div className="flex justify-between mb-[20px]">
        <p className="text-[18px] font-[500]">Related Products</p>
        <div className="flex gap-[10px] items-center">
          <p className="text-[14px] text-[#7D0101]">See all</p>
          <Image
            src="/svg/arrow-see-more.svg"
            alt="see more"
            height={0}
            width={5}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="  inline-flex flex-col space-y-[15px]">
          <Image
            src="/images/r-one.png"
            alt="Product image"
            height={0}
            width={350}
            className="rounded-[20]"
          />
          <div className=" flex justify-between">
            <p className="text-[13px] w-[180px] font-[500]">
              Great proof of delivery with Hikvision
            </p>
            <p className="text-[14px] font-[500] ">₦500,000.00</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <p className="text-[13px]">Color</p>
              <Image
                src="/svg/arrow-down.svg"
                alt="see more"
                height={0}
                width={13}
              />
            </div>
            <p className="text-[#7D0101] text-[13px]">VAT:₦5,000.00</p>
          </div>
        </div>
        <div className="  inline-flex flex-col space-y-[15px]">
          <Image
            src="/images/r-two.png"
            alt="Product image"
            height={0}
            width={350}
            className="rounded-[20]"
          />
          <div className=" flex justify-between">
            <p className="text-[13px] w-[180px] font-[500]">
              Great proof of delivery with Hikvision
            </p>
            <p className="text-[14px] font-[500] ">₦500,000.00</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <p className="text-[13px]">Color</p>
              <Image
                src="/svg/arrow-down.svg"
                alt="see more"
                height={0}
                width={13}
              />
            </div>
            <p className="text-[#7D0101] text-[13px]">VAT:₦5,000.00</p>
          </div>
        </div>
        <div className="  inline-flex flex-col space-y-[15px]">
          <Image
            src="/images/r-three.png"
            alt="Product image"
            height={0}
            width={350}
            className="rounded-[20]"
          />
          <div className=" flex justify-between">
            <p className="text-[13px] w-[180px] font-[500]">
              Great proof of delivery with Hikvision
            </p>
            <p className="text-[14px] font-[500] ">₦500,000.00</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <p className="text-[13px]">Color</p>
              <Image
                src="/svg/arrow-down.svg"
                alt="see more"
                height={0}
                width={13}
              />
            </div>
            <p className="text-[#7D0101] text-[13px]">VAT:₦5,000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
