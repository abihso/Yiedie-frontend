import { Images } from "../../../assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DiscoverOutlinedIcon from "@iconify-react/weui/discover-outlined";
import SaveIcon from "@iconify-react/reicon/save";
import ScheduleIcon from "@iconify-react/akar-icons/schedule";
import MessageRoundIcon from "@iconify-react/mage/message-round";
import HomeBrokenIcon from "@iconify-react/solar/home-broken";
import PlusIcon from "@iconify-react/akar-icons/plus";
import CommentOutlineIcon from "@iconify-react/basil/comment-outline";
import PeopleGroupIcon from "@iconify-react/akar-icons/people-group";
import NotificationLineIcon from "@iconify-react/clarity/notification-line";
import EmojiDuotoneIcon from "@iconify-react/si/emoji-duotone";
import ImageIcon from "@iconify-react/akar-icons/image";
import VideoOutlineIcon from "@iconify-react/basil/video-outline";
import InformationOutlineIcon from "@iconify-react/ion/information-outline";
import GlobeIcon from "@iconify-react/entypo/globe";
import LikeIcon from "@iconify-react/icon-park-solid/like";
import ThreeDotsIcon from "@iconify-react/bi/three-dots";
import RepostIcon from "@iconify-react/hugeicons/repost";
import SaveAddIcon from "@iconify-react/reicon/save-add";
import ShareOutlineIcon from "@iconify-react/cuida/share-outline";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Feeds = () => {
  const status = [
    { label: "Select Visibility", value: null },
    { label: "public", value: "Public" },
    { label: "private", value: "private" },
  ];
  const sort = [
    { label: "Sorted by:", value: null },
    { label: "recent", value: "Recent" },
    { label: "last-week", value: "Last-week" },
  ];
  return (
    <div className="min-h-screen p-2 sm:p-4">
      {/* Header */}
      <div className="relative flex flex-col sm:flex-row justify-center items-center gap-2 mb-3">
        <p className="static sm:absolute sm:left-3 font-bold text-lg">Feeds</p>
        <div className="flex gap-4 sm:gap-2">
          {["For you", "Following", "Latest", "Live"].map((tab) => (
            <p
              key={tab}
              className="font-bold text-xs cursor-pointer transition-all duration-200 hover:text-[#1900FF] hover:-translate-y-0.5 active:scale-95 select-none"
            >
              {tab}
            </p>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-3 gap-3">
        {/* Left Side & Main Content Container */}
        <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Left Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {/* User Profile Card */}
            <div className="bg-color1 border border-color1 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <div className="w-full flex flex-col relative pb-2 group cursor-pointer">
                <img
                  src={Images[5]}
                  alt=""
                  className="w-[94%] mt-2 rounded-lg h-12 object-cover self-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col justify-center border-b border-color1 pt-5 pb-2">
                  <p className="text-xs text-center font-medium">
                    Antwi Boasiako Theophilus
                  </p>
                  <p className="text-[10px] text-center text-gray-500">
                    @ABkobby_11
                  </p>
                </div>
                <div className="bg-white h-11 w-11 rounded-full absolute left-1/2 -translate-x-1/2 top-7 flex justify-center items-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Avatar className="h-9 w-9 shrink-0">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="flex justify-center gap-3 items-center h-10 px-2">
                <div className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95">
                  <p className="font-extrabold text-[10px]">20</p>
                  <p className="text-[10px] font-light">Post</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95">
                  <p className="font-extrabold text-[10px]">20k</p>
                  <p className="text-[10px] font-light">Followers</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95">
                  <p className="font-extrabold text-[10px]">500</p>
                  <p className="text-[10px] font-light">Following</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-color1 border border-color1 rounded-xl pb-3 min-h-48">
              <div className="h-12 border-b border-color1 p-2 flex items-center">
                <p className="text-lg font-bold">Tabs</p>
              </div>
              <div className="space-y-1 px-2 mt-2">
                {[
                  { icon: HomeBrokenIcon, label: "Home" },
                  { icon: DiscoverOutlinedIcon, label: "Discover" },
                  { icon: SaveIcon, label: "Saved" },
                  { icon: PlusIcon, label: "Add Post" },
                  { icon: CommentOutlineIcon, label: "Chats" },
                  { icon: PeopleGroupIcon, label: "Communities" },
                  { icon: NotificationLineIcon, label: "Notification" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:translate-x-1 active:scale-95"
                    >
                      <Icon
                        height="1em"
                        className="transition-transform duration-200 group-hover:scale-110"
                      />
                      <p className="text-xs">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Activity Card */}
            <div className="bg-color1 border border-color1 rounded-xl pb-3 min-h-48">
              <div className="h-12 border-b border-color1 p-2 flex items-center">
                <p className="text-lg font-bold">Activity</p>
              </div>
              <div className="flex flex-col gap-3 px-2 py-3">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-1 p-1 rounded-md transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:translate-x-0.5"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="truncate">
                        <p className="text-[8px] font-bold truncate">
                          Mr. Godfred Kusi (mentor)
                        </p>
                        <p className="text-[7px]">Liked your comment</p>
                      </div>
                    </div>
                    <p className="text-[9px] font-bold text-[#1900FF] shrink-0 cursor-pointer transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 active:scale-90">
                      Follow
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Feed Box */}
          <div className="lg:col-span-10 flex flex-col gap-4">
            {/* Create Post Widget */}
            <div className="min-h-[5rem] border rounded-2xl border-color1 py-2 px-3 sm:px-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center gap-2 sm:gap-4 rounded-2xl">
                <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="bg-[#DCDFE5] w-full h-8 flex rounded-2xl px-4 sm:px-7 items-center relative transition-all duration-200 focus-within:ring-2 focus-within:ring-[#1900FF]/40 focus-within:bg-white">
                  <p className="text-xs truncate text-gray-600">
                    Share something......
                  </p>
                  <div className="absolute right-3 cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-12 active:scale-90">
                    <EmojiDuotoneIcon height="1em" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <div className="w-full sm:w-[95%] flex flex-wrap justify-between items-center gap-2">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {[
                      { icon: ImageIcon, label: "Image" },
                      { icon: VideoOutlineIcon, label: "Video" },
                      { icon: InformationOutlineIcon, label: "Poll" },
                      { icon: ScheduleIcon, label: "Schedule" },
                      { icon: InformationOutlineIcon, label: "Disclosure" },
                    ].map((btn, i) => {
                      const BtnIcon = btn.icon;
                      return (
                        <button
                          key={i}
                          className="flex gap-1 sm:gap-2 items-center py-1.5 px-2 rounded-lg transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-0.5 active:scale-95"
                        >
                          <BtnIcon height="1em" />
                          <span className="text-xs font-bold">{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <GlobeIcon height="1em" />
                    <Select items={status}>
                      <SelectTrigger className="w-full max-w-48 border-none text-xs font-bold transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-0.5">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="border-none">
                        <SelectGroup>
                          <SelectLabel>Status</SelectLabel>
                          {status.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter / Sort Row */}
            <div className="flex justify-between items-center gap-2">
              <div className="border-b w-full border-color1" />
              <div className="shrink-0">
                <Select items={sort}>
                  <SelectTrigger className="w-full max-w-48 border-none text-[10px] font-bold transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-0.5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-none">
                    <SelectGroup>
                      <SelectLabel className="text-[10px]">
                        Sorted by:
                      </SelectLabel>
                      {sort.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Feed Items */}
            {/* Post 1 */}
            <div className="min-h-56 rounded-2xl border border-color1 px-3 py-4 space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex justify-between items-start gap-2">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-semibold">
                      Mr. Godfred Kusi (mentor){" "}
                      <span className="text-[10px] text-[#656565] font-normal">
                        @Godey 41 min ago
                      </span>
                    </p>
                    <p className="text-xs mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur mollitia, perspiciatis tempora amet optio iusto
                      reiciendis ipsum ad earum ipsa. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Pariatur mollitia,
                      perspiciatis tempora amet optio iusto reiciendis ipsum ad
                      earum ipsa.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 p-1 rounded-full transition-transform duration-200 hover:scale-125 active:scale-90 hover:bg-black/5 dark:hover:bg-white/5">
                  <ThreeDotsIcon height="1em" className="cursor-pointer" />
                </div>
              </div>

              <div className="overflow-hidden rounded-xl mt-3">
                <img
                  src={Images[4]}
                  className="h-48 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                  alt=""
                />
              </div>

              <div className="h-10 flex flex-wrap gap-4 sm:gap-6 items-center">
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <LikeIcon
                    height="1em"
                    color="red"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-red-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <MessageRoundIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-blue-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <RepostIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-green-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <SaveAddIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-yellow-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <ShareOutlineIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-purple-500">
                    22K
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full relative">
                  <input
                    className="bg-[#DCDFE5] h-9 w-full rounded-2xl text-xs text-[#656565] flex items-center pl-4 pr-9 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1900FF]/40 focus:bg-white"
                    placeholder="Write a comment"
                  />
                  <EmojiDuotoneIcon
                    height="1em"
                    className="absolute right-3 top-2.5 cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-12 active:scale-90"
                  />
                </div>
              </div>
            </div>

            {/* Post 2 (Text only) */}
            <div className="min-h-44 rounded-2xl border border-color1 px-3 py-4 space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex justify-between items-start gap-2">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-semibold">
                      Mr. Godfred Kusi (mentor){" "}
                      <span className="text-[10px] text-[#656565] font-normal">
                        @Godey 41 min ago
                      </span>
                    </p>
                    <p className="text-xs mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur mollitia, perspiciatis tempora amet optio iusto
                      reiciendis ipsum ad earum ipsa. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Pariatur mollitia,
                      perspiciatis tempora amet optio iusto reiciendis ipsum ad
                      earum ipsa.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 p-1 rounded-full transition-transform duration-200 hover:scale-125 active:scale-90 hover:bg-black/5 dark:hover:bg-white/5">
                  <ThreeDotsIcon height="1em" className="cursor-pointer" />
                </div>
              </div>

              <div className="h-10 flex flex-wrap gap-4 sm:gap-6 items-center">
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <LikeIcon
                    height="1em"
                    color="red"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-red-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <MessageRoundIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-blue-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <RepostIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-green-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <SaveAddIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-yellow-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <ShareOutlineIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-purple-500">
                    22K
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full relative">
                  <input
                    className="bg-[#DCDFE5] h-9 w-full rounded-2xl text-xs text-[#656565] flex items-center pl-4 pr-9 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1900FF]/40 focus:bg-white"
                    placeholder="Write a comment"
                  />
                  <EmojiDuotoneIcon
                    height="1em"
                    className="absolute right-3 top-2.5 cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-12 active:scale-90"
                  />
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="min-h-56 rounded-2xl border border-color1 px-3 py-4 space-y-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex justify-between items-start gap-2">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-semibold">
                      Mr. Godfred Kusi (mentor){" "}
                      <span className="text-[10px] text-[#656565] font-normal">
                        @Godey 41 min ago
                      </span>
                    </p>
                    <p className="text-xs mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur mollitia, perspiciatis tempora amet optio iusto
                      reiciendis ipsum ad earum ipsa. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Pariatur mollitia,
                      perspiciatis tempora amet optio iusto reiciendis ipsum ad
                      earum ipsa.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 p-1 rounded-full transition-transform duration-200 hover:scale-125 active:scale-90 hover:bg-black/5 dark:hover:bg-white/5">
                  <ThreeDotsIcon height="1em" className="cursor-pointer" />
                </div>
              </div>

              <div className="overflow-hidden rounded-xl mt-3">
                <img
                  src={Images[8]}
                  className="h-48 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                  alt=""
                />
              </div>

              <div className="h-10 flex flex-wrap gap-4 sm:gap-6 items-center">
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <LikeIcon
                    height="1em"
                    color="red"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-red-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <MessageRoundIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-blue-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <RepostIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-green-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <SaveAddIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-yellow-500">
                    22K
                  </p>
                </div>
                <div className="flex gap-1.5 items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-90">
                  <ShareOutlineIcon
                    height="1em"
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <p className="text-[10px] font-bold transition-colors group-hover:text-purple-500">
                    22K
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full relative">
                  <input
                    className="bg-[#DCDFE5] h-9 w-full rounded-2xl text-xs text-[#656565] flex items-center pl-4 pr-9 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1900FF]/40 focus:bg-white"
                    placeholder="Write a comment"
                  />
                  <EmojiDuotoneIcon
                    height="1em"
                    className="absolute right-3 top-2.5 cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-12 active:scale-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-color1 border border-color1 rounded-xl pb-3 min-h-48">
            <div className="h-12 border-b border-color1 p-2 flex items-center">
              <p className="text-lg font-bold">Suggested for you</p>
            </div>
            <div className="flex flex-col gap-3 px-2 py-3">
              {[
                { category: "Law", title: "Arrested" },
                { category: "Business", title: "Trading Gold" },
                { category: "Ghana", title: "His own friend" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-1 rounded-md cursor-pointer transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:translate-x-1"
                >
                  <p className="text-[8px] text-gray-500">
                    Trending in {item.category}
                  </p>
                  <p className="text-[10px] font-bold">{item.title}</p>
                </div>
              ))}
              <p className="font-bold text-[10px] text-[#1900FF] cursor-pointer transition-all duration-200 hover:opacity-75 hover:translate-x-0.5">
                See more
              </p>
            </div>
          </div>

          <div className="bg-color1 border border-color1 rounded-xl pb-3 min-h-48">
            <div className="h-12 border-b border-color1 p-2 flex items-center">
              <p className="text-lg font-bold">What is happening</p>
            </div>
            <div className="flex flex-col gap-3 px-2 py-3">
              {[
                { category: "Law", title: "Arrested" },
                { category: "Business", title: "Trading Gold" },
                { category: "Ghana", title: "His own friend" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-1 rounded-md cursor-pointer transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:translate-x-1"
                >
                  <p className="text-[8px] text-gray-500">
                    Trending in {item.category}
                  </p>
                  <p className="text-[10px] font-bold">{item.title}</p>
                </div>
              ))}
              <p className="font-bold text-[10px] text-[#1900FF] cursor-pointer transition-all duration-200 hover:opacity-75 hover:translate-x-0.5">
                See more
              </p>
            </div>
          </div>

          <div className="bg-color1 border border-color1 rounded-xl pb-3 min-h-48">
            <div className="h-12 border-b border-color1 p-2 flex items-center">
              <p className="text-lg font-bold">Who to follow</p>
            </div>
            <div className="flex flex-col gap-3 px-2 py-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-1 p-1 rounded-md transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:translate-x-0.5"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Avatar className="h-8 w-8 shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="truncate">
                      <p className="text-[8px] font-bold truncate">
                        Mr. Godfred Kusi (mentor)
                      </p>
                      <p className="text-[7px]">Liked your comment</p>
                    </div>
                  </div>
                  <button className="text-[9px] font-bold text-white bg-[#1900FF] py-1 px-2 rounded-lg shrink-0 cursor-pointer transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-90 shadow-sm hover:shadow">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
