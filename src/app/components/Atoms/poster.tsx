
const Poster = ({ poster }) => {

  return (
    <div className="flex flex-col items-center ml-10 justify-center w-[80%]">
      <div>
                <img
                  src={poster}
                  alt=""
                  className="rounded-3xl shadow-lg "
                />    
            </div>
      </div>
  );
};

export default Poster;