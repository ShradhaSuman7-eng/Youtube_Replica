function VideoCard({ data }) {
  console.log(" here is data", data[0]);
  const { title, channelTitle, thumbnails } = data.snippet;
  const { viewCount } = data.statistics;

  return (
    <div className="w-full rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full h-auto rounded-t-md"
      />
      <div className="p-2 shadow-lg">
        <p className="font-bold text-sm">{title}</p>
        <p className="text-gray-600 text-xs">{channelTitle}</p>
        <p className="text-gray-500 text-xs">
          {parseInt(viewCount).toLocaleString()} views
        </p>
      </div>

     
    </div>
  );
}



export default VideoCard;
