import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const boolean = useSelector((store) => store.action.isSideBarOpen);
  if (!boolean) return null;
  return (
    <div className=" bg-black w-fit  h-[calc(100vh-48px)] text-white">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex p-2 justify-between items-center font-thin text-xl">
          <FaHome size={25} color="white" className="mx-3" />
          <span>Home</span>
        </div>
        <div className="flex p-2 justify-between items-center font-thin text-xl">
          <SiYoutubeshorts size={25} color="white" className="mx-3" />
          <span>Shorts</span>
        </div>
        <div className="flex p-2 justify-start items-center font-thin text-xl mb-5">
          <FaWallet size={25} color="white" className="mx-3" />
          <span>Subscriptions</span>
        </div>
        <hr />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex p-2 justify-between items-center font-thin text-xl">
          <GrChannel size={25} color="white" className="mx-3" />
          <span>Your channel</span>
        </div>
        <div className="flex p-2 justify-between items-center font-thin text-xl">
          <FaHistory size={25} color="white" className="mx-3" />
          <span>History</span>
        </div>
        <div className="flex p-2 justify-start items-center font-thin text-xl">
          <FaWallet size={25} color="white" className="mx-3" />
          <span>Subscriptions</span>
        </div>
        <div className="flex p-2 justify-start items-center font-thin text-xl">
          <BiSolidLike size={25} color="white" className="mx-3" />
          <span>Liked videos</span>
        </div>
        <hr color="white" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidebar;
