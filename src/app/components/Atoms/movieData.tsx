const MovieData = ({ title, rating, year, genre, director, cast, plot }) => {
  return (
    <div className=" mt-3 ml-3 flex flex-col gap-[60px] lg:flex-row lg:items-start lg:justify-between lg:p-12">
      <div className="text-center lg:w-2/3">
        <h2 className="text-2xl font-bold text-black lg:text-4xl">{title}</h2>
        <div className="mt-2 mb-2 flex space-x-2 items-center">
        <div className="bg-yellow-500 text-white px-3 py-1 rounded-md">
            {year}
          </div>
          <div className="bg-yellow-500 text-white px-3 py-1 rounded-md">
            {rating}
          </div>
          <div className="bg-yellow-500 text-white px-3 py-1 rounded-md">
            {genre}
          </div>
        </div>

        <div className="mt-4 text-gray-600">
          Directed by : </div>
          <span className="font-bold text-black">{director}</span>
        
        {/* <div className="text-lg text-black ">{cast}</div>
        <div className="text-lg text-black ">{plot}</div> */}
      </div>
    </div>
  );
};

export default MovieData;
