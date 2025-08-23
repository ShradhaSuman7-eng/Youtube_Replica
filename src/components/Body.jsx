import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="grid grid-cols-12 w-full h-[calc(100vh-56px)]">
      {/* Sidebar in 2 columns */}
      <div className="col-span-2">
        <Sidebar />
      </div>

      {/* Main container in remaining 10 columns */}
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
