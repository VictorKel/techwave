import { Onest } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { motion, AnimatePresence } from "framer-motion";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  emailOrPhone: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  const { handleSubmit, register } = useForm<FormData>();

  const handleLogin = async (data: FormData) => {
    try {
      const usersJSON = localStorage.getItem("registeredUsers");

      if (!usersJSON) {
        setErrorMessage("User not found. Kindly sign up.");
        setShowErrorModal(true);
        setTimeout(() => setShowErrorModal(false), 2500);
        return;
      }

      const users = JSON.parse(usersJSON);

      const matchedUser = users.find(
        (user: FormData) =>
          user.email === data.emailOrPhone ||
          user.phoneNumber === data.emailOrPhone
      );

      if (!matchedUser) {
        setErrorMessage("User not found. Kindly sign up.");
        setShowErrorModal(true);
        setTimeout(() => setShowErrorModal(false), 2500);
        return;
      }

      const passwordMatch = await bcrypt.compare(
        data.password,
        matchedUser.password
      );

      if (!passwordMatch) {
        setErrorMessage("Incorrect password.");
        setShowErrorModal(true);
        setTimeout(() => setShowErrorModal(false), 2500);
        return;
      }

      // Successful login
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      setSuccessMessage("Login Successful!");
      setShowSuccessModal(true);

      setTimeout(() => {
        setShowSuccessModal(false);
        router.push("/");
      }, 2200); // show for 2 seconds
    } catch {
      setErrorMessage("An error occurred. Please try again.");
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2500);
    }
  };

  return (
    <div className=" flex flex-wrap mx-5  justify-between">
      <AnimatePresence>
        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 10 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className={` fixed top-3 right-8 transform -translate-x-16 bg-[#7b0101] text-[#fff] text-[12px] px-4 py-3 rounded shadow-lg z-50 ${onest.className} `}
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 10 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={` fixed top-3 right-[30px] transform -translate-x-1/2 text-[12px]
                  border-2 border-[#7b0101] text-[#7b0101] bg-[#7b01011a] px-6 py-3 rounded shadow-lg z-50 ${onest.className} `}
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

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
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-[35%] ml-[60%] mt-18"
      >
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
              {...register("emailOrPhone")}
              type="text"
              placeholder="Enter email or phone number"
              className="h-10  border-[#27272726] text-[#272727] focus:border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 px-3 border rounded  w-full"
            />
          </div>
        </div>

        <div className="mb-1">
          <p className="text-sm mb-3">Password</p>
          <div className="relative">
            <input
              {...register("password")}
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
          type="submit"
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
      </form>
    </div>
  );
}
