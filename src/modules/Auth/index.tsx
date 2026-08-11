import { Images } from "../../assets/images";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between min-h-screen w-full">
      {/* Left Column */}
      <div className="w-full xl:w-1/2 min-h-screen py-10 xl:pt-20 xl:pb-28 flex flex-col items-center px-6 sm:px-16 xl:px-28 relative">
        <div className="w-full max-w-xl">
          <div className="flex items-center gap-3 rounded-3xl border w-fit px-10 border-[#04EEFF] bg-[#E7F2FF]">
            <img src={Images[0]} alt="" className="w-10 h-20 object-contain" />
            <p className="font-bold text-4xl ml-2">Yiedie</p>
          </div>

          <p className="mt-16 font-medium text-base leading-relaxed">
            Meet Yiedie, the digital{" "}
            <span className="text-[#0F0282] font-semibold">
              Counseling and Consultation
            </span>{" "}
            platform designed for modern institutions. Provide accessible and
            organized counselling and consultation services through one secure
            digital platform.
          </p>

          <div className="w-full mt-20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1900FF] rounded-full shrink-0" />
              <p className="text-[#0F0282] font-bold text-sm sm:text-base">
                Academic Management & Career counselling
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 bg-[#1900FF] rounded-full shrink-0" />
              <p className="text-[#0F0282] font-bold text-sm sm:text-base">
                Financial Planning & Business Consultation
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 bg-[#1900FF] rounded-full shrink-0" />
              <p className="text-[#0F0282] font-bold text-sm sm:text-base">
                Relationships & Marriage Counselling
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 bg-[#1900FF] rounded-full shrink-0" />
              <p className="text-[#0F0282] font-bold text-sm sm:text-base">
                Religious and Spiritual Counselling etc.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap w-full mt-20">
            <div className="w-1/2 h-28 pr-2 pb-3">
              <div className="h-full rounded-3xl px-4 sm:px-7 bg-[#F4F9FF] border border-[#D0E2FF] flex flex-col justify-center">
                <p className="font-bold text-xl text-[#0F0282]">100%</p>
                <p className="font-medium text-xs sm:text-sm text-gray-700">
                  Verified Counsellors and Consultants
                </p>
              </div>
            </div>
            <div className="w-1/2 h-28 pl-2 pb-3">
              <div className="h-full rounded-3xl px-4 sm:px-7 bg-[#F4F9FF] border border-[#D0E2FF] flex flex-col justify-center">
                <p className="font-bold text-xl text-[#0F0282]">AI-Powered</p>
                <p className="font-medium text-xs sm:text-sm text-gray-700">
                  Predictions
                </p>
              </div>
            </div>
            <div className="w-1/2 h-28 pr-2 pt-3">
              <div className="h-full rounded-3xl px-4 sm:px-7 bg-[#F4F9FF] border border-[#D0E2FF] flex flex-col justify-center">
                <p className="font-bold text-xl text-[#0F0282]">Real-time</p>
                <p className="font-medium text-xs sm:text-sm text-gray-700">
                  Analytics and Live Chats supports
                </p>
              </div>
            </div>
            <div className="w-1/2 h-28 pl-2 pt-3">
              <div className="h-full rounded-3xl px-4 sm:px-7 bg-[#F4F9FF] border border-[#D0E2FF] flex flex-col justify-center">
                <p className="font-bold text-xl text-[#0F0282]">
                  360<sup>o</sup>{" "}
                </p>
                <p className="font-medium text-xs sm:text-sm text-gray-700">
                  Security Management
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:absolute xl:bottom-10 px-6 sm:px-16 xl:px-28 w-full mt-12 xl:mt-0">
          <p className="text-xs sm:text-[14px] text-gray-500">
            Health | Education and Career | Relationship and Marriage | Finance
            | Legal | Personal | Religious & Spiritual | Social Support |
            Motivation and Inspiration |
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className=" bg-[#ebf6ff] w-full xl:w-1/2 min-h-screen py-10 xl:pt-20 xl:pb-28 flex flex-col items-center px-6 sm:px-16 xl:px-28 relative ">
        <div className="w-full max-w-xl">
          <div className="w-full mt-10 text-[#1900FF] font-bold">
            <p className="text-3xl sm:text-4xl">Welcome back to Yiedie,</p>
            <p className="text-3xl sm:text-4xl mt-2">
              Please Sign-in to continue
            </p>
            <p className="text-xs sm:text-sm mt-2 font-medium text-gray-600">
              Enter your correct credentials to access the dashboard
            </p>
          </div>

          <div className="w-full mt-12">
            <form className="flex flex-col">
              <label
                className="text-sm font-bold text-[#0A0332]"
                htmlFor="email"
              >
                Email/Phone number
              </label>

              <input
                type="text"
                className="h-14 rounded-2xl mt-4 p-3 bg-[#bbb1ff50] text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#1900FF]"
                placeholder="Enter your email / phone number"
                id="email"
              />

              <label
                className="text-sm font-bold text-[#0A0332] mt-8"
                htmlFor="password"
              >
                Password
              </label>

              <input
                type="password"
                className="h-14 rounded-2xl mt-4 p-3 bg-[#bbb1ff50] text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#1900FF]"
                placeholder="Enter your password"
                id="password"
              />

              <Button
                variant={"secondary"}
                onClick={() => window.location.href = "/home"}
                className="mt-10 h-14 w-full rounded-2xl text-base text-white font-semibold bg-[#1900FF] hover:bg-[#1900ffa2]"
              >
                Sign In
              </Button>
            </form>

            <a href="/forget-password" >
              <p className="text-center mt-4 text-[#9D9D9D] underline font-semibold text-sm cursor-pointer hover:text-gray-600">
                Forgotten Password
              </p>
            </a>
          </div>
        </div>

        <div className="xl:absolute xl:bottom-10 w-full flex flex-col items-center mt-12 xl:mt-0 px-6 sm:px-16 xl:px-28">
          <div className="flex gap-4 mt-5 text-sm">
            <span className="text-[#9D9D9D] cursor-pointer hover:underline">
              policies
            </span>
            <span className="text-[#9D9D9D] cursor-pointer hover:underline">
              Supports
            </span>
            <span className="text-[#9D9D9D] cursor-pointer hover:underline">
              Help centre
            </span>
          </div>
          <p className="text-[#9D9D9D] mt-2 text-center text-xs">
            Copyright © 2024-2025 AltBit Softwares. All rights reserved.
          </p>
          <p className="text-[#9D9D9D] mt-0.5 text-center text-xs">
            counselling and consultation app
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
