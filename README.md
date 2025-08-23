     {/* <div className="mt-4 ">
          {movieData &&
            movieData.map((curr) =>
              curr.id === videoId ? (
                <div>
                  <p key={curr.id} className="text-lg font-semibold">
                    {curr.snippet?.title}
                  </p>

                  <div className="flex gap-1">
                    <div className="flex w-fit px-4 py-2 gap-2 text-lg bg-gray-200 rounded-l-4xl">
                      <div>
                        <i class="fa-solid fa-thumbs-up"></i>
                      </div>

                      <p className="text-[20px]">
                        {Math.floor(curr.statistics.likeCount / 1000) + "K"}
                      </p>
                    </div>

                    <div className=" flex w-fit text-center bg-gray-200 text-black px-3 rounded-r-4xl ">
                      <i class="fa-solid fa-thumbs-down"></i>
                    </div>
                  </div>
                </div>
              ) : null
            )}
        </div> */}