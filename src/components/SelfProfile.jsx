import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const SelfProfile = () => {
  const movieData = useSelector((store) => store.data.dataStored);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  console.log("Movies Data", movieData);

  console.log(movieData[0]?.snippet?.channelTitle);

  return (
    <div className="flex font-extrabold p-3 items-center">
      {movieData.map(
        (currData) =>
          currData.id === videoId && (
            <div className="flex flex-col">
              <div>
                <div>
                  <p className="text-lg font-extrabold py-2">
                    {currData.snippet?.title}
                  </p>
                </div>
              </div>

              <div key={currData.id} className="flex items-center gap-3">
                <div className="text-2xl text-gray-600">
                  <i className="fa-solid fa-circle-user"></i>
                </div>

                <div className="flex flex-col">
                  <h2 className="font-semibold text-[16px]">
                    {currData.snippet.channelTitle}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {Math.floor(currData.statistics.viewCount / 1000000)}M
                    subscribers
                  </p>
                </div>

                <button className="ml-6 bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800">
                  Subscribe
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SelfProfile;
