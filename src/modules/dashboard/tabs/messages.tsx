import PeopleGroupDuotoneIcon from "@iconify-react/stash/people-group-duotone";
import SettingOutlinedIcon from "@iconify-react/ant-design/setting-outlined";
import Task16Icon from "@iconify-react/qlementine-icons/task-16";
import ScheduleIcon from "@iconify-react/akar-icons/schedule";
import ResourcesIcon from "@iconify-react/grommet-icons/resources";
import GoogleJournalIcon from "@iconify-react/arcticons/google-journal";
import MessageRoundIcon from "@iconify-react/mage/message-round";
import SaveIcon from "@iconify-react/reicon/save";
import FeedLinearIcon from "@iconify-react/solar/feed-linear";
import DiscoverLightIcon from "@iconify-react/iconamoon/discover-light";
import OrganizationIcon from "@iconify-react/grommet-icons/organization";
import { Images } from "../../../assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import VideoOutlineIcon from "@iconify-react/basil/video-outline";
import CallOutlineIcon from "@iconify-react/famicons/call-outline";
import MenuDots16Icon from "@iconify-react/qlementine-icons/menu-dots-16";
import PlusIcon from "@iconify-react/akar-icons/plus";
import StickerEmojiIcon from "@iconify-react/mdi/sticker-emoji";
import Emoji2LineIcon from "@iconify-react/mingcute/emoji-2-line";
import MicIcon from "@iconify-react/codicon/mic";

const Messages = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="h-14 px-3 pt-3 shrink-0">
        <p className="text-color1 font-extrabold text-xl">Messages</p>
      </div>

      <div className="flex justify-between flex-1 overflow-hidden">
        {/* Leftmost Icon Sidebar */}
        <div className="w-16 px-3 flex gap-4 flex-col items-center relative shrink-0">
          <PeopleGroupDuotoneIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <OrganizationIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <div className="border w-full" />
          <DiscoverLightIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <FeedLinearIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <SaveIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <div className="border w-full mt-2" />
          <MessageRoundIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90 text-[#1900FF]"
          />
          <GoogleJournalIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <ResourcesIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <div className="border w-full mt-2" />
          <ScheduleIcon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <Task16Icon
            height="1em"
            className="text-3xl text-color4 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90"
          />
          <div className="absolute bottom-6">
            <SettingOutlinedIcon
              height="1em"
              className="text-3xl text-color4 cursor-pointer transition-transform duration-300 hover:rotate-90 hover:scale-125 active:scale-90"
            />
          </div>
        </div>

        {/* Main Workspace */}
        <div className="w-full grid grid-cols-12 overflow-hidden">
          {/* Middle Navigation Column */}
          <div className="col-span-2 flex flex-col overflow-hidden">
            {/* User Profile Card */}
            <div className="h-40 border border-[#ACA9FF] bg-[#f3f7ff] shrink-0 transition-all duration-300 hover:shadow-md">
              <div className="w-full flex flex-col relative pb-2 group cursor-pointer">
                <img
                  src={Images[5]}
                  alt=""
                  className="w-[94%] mt-2 rounded-lg h-16 object-cover self-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col justify-center pt-9 pb-2">
                  <p className="text-xs text-center font-medium transition-colors group-hover:text-[#1900FF]">
                    Antwi Boasiako Theophilus
                  </p>
                  <p className="text-[10px] text-center text-gray-500">
                    @ABkobby_11
                  </p>
                </div>
                <div className="bg-white h-14 w-14 rounded-full absolute left-1/2 -translate-x-1/2 top-12 flex justify-center items-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Avatar className="h-9 w-9 shrink-0">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4 px-3 h-10 my-2 border border-[#ACA9FF] bg-[#f3f7ff] items-center shrink-0">
              {["All", "Groups", "Request", "Calls"].map((tab, idx) => (
                <button
                  key={tab}
                  className={`text-xs font-medium cursor-pointer transition-all duration-200 hover:text-[#1900FF] hover:-translate-y-0.5 active:scale-95 ${
                    idx === 0 ? "text-[#1900FF] font-bold" : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border border-[#ACA9FF] bg-[#f3f7ff] p-3 flex flex-col gap-3">
              {[...Array(14)].map((_, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center p-1 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#ACA9FF]/20 hover:translate-x-1 active:scale-[0.98] group"
                >
                  <Avatar className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:scale-105">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="truncate">
                    <p className="text-[10px] font-medium truncate transition-colors group-hover:text-[#1900FF]">
                      Mr. Godfred Kusi (mentor)
                    </p>
                    <p className="text-[8px] text-gray-500 truncate">
                      Liked your comment
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chat Column */}
          <div className="col-span-10 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-12 border border-[#ACA9FF] flex justify-between items-center px-5 shrink-0">
              <div className="flex items-center gap-2 cursor-pointer group">
                <Avatar className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px] font-extrabold transition-colors group-hover:text-[#1900FF]">
                    Antwi Boasiako Theophilus
                  </p>
                  <p className="text-[8px] text-gray-500">@ABkobby_11</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="p-1.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 active:scale-90">
                  <CallOutlineIcon height="22px" />
                </div>
                <div className="p-1.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 active:scale-90">
                  <VideoOutlineIcon height="22px" />
                </div>
                <div className="p-1.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 active:scale-90">
                  <MenuDots16Icon height="22px" />
                </div>
              </div>
            </div>

            {/* Chat Content Panel */}
            <div className="border flex-1 border-[#ACA9FF] flex flex-col justify-between py-4 px-6 overflow-hidden">
              <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3 pr-2">
                {/* Incoming Message */}
                <div className="h-20 w-full flex items-center gap-2">
                  <Avatar className="h-9 w-9 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="h-10 w-fit py-3 px-6 flex items-center rounded-3xl bg-[#EAEAEA] transition-all duration-200 hover:bg-[#e0e0e0] hover:shadow-sm">
                    <p className="text-[#656565] text-xs">Hi solomon</p>
                  </div>
                </div>

                {/* Outgoing Message */}
                <div className="h-20 w-full flex justify-end items-center gap-2">
                  <div className="h-10 w-fit py-3 px-6 flex items-center rounded-3xl bg-[#ACA9FF]/30 transition-all duration-200 hover:bg-[#ACA9FF]/40 hover:shadow-sm">
                    <p className="text-black text-xs">Hello</p>
                  </div>
                  <Avatar className="h-9 w-9 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                {/* Incoming Message */}
                <div className="h-20 w-full flex items-center gap-2">
                  <Avatar className="h-9 w-9 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="h-10 w-fit py-3 px-6 flex items-center rounded-3xl bg-[#EAEAEA] transition-all duration-200 hover:bg-[#e0e0e0] hover:shadow-sm">
                    <p className="text-[#656565] text-xs">how are you</p>
                  </div>
                </div>

                {/* Outgoing Message */}
                <div className="h-20 w-full flex justify-end items-center gap-2">
                  <div className="h-10 w-fit py-3 px-6 flex items-center rounded-3xl bg-[#ACA9FF]/30 transition-all duration-200 hover:bg-[#ACA9FF]/40 hover:shadow-sm">
                    <p className="text-black text-xs">am doing good</p>
                  </div>
                  <Avatar className="h-9 w-9 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="h-11 border border-[#ACA9FF] rounded-xl flex items-center justify-between px-3 mt-2 shrink-0 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#1900FF]/40 focus-within:shadow-md">
                <div className="flex gap-3 items-center flex-1 h-full">
                  <div className="p-1 rounded-full cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-90 active:scale-90">
                    <PlusIcon height="1.1em" />
                  </div>
                  <div className="p-1 rounded-full cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90">
                    <StickerEmojiIcon height="1.1em" />
                  </div>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="text-xs h-full w-full py-2 bg-transparent outline-none text-gray-700"
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <div className="p-1 rounded-full cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-12 active:scale-90">
                    <Emoji2LineIcon height="1.1em" />
                  </div>
                  <div className="p-1 rounded-full cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-90">
                    <MicIcon height="1.1em" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
