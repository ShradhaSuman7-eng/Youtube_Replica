import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {isMenuOpen ? (
        <div
          className={` col-span-2 flex flex-col items-start h-[calc(100vh-56px)] overflow-y-auto border-r border-gray-200 bg-white p-4 text-m
            transform transition-transform duration-600 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Main Navigation */}
          <ul className="space-y-2">
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-house text-lg"></i>
              <Link to={"/"}>
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-bolt text-lg"></i>
              <span>Shorts</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-video text-lg"></i>
              <span>Videos</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-tower-broadcast text-lg"></i>
              <span>Live</span>
            </li>
          </ul>

          {/* Subscriptions */}
          <h1 className="font-semibold py-4 border-t mt-4">Subscriptions</h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-music text-lg"></i>
              <span>Music</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-basketball text-lg"></i>
              <span>Sports</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-gamepad text-lg"></i>
              <span>Gaming</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-film text-lg"></i>
              <span>Movies</span>
            </li>
          </ul>

          {/* Watch Later */}
          <h1 className="font-semibold py-4 border-t mt-4">Watch Later</h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-regular fa-clock text-lg"></i>
              <span>Music</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-regular fa-clock text-lg"></i>
              <span>Sports</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-regular fa-clock text-lg"></i>
              <span>Gaming</span>
            </li>
            <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <i className="fa-regular fa-clock text-lg"></i>
              <span>Movies</span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="col-span-1 flex flex-col gap-7 items-start mt-4 ml-4 ">
          <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
            <Link to={"/"}>
              <div className="flex flex-col justify-center text-center ml-4">
                <i className="fa-solid fa-house text-lg"></i>
                <span className="text-[11px]">Home</span>
              </div>
            </Link>
          </li>

          <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
            <div className="flex flex-col justify-center text-center ml-4">
              <i className="fa-solid fa-bolt text-lg"></i>
              <span className="text-[11px]">Shorts</span>
            </div>
          </li>

          <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
            <div className="flex flex-col justify-center text-center ">
              <i className="fa-brands fa-square-youtube"></i>
              <span className="text-[11px]">Subscriptions</span>
            </div>
          </li>

          <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
            <div className="flex flex-col justify-center text-center ml-2">
              <i className="fa-solid fa-download"></i>
              <span className="text-[11px]">Downloads</span>
            </div>
          </li>

          <li className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
            <div className="flex flex-col justify-center text-center ml-5">
              <i className="fa-solid fa-circle-user"></i>
              <span className="text-[11px]">Users</span>
            </div>
          </li>
        </div>
      )}
    </>
  );
}

export default Sidebar;
