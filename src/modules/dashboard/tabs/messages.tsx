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
import CallOutlineIcon from '@iconify-react/famicons/call-outline';
import MenuDots16Icon from '@iconify-react/qlementine-icons/menu-dots-16';
const Messages = () => {
  return (
    <div>
      <div className="h-14 px-3 pt-3 ">
        <p className="text-color1 font-extrabold text-xl">Messages</p>
      </div>
      <div className="flex justify-between min-h-screen ">
        <div className="w-16 px-3 flex gap-4  flex-col items-center ">
          <PeopleGroupDuotoneIcon
            height="1em"
            className="text-3xl text-color4"
          />
          <OrganizationIcon height="1em" className="text-3xl text-color4" />
          <div className="border w-full " />
          <DiscoverLightIcon height="1em" className="text-3xl text-color4" />
          <FeedLinearIcon height="1em" className="text-3xl text-color4" />
          <SaveIcon height="1em" className="text-3xl text-color4" />
          <div className="border w-full mt-2 " />
          <MessageRoundIcon height="1em" className="text-3xl text-color4" />
          <GoogleJournalIcon height="1em" className="text-3xl text-color4" />
          <ResourcesIcon height="1em" className="text-3xl text-color4" />
          <div className="border w-full mt-2 " />
          <ScheduleIcon height="1em" className="text-3xl text-color4" />
          <Task16Icon height="1em" className="text-3xl text-color4" />
          <div className=" absolute bottom-10">
            <SettingOutlinedIcon
              height="1em"
              className="text-3xl text-color4"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-12 ">
          <div className=" col-span-2 ">
            <div className="h-40 border border-[#ACA9FF] bg-[#f3f7ff] ">
              <div className="w-full flex flex-col relative pb-2 group cursor-pointer">
                <img
                  src={Images[5]}
                  alt=""
                  className="w-[94%] mt-2 rounded-lg h-16 object-cover self-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col justify-center pt-9 pb-2">
                  <p className="text-xs text-center font-medium">
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
            <div className=" flex gap-5 px-3 h-10 my-2 border border-[#ACA9FF] bg-[#f3f7ff]">
              <button className=" text-xs">All</button>
              <button className=" text-xs">Groups</button>
              <button className=" text-xs">Request</button>
              <button className=" text-xs">Cals</button>
            </div>
            <div className="min-h-44 border border-[#ACA9FF] bg-[#f3f7ff] p-3 flex flex-col gap-3 ">
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px]">Mr. Godfred Kusi (mentor)</p>
                  <p className="text-[8px]">Liked your comment</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-10 ">
            <div className="h-12 border border-[#ACA9FF] flex justify-between items-center px-5 ">
              <div className="flex items-center gap-2 ">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[10px] font-extrabold">
                    Antwi Boasiako Theophilus
                  </p>
                  <p className="text-[8px]">@ABkobby_11</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <CallOutlineIcon height="25px" />
                <VideoOutlineIcon height="25px" />
                <MenuDots16Icon height="25px" />
              </div>
            </div>
            <div className="border min-h-full border-[#ACA9FF]">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
