import Maingrid from "./Maingrid";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Maingrid />
    </div>
  );
};

export default Body;
