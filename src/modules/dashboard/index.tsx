import { ProfileMenu } from "../../components/profile";
import MessageFillIcon from "@iconify-react/mage/message-fill";
import NotificationFillIcon from "@iconify-react/mingcute/notification-fill";
import SearchFillIcon from "@iconify-react/ri/search-fill";
import LocationIcon from "@iconify-react/duo-icons/location";
import { Button } from "@/components/ui/button";
import { Images } from "../../assets/images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import DashboardRoundedIcon from "@iconify-react/material-symbols/dashboard-rounded";

const Dashboard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 600 ? 300 : clientWidth / 2;

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-x-hidden">
      {/* Top Header Section - Keeping your exact navbar layout */}
      <div className="min-h-48 bg-[#e5e5e5e3] px-3 sm:px-5 pb-5 overflow-visible">
        <div className="h-14 border-black flex justify-between items-center w-full gap-2 overflow-visible">
          {/* Left Navigation and Logo */}
          <div className="h-full flex items-center gap-2 sm:gap-4 overflow-visible">
            <div className="bg-white mt-9 w-fit p-2 rounded-2xl h-16 shrink-0 flex items-center justify-center relative z-50 shadow-md">
              <img
                src={Images[0]}
                alt=""
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="border-t-4 border-[#1900FF] flex justify-center items-end h-full w-fit shrink-0">
              <p className="font-bold bg-[#1900FF] py-1 px-2 rounded-b-lg text-white text-xs sm:text-sm">
                Dashboard
              </p>
            </div>
            <div className="border-t-4 border-transparent flex justify-center items-end h-full w-fit shrink-0">
              <p className="font-bold py-1 px-2 rounded-b-lg text-[#0C0332] text-xs sm:text-sm">
                Why Yiedie
              </p>
            </div>
            <div className="border-t-4 border-transparent flex justify-center items-end h-full w-fit shrink-0">
              <p className="font-bold py-1 px-2 rounded-b-lg text-[#0C0332] text-xs sm:text-sm">
                How it works
              </p>
            </div>
            <div className="border-t-4 border-transparent flex justify-center items-end h-full w-fit shrink-0">
              <p className="font-bold py-1 px-2 rounded-b-lg text-[#0C0332] text-xs sm:text-sm">
                Dashboard
              </p>
            </div>
          </div>

          {/* Right Notifications and Profile */}
          <div className="h-full flex items-center justify-end pt-5 shrink-0">
            <div className="flex items-center gap-2 h-1/2">
              <NotificationFillIcon
                height="1em"
                className="-mt-1 cursor-pointer shrink-0"
                color="#09024B"
                fontSize={22}
              />
              <MessageFillIcon
                height="1em"
                className="-mt-1 cursor-pointer shrink-0"
                color="#09024B"
                fontSize={22}
              />
              <div className="w-fit border-black shrink-0">
                <ProfileMenu />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Search Area */}
        <div className="mt-16 sm:mt-18">
          <p className="text-[#0C0332] font-bold text-xl sm:text-2xl">
            Find a perfect and professional counselor
          </p>
          <div className="bg-white h-auto sm:h-20 rounded-3xl sm:rounded-full mt-2 px-3 py-3 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="border-b sm:border-b-0 sm:border-r-2 h-auto sm:h-3/5 border-[#B6B6B6] pb-2 sm:pb-0 sm:pl-6 sm:pr-6 w-full sm:w-2/10 flex gap-4 items-center shrink-0">
              <SearchFillIcon
                height="1em"
                className="text-[#B4B4B4] text-xl sm:text-2xl shrink-0"
              />
              <p className="text-[#B6B6B6] text-sm whitespace-nowrap">
                service type keyword
              </p>
            </div>

            <div className="w-full h-full flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex items-center w-full h-12 sm:h-full">
                <LocationIcon
                  height="1em"
                  className="absolute left-4 text-xl sm:text-2xl text-gray-400 z-10 pointer-events-none"
                />
                <input
                  type="text"
                  className="w-full h-full rounded-full pl-14 sm:pl-16 pr-4 bg-gray-50 sm:bg-transparent outline-none border sm:border-none text-sm"
                  placeholder="service type keyword"
                />
              </div>
              <Button
                variant={"secondary"}
                className={
                  "bg-[#1900FF] hover:bg-[#1900ffb7] font-bold w-full sm:w-50 rounded-full h-12 sm:h-full text-white px-8 shrink-0 cursor-pointer"
                }
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Scroll & Banner Row */}
      <div className="flex flex-col xl:flex-row my-5 px-3 sm:px-5 items-stretch xl:items-center gap-4">
        <div className="w-full xl:w-56 flex items-center justify-between  gap-3 shrink-0">
          <div className="bg-[#1900FF] w-fit rounded-lg p-1">
            <DashboardRoundedIcon
              height="1em"
              className="w-10 h-10 text-white"
            />
          </div>
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200"
          >
            <ChevronLeft />
          </button>
        </div>

        <div
          className="flex items-center gap-3 overflow-x-auto scrollbar-none px-2 py-1 w-full scroll-smooth [-webkit-overflow-scrolling:touch]"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[
            "Health & Wellness",
            "Education",
            "Relationships",
            "Family",
            "Finance",
            "Career",
            "Career",
            "Family",
            "Family",
          ].map((item, idx) => (
            <Button
              key={idx}
              variant="default"
              className="shrink-0 h-12 w-48 rounded-2xl hover:bg-[#edebff98] bg-[#EDEBFF] text-black font-bold shadow-none"
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="w-full xl:w-fit flex items-center justify-between xl:justify-start gap-2 px-2 shrink-0">
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200 xl:order-first"
          >
            <ChevronRight />
          </button>
          <div className="bg-[#1900FF] h-14 rounded-xl flex flex-col justify-center items-start px-6 sm:px-8 w-full xl:w-150 shadow-sm">
            <p className="text-xs sm:text-sm font-bold text-white truncate w-full">
              keep going to reach and improve even more.
            </p>
            <p className="text-xs sm:text-sm font-bold text-white truncate w-full">
              You’ve completed 85% of your homework goals this month!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Dashboard Grid Layout - Fully responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[70px_1fr_2fr_1fr] min-h-[50vh] px-3 sm:px-5 gap-3 my-6">
        <div className="bg-[#0A0332] rounded-2xl min-h-17.5 lg:min-h-full"></div>
        <div className="bg-[#F0EFFC] rounded-2xl min-h-50 lg:min-h-full"></div>
        <div className="bg-white border border-gray-200 rounded-2xl min-h-50 lg:min-h-full"></div>
        <div className="bg-white border border-gray-200 rounded-2xl min-h-50 lg:min-h-full"></div>
      </div>
    </div>
  );
};

export default Dashboard;
