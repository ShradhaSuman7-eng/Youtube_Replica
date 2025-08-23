import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SelfProfile from "./SelfProfile";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const movieData = useSelector((store) => store.data.dataStored);

  console.log("Movie Data from store is:", movieData);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="w-full flex-col ">
      <div className="flex">
        <div className="flex-1">
          <div>
            <iframe
              key={videoId}
              width="1200"
              height="600"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </div>

        <div className="flex-1 overflow-y-hidden ">
          <LiveChat />
        </div>
      </div>

      <div>
        <SelfProfile />
      </div>

<div>
  <CommentsContainer/>
</div>
    
    </div>
  );
}

export default WatchPage;
