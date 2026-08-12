import { ProfileMenu } from "../../components/profile";
import MessageFillIcon from "@iconify-react/mage/message-fill";
import NotificationFillIcon from "@iconify-react/mingcute/notification-fill";
import SearchFillIcon from "@iconify-react/ri/search-fill";
import LocationIcon from "@iconify-react/duo-icons/location";
import { Button } from "@/components/ui/button";
import { Images } from "../../assets/images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type {MouseEvent} from "react"
import DashboardRoundedIcon from "@iconify-react/material-symbols/dashboard-rounded";
import { Calendar } from "@/components/ui/calendar";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import Camera16Icon from "@iconify-react/qlementine-icons/camera-16";

const Dashboard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mouse drag to scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

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
      {/* Top Header Section */}
      <div className="min-h-48 bg-[#e5e5e5e3] px-3 sm:px-5 pb-5 overflow-visible">
        <div className="h-14 border-black flex flex-wrap lg:flex-nowrap justify-between items-center w-full gap-2 overflow-visible">
          {/* Left Navigation and Logo */}
          <div className="h-full flex items-center gap-2 sm:gap-4 overflow-x-auto lg:overflow-visible scrollbar-none w-full lg:w-auto">
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
          <div className="h-full flex items-center justify-end pt-5 shrink-0 ml-auto lg:ml-0">
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
          <div className="bg-white h-auto rounded-3xl sm:rounded-full mt-2 px-3 py-3 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
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
              <div className="relative flex items-center w-full h-12">
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
                  "bg-[#1900FF] hover:bg-[#1900ffb7] font-bold w-full sm:w-50 rounded-full h-12 text-white px-8 shrink-0 cursor-pointer"
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
        <div className="w-full xl:w-56 flex items-center justify-between gap-3 shrink-0">
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
          className={`flex items-center gap-3 overflow-x-auto scrollbar-none px-2 py-1 w-full scroll-smooth [-webkit-overflow-scrolling:touch] select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
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
              className="shrink-0 h-12 w-48 rounded-2xl hover:bg-[#edebff98] bg-[#EDEBFF] text-black font-bold shadow-none pointer-events-none sm:pointer-events-auto"
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
          <div className="bg-[#1900FF] h-14 rounded-xl flex flex-col justify-center items-start px-6 sm:px-8 w-full xl:w-87.5 shadow-sm">
            <p className="text-xs sm:text-sm font-bold text-white truncate w-full">
              keep going to reach and improve even more.
            </p>
            <p className="text-xs sm:text-sm font-bold text-white truncate w-full">
              You’ve completed 85% of your homework goals this month!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[70px_1fr_2fr_1fr] min-h-[50vh] px-3 sm:px-5 gap-3 my-6">
        <div className="bg-[#0A0332] rounded-2xl min-h-17.5 lg:min-h-full"></div>

        {/* Messages Section */}
        <div className="bg-[#F0EFFC] rounded-2xl min-h-50 lg:min-h-full p-3 overflow-hidden">
          <div className="flex justify-between items-center">
            <p className="font-bold">Messages</p>
            <p className="text-xs cursor-pointer">View all</p>
          </div>
          <div className="bg-[#0A0332] h-14 rounded-full p-2 mt-3 flex justify-between items-center gap-3">
            <Avatar className={"h-10 w-10 shrink-0"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="w-full overflow-hidden">
              <p className="text-white text-sm truncate">
                Mr. Godfred Kusi (mentor)
              </p>
              <p className="text-white text-xs truncate">
                Mr. Godfred Kusi (mentor)
              </p>
            </div>
            <Button className={"bg-white rounded-full h-9 w-9 shrink-0"}>
              <ChevronRight className="text-black" />
            </Button>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-[#E5E4F5] h-14 rounded-full p-2 mt-3 flex justify-between items-center gap-3"
            >
              <Avatar className={"h-10 w-10 shrink-0"}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="w-full overflow-hidden">
                <p className="text-[#0A0332] font-bold text-sm truncate">
                  Mr. Godfred Kusi (mentor)
                </p>
                <p className="text-[#0A0332] font-bold text-xs truncate">
                  Mr. Godfred Kusi (mentor)
                </p>
              </div>
              <Button className={"bg-[#CEC8F2] rounded-full h-9 w-9 shrink-0"}>
                <ChevronRight className="text-black" />
              </Button>
            </div>
          ))}
        </div>

        {/* Anxiety Test & Appointments Section */}
        <div className="bg-white rounded-2xl min-h-50 lg:min-h-full">
          <div className="rounded-2xl border border-gray-200 bg-[#1900FF] overflow-hidden py-4 px-4 sm:px-8">
            <div className="flex justify-between">
              <p className="text-white font-bold">Anxiety Test</p>
              <p className="text-white text-sm">Ads</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="w-full">
                <p className="text-white mt-3 sm:mt-5 text-sm sm:text-base">
                  Have you been feeling particularly Anxious? Why not check it?
                </p>
                <Button
                  className={
                    "bg-white text-[#1900FF] mt-6 sm:mt-10 font-bold py-6 sm:py-7 rounded-full w-full sm:w-40"
                  }
                >
                  Contact Us
                </Button>
              </div>
              <div className="w-full relative flex items-center justify-center min-h-40 sm:min-h-0 my-4 sm:my-0">
                <div className="w-32 sm:w-40 rounded-[60px] sm:-ml-20 h-40 sm:h-48 z-40 bg-white overflow-hidden shadow-lg">
                  <img
                    src={Images[3]}
                    className="w-full h-full object-cover rounded-[60px]"
                    alt=""
                  />
                </div>
                <div className="w-32 sm:w-40 h-36 sm:h-44 bg-[#FF7DCD] absolute top-2 z-15 rounded-full opacity-80"></div>
                <div className="w-32 sm:w-40 h-32 sm:h-40 bg-[#E4F2FF] absolute -bottom-4 sm:-bottom-35 left-10 sm:left-20 rounded-[60px] opacity-80"></div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 py-4 px-4 sm:px-8 bg-[#f0effc] mt-5 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <p className="font-bold">Appointments</p>
              <p className="text-xs cursor-pointer">View all</p>
            </div>

            {/* Appointment item 1 */}
            <div className="flex flex-col sm:flex-row justify-between bg-[#C9C9CD] p-3 sm:px-2 sm:h-14 rounded-2xl sm:rounded-4xl items-center gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="h-10 w-10 rounded-full bg-[#0A0332] flex justify-center items-center shrink-0">
                  <Camera16Icon height="1em" className="text-white text-xl" />
                </div>
                <div className="sm:hidden">
                  <p className="font-bold text-sm">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-xs text-[#656565]">
                    You recently reacted on his post
                  </p>
                </div>
              </div>
              <div className="hidden sm:block w-full">
                <p className="font-bold text-sm truncate">
                  Mr. Godfred Kusi (mentor)
                </p>
                <p className="text-xs text-[#656565] truncate">
                  You recently reacted on his post/view or read book
                </p>
              </div>
              <AvatarGroup className="w-full sm:w-auto justify-center sm:justify-start">
                <Avatar className={"h-8 w-8 sm:h-10 sm:w-10"}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className={"h-8 w-8 sm:h-10 sm:w-10"}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className={"h-8 w-8 sm:h-10 sm:w-10"}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+4</AvatarGroupCount>
              </AvatarGroup>
              <Button
                className={
                  "bg-[#FF9001] py-3 sm:py-5 rounded-full w-full sm:w-auto shrink-0"
                }
              >
                Join Lesson
              </Button>
            </div>

            {/* Appointment items 2-6 */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row mt-3 bg-[#E4E3F2] p-3 sm:px-2 sm:h-14 rounded-2xl sm:rounded-4xl items-center gap-3"
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Avatar className={"h-10 w-10 shrink-0"}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="sm:hidden">
                    <p className="font-bold text-sm">
                      Mr. Godfred Kusi (mentor)
                    </p>
                    <p className="text-xs text-[#656565]">
                      You recently reacted on his post
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex w-full justify-start overflow-hidden">
                  <div>
                    <p className="font-bold text-sm truncate">
                      Mr. Godfred Kusi (mentor)
                    </p>
                    <p className="text-xs text-[#656565] truncate">
                      You recently reacted on his post/view or read book
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-40 text-center sm:text-left">
                  <p className="sm:ml-5 text-xs sm:text-sm font-medium text-gray-600">
                    Upcoming
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders & Calendar Section */}
        <div className="bg-white min-h-50 lg:min-h-full flex flex-col gap-6">
          <div className="py-3 px-4 sm:px-5 bg-[#F0EFFC] border border-gray-200 rounded-2xl">
            <div className="flex justify-between items-center">
              <p className="font-bold">Reminder</p>
              <p className="text-xs cursor-pointer">View all</p>
            </div>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex mt-3 bg-[#E4E3F2] px-2 h-14 rounded-4xl items-center gap-2"
              >
                <div className="w-12 sm:w-20 shrink-0 flex justify-center">
                  <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#FF9001]">
                    <NotificationFillIcon className="h-6 text-white" />
                  </div>
                </div>
                <div className="flex w-full justify-start overflow-hidden">
                  <div>
                    <p className="font-bold text-sm truncate">
                      Email - Dr. Regan
                    </p>
                    <p className="text-xs text-[#656565] truncate">
                      New assignment posted
                    </p>
                  </div>
                </div>

                <Button
                  className={
                    "bg-transparent rounded-full h-9 w-9 shrink-0 hover:bg-transparent"
                  }
                >
                  <ChevronRight className="text-black" />
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-[#F0EFFC] min-h-75 border border-gray-200 rounded-2xl p-2 sm:p-4 flex justify-center overflow-x-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-2xl border w-full max-w-full bg-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
