import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setSuggestion([]);
        return;
      }

      if (searchCache && searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    console.log("API CALL " + searchQuery);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await response.json();
    setSuggestion(result[1]);
    console.log(result);

    dispatch(
      cacheResults({
        [searchQuery]: result[1],
      })
    );
  };

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
    
      <div className="flex items-center gap-4">
        <i
          className="fa-solid fa-bars text-2xl cursor-pointer hover:bg-gray-100 p-2 rounded-full"
          onClick={() => toggleMenuHandler()}
        ></i>
        <div className="flex items-center gap-1">
          <i className="fa-brands fa-youtube text-red-600 text-3xl"></i>
          <span className="font-bold text-xl tracking-tight">YouTube</span>
        </div>
      </div>

      <div className="flex flex-grow justify-center max-w-2xl mx-4 relative">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="px-5 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <i className="fa-solid fa-magnifying-glass text-gray-700"></i>
          </button>
        </div>

        <div className="absolute top-12 left-0 w-full bg-white shadow-md rounded-lg border border-gray-100 z-10">
          {showSuggestion &&
            suggestions.map((sgsn) => (
              <li
                className=" list-none
             px-4  py-2 hover:bg-gray-100 cursor-pointer"
              >
                <i className="fa-solid fa-magnifying-glass text-gray-700 mr-2"></i>
                {sgsn}
              </li>
            ))}
        </div>
      </div>

   
      <div className="flex items-center gap-4">
        <i className="fa-solid fa-user text-2xl cursor-pointer hover:bg-gray-100 p-2 rounded-full"></i>
      </div>
    </div>
  );
};

export default Head;
