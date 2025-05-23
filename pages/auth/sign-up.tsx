import { Onest } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { GetStaticProps } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { phoneLengths } from "@/components/phoneLengths";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .refine(
    (value) => /[A-Z]/.test(value),
    "Password must contain at least one uppercase letter"
  )
  .refine(
    (value) => /[a-z]/.test(value),
    "Password must contain at least one lowercase letter"
  )
  .refine(
    (value) => /[0-9]/.test(value),
    "Password must contain at least one number"
  )
  .refine(
    (value) => /[^A-Za-z0-9]/.test(value),
    "Password must contain at least one special character"
  );

const formSchema = z
  .object({
    firstName: z.string().min(2, "Minimum of 2 letters"),
    lastName: z.string().min(2, "Minimum of 2  letters"),
    email: z.string().email("Invalid email"),

    countryCode: z
      .string()
      .regex(/^\d{1,4}$/, "Country code must be 1 to 4 digits")
      .refine(
        (code) => {
          const country = phoneLengths[code];
          return country !== undefined && country.blocked !== true;
        },
        {
          message: "Unsupported country code",
        }
      ),

    phoneNumber: z.string(),

    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "Kindly accept terms and conditions" }),
    }),

    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

  .superRefine((data, ctx) => {
    const { phoneNumber, countryCode } = data;
    const country = phoneLengths[countryCode];

    if (!country) {
      ctx.addIssue({
        path: ["phoneNumber"],
        code: z.ZodIssueCode.custom,
        message: "Unsupported country code",
      });
      return;
    }

    if (!/^\d+$/.test(phoneNumber)) {
      ctx.addIssue({
        path: ["phoneNumber"],
        code: z.ZodIssueCode.custom,
        message: "Phone number must contain only digits",
      });
    }

    if (
      phoneNumber.length < country.minLength ||
      phoneNumber.length > country.maxLength
    ) {
      ctx.addIssue({
        path: ["phoneNumber"],
        code: z.ZodIssueCode.custom,
        message: "Incorrect phone number",
      });
    }
  });

type FormData = z.infer<typeof formSchema>;

export default function SignUp({
  countryData,
}: {
  countryData: CountryData[];
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const router = useRouter();
  const countryCode = watch("countryCode");
  const selectedCountry = countryData.find(
    (c) => c.callingCode === countryCode
  );
  // I am Dynamically setting maxLength for phone input based on countryCode
  const maxPhoneLength = phoneLengths[countryCode]?.maxLength || 14;

  const handleSubmitInfo = async (data: FormData) => {
    try {
      // Get existing users (array or null)
      const existingUsersJSON = localStorage.getItem("registeredUsers");
      const existingUsers = existingUsersJSON
        ? JSON.parse(existingUsersJSON)
        : [];

      // Check for duplicate email or phone number
      const isDuplicate = existingUsers.some(
        (user: FormData) =>
          user.email === data.email || user.phoneNumber === data.phoneNumber
      );

      if (isDuplicate) {
        setErrorMessage(
          "This phone number or email is already registered. Kindly log in."
        );
        setShowErrorModal(true);
        setTimeout(() => setShowErrorModal(false), 2500);

        return;
      }

      // Add new user to the array
      const hashedPassword = await bcrypt.hash(data.password, 10); // 10 is the salt rounds

      const userWithHashedPassword = {
        ...data,
        password: hashedPassword,
      };

      const updatedUsers = [...existingUsers, userWithHashedPassword];
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      setSuccessMessage(" Sign-up Successful!");
      setShowSuccessModal(true);

      setTimeout(() => {
        setShowSuccessModal(false);
        router.push("/log-in");
      }, 2200);
      reset();
    } catch {
      setErrorMessage(
        "This phone number or email is already registered. Kindly log in."
      );
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
            transition={{ duration: 0.3 }}
            className={`fixed top-3 right-[30px] transform -translate-x-1/2  bg-[#7d0101] text-[#7d01011a] text-xs font-medium px-6 py-3 rounded shadow-lg z-50 ${onest.className} `}
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
            className="fixed top-3 right-[30px] transform -translate-x-1/2 text-[12px]
                 bg-[#7d01011a] border-2 border-[#7d0101] text-[#7d0101] px-6 py-3 rounded text-xs font-medium shadow-lg z-50"
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
        onSubmit={handleSubmit(handleSubmitInfo)}
        className="w-[40%] ml-[60%] mt-18"
      >
        <p
          className={`text-2xl font-medium ${onest.className} text-[#272727] `}
        >
          Create an Account for Dartwood
        </p>
        <p className="text-xs font-medium  text-[#272727B2] mt-2 mb-12 ">
          Already have an account ?{" "}
          <Link href="/login" className="text-[#7D0101]">
            Login
          </Link>
        </p>
        <div className="flex justify-between mb-6 ">
          <div className="">
            <p className="text-sm mb-3 text-[#272727]">First Name</p>
            <input
              {...register("firstName")}
              type="text"
              id="firstName"
              className="w-56 border-2 rounded focus:border-[#7d0101]  h-10 py-2 px-3 placeholder:text-sm text-sm placeholder:text-[#27272726] "
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-[10px] text-[#7d0101] font-medium">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm mb-3 text-[#272727]">Last Name</p>
            <input
              {...register("lastName")}
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="w-56 border-2 rounded border-[#27272726]  text-[#272727] placeholder:text-[#27272726] focus:border-[#7d0101] h-10 py-2 px-3  placeholder:text-sm text-sm"
            />
            {errors.lastName && (
              <p className="text-[10px] font-medium text-[#7d0101]">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <p className="text-sm mb-3 text-[#272727]">Phone Number</p>

          <div className="flex">
            <div className="  inline-flex justify-center items-center space-x-2 px-2  h-10 border-2 border-r-0 mx-auto w-34">
              {selectedCountry && (
                <div>
                  <Image
                    src={
                      selectedCountry
                        ? selectedCountry.flag
                        : "/icons/ng-flag.svg"
                    }
                    alt={selectedCountry ? selectedCountry.name : "NG"}
                    height={22}
                    width={24}
                  />
                </div>
              )}
              <div className="flex items-center text-sm   text-[#272727] placeholder:text-sm placeholder:text-[#272727] w-12 h-full focus:outline-none">
                <span className=" text-sm ">+</span>
                <input
                  type="number"
                  {...register("countryCode")}
                  placeholder="0"
                  className=" text-sm w-full outline-none appearance-none placeholder:text-sm placeholder:text-[#272727] text-[#272727]"
                  onWheel={(e) => e.currentTarget.blur()} // Disable scroll change on number input
                />
              </div>
            </div>
            <input
              {...register("phoneNumber")}
              maxLength={maxPhoneLength}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter your phone number"
              onChange={(e) => {
                // Allow only digits (real-time blocking)
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              className="h-10  border-[#27272726] text-[#272727] border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 px-3  rounded rounded-l-none w-full"
            />
          </div>

          {errors.countryCode ? (
            <p className="text-[10px] font-medium text-[#7d0101]">
              {errors.countryCode.message}
            </p>
          ) : errors.phoneNumber ? (
            <p className="text-[10px] font-medium text-[#7d0101]">
              {errors.phoneNumber.message}
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <p className="text-sm mb-3 text-[#272727]">Email address</p>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your email address"
            className=" placeholder:text-sm placeholder:text-[#27272726] text-sm py-2 px-3 border-2 focus:border-2  h-10 rounded w-full focus:border-[#7d0101] text-[]"
          />
          {errors.email && (
            <p className="text-[10px] font-medium text-[#7d0101]">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <p className="text-sm mb-3">Password</p>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className=" h-10  border-[#27272726] text-[#272727] border-2 focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 pl-3 pr-24 rounded w-full"
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className={` text-[11px] font-medium rounded right-6 top-2 flex justify-center items-center h-6 w-12 absolute cursor-pointer bg-[#7D01011A] text-[#7d0101] ${onest.className} `}
            >
              {showPassword ? "Hide" : "Show"}
            </p>
          </div>
          {errors.password && (
            <p className="text-[10px] font-medium text-[#7d0101]">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <p className="text-sm mb-3">Confirm Password</p>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Retype password to confirm"
              {...register("confirmPassword")}
              className=" h-10  border-[#27272726] text-[#272727] border-2  tracking-wider focus:border-[#7d0101]
              placeholder:text-[#27272726] placeholder:text-sm text-sm  py-2 pl-3 pr-24 rounded w-full"
            />
            <p
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={` text-[11px] font-medium cursor-pointer tracking-wider rounded right-6 top-2 flex justify-center items-center h-6 w-12 absolute bg-[#7D01011A] text-[#7d0101] ${onest.className} `}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </p>
            {errors.confirmPassword && (
              <p className="text-[10px] font-medium text-[#7d0101]">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-start mb-9">
          <input
            type="checkbox"
            {...register("acceptTerms")}
            className="h-5 w-5 mr-2  cursor-pointer"
          />
          <div className="flex flex-col">
            <label
              className={`text-xs ${onest.className} leading-5  text-[#272727] mb-0.5 `}
            >
              By clicking this box, you confirm that you have read, understood
              and consent to our 
              <Link href="/terms-of-use" className="text-[#7d0101]">
                terms of use 
              </Link>
              and 
              <Link href="/privacy-notice" className="text-[#7d0101]">
                privacy notice
              </Link>
            </label>
            {errors.acceptTerms && (
              <p className="text-[10px] font-medium bg-[#7d01011a] px-[8px] py-[2px] rounded w-[38%] text-[#7d0101]">
                {errors.acceptTerms.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          // disabled={!isValid}
          className={` flex justify-center items-center w-full h-11 mb-14 cursor-pointer text-sm bg-[#7d0101] rounded text-[#fff] ${onest.className} `}
        >
          Create an account
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

type CountryAPIResponse = {
  name: { common: string };
  cca2: string;
  idd?: {
    root?: string;
    suffixes?: string[];
  };
};

type CountryData = {
  name: string;
  cca2: string;
  flag: string;
  callingCode: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries: CountryAPIResponse[] = await res.json();

  // Extract relevant data: cca2, name, calling codes, flag url
  const countryData = countries
    .map((c) => {
      const callingCodes =
        c.idd?.root && c.idd?.suffixes
          ? c.idd.suffixes.map((s: string) => c.idd!.root! + s)
          : [];

      return callingCodes.length > 0
        ? callingCodes.map((code: string) => ({
            name: c.name.common,
            cca2: c.cca2,
            flag: `https://flagcdn.com/w40/${c.cca2.toLowerCase()}.png`,
            callingCode: code.replace("+", ""), // strip '+' for easier input handling
          }))
        : [];
    })
    .flat();

  return {
    props: { countryData },
  };
};
