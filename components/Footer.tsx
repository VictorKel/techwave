import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#272727] text-[#ACACAC] p-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ">
        <div className="col-span-2">
          <Image src="/images/Logo.png" alt="Logo" width={170} height={40} />
          <div className='flex mt-4 gap-2.5'>
            <Image src="/images/twitter.png" alt="twitter" width={30} height={30} />
            <Image src="/images/insta.png" alt="insta" width={30} height={30} />
            <Image src="/images/facebook.png" alt="facebook" width={30} height={30} />
            <Image src="/images/linkedin.png" alt="linkedin" width={30} height={30} />
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Our Services</h4>
          <ul>
            <li>Delivery Information</li>
            <li>Controlling IP CCTV</li>
            <li>Network Bandwidth</li>
            <li>Shipping</li>
            <li>FAQ</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Information</h4>
          <ul>
            <li>About</li>
            <li>Stores</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact Us</h4>

          <div className="flex mb-2 items-center">
            <Image src="/images/mail.png" alt="email" width={30} height={25} className="mr-2.5" />
            <div className="flex flex-col">
              <p>Email</p>
              <a
                href="mailto:Sales@dartwood.com"
                className=" hover:underline"
              >
                Sales@dartwood.com
              </a>
            </div>
          </div>

          <div className="flex items-start mt-4">
            <Image src="/images/phone.png" alt="phone" width={30} height={25} className="mr-2" />
            <div className="flex flex-col">
              <p>Phone</p>
              <a href="tel:+2348023220143" className=" hover:underline">
                +2348023220143
              </a>
              <a href="tel:+2347032355959" className=" hover:underline">
                +2347032355959
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t w-full items-center mt-15'>
        <div className="flex justify-between mt-4">
          <p className='text-center font-semibold text-[#ACACAC]'>
            Copyright © Dartwood Global Solutions LTD          
          </p>
          <div className='flex gap-4 mb-10'>
            <Image src="/images/paypal.png" alt="Logo" width={55} height={45} />
            <Image src="/images/stripe.png" alt="Logo" width={55} height={45} />
            <Image src="/images/master.png" alt="Logo" width={55} height={45} />
          </div>
        </div>
      </div>
    </footer>
  );
};
