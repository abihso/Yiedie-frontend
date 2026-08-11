// import { useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProfileMenu } from "../../components/profile";
// import { Images } from "../../assets/images";
import MessageFillIcon from '@iconify-react/mage/message-fill';
import NotificationFillIcon from '@iconify-react/mingcute/notification-fill';
const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="h-48 border bg-[#e5e5e5e3] flex justify-between absolute w-full">
        {/* <img
          src={Images[2]}
          className="h-48 absolute -right-14  w-40 bottom-0 z-30 -rotate-45 "
          alt=""
        /> */}
        <div className="border h-full w-full">1</div>
        <div className=" h-full w-full  flex justify-end pr-10  ">
          <div className="flex items-center gap-2 h-1/2 ">
            <NotificationFillIcon
              height="1em"
              className="-mt-1"
              color="#09024B"
              fontSize={25}
            />
            <MessageFillIcon
              height="1em"
              className="-mt-1"
              color="#09024B"
              fontSize={25}
            />
            <div className="z-40 w-fit  border-black">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
