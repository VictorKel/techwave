// import { LucideDivide } from "lucide-react";

// export default function Sign() {
//   return (
//     <div className="pt-24 mb-10 flex flex-wrap mx-auto justify-between w-[87%] bg-red-200 ">
//       <section className=" h-[80vh] w-[55%] bg-amber-200 rounded-2xl">
//         <div className="pt-90">
//           <Image
//             src="/images/logo.png"
//             alt=""
//             width={100}
//             height={0}
//             className=" h-10 pt-2"
//           />
//           <p className="text-3xl w-[70%] font-bold text-[#fff]">
//             Simplify Your Business with Business name
//           </p>
//         </div>
//       </section>
//       <section className="w-[40%] bg-amber-500">
//         <p>Create an Account for Dartwood</p>
//         <p>Already have an account ? Login</p>
//         <p>First Name</p>
//         <p>Last Name</p>
//         <p>Phone Number</p>
//         <p>Email address</p>
//         <p>Password</p>
//         <p>Confirm Password</p>
//         <p>
//           By clicking this box, you sign up for our newsletter to receive the
//           latest news and updates.
//         </p>
//         <button>Create an account</button>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";

export default function Sign() {
  return (
    <div className=" flex flex-wrap mx-auto justify-around my-4 place-content-center w-[95%] bg-red-300 ">
      <section className=" h-[94vh] w-[48%] bg-amber-200 rounded-2xl">
        <div className="pt-70">
          <Image
            src="/images/logo.png"
            alt=""
            width={100}
            height={0}
            className=" h-10 pt-2"
          />
          <p className="text-3xl w-[70%] font-bold text-[#fff] font-Onest">
            Simplify Your Business with Business name
          </p>
        </div>
      </section>
      <section className="w-[37%] bg-amber-500 ">
        <p>Create an Account for Dartwood</p>
        <p>Already have an account ? Login</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Phone Number</p>
        <p>Email address</p>
        <p>Password</p>
        <p>Confirm Password</p>
        <p>
          By clicking this box, you sign up for our newsletter to receive the
          latest news and updates.
        </p>
        <button>Create an account</button>
      </section>
    </div>
  );
}
