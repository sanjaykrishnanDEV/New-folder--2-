import { useNavigate } from "react-router-dom";

const Videotile = ({ info }) => {
  const navigate = useNavigate();
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  function handleToPlayer() {
    navigate(`/video/${info.id}`);
  }
  return (
    <div
      onClick={handleToPlayer}
      className="m-3 h-56 w-48 flex flex-col justify-center items-center shadow-lg
    border-2 p-2 rounded-md hover:bg-slate-400 cursor-pointer"
    >
      <img src={thumbnails.standard?.url} alt={title} />
      <div className=" overflow-hidden h-1">
        <p className="font-mono text-sm p-1">{title}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-semibold">{channelTitle}</h1>
        <h1 className="text-center text-sm">views:{statistics?.viewCount}</h1>
      </div>
    </div>
  );
};

export default Videotile;
