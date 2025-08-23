import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard  from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDataStored } from "../utils/dataSlice";

function VideosContainer() {
  const [videos, setVideos] = useState([]);
  const dispatch=useDispatch();

 

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const res = await data.json();
      setVideos(res.items || []);
     dispatch(addDataStored(res.items))
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id?.videoId || video.id}>
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideosContainer;
