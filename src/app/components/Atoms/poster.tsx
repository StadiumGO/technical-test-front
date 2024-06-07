
const Poster = ({ poster }) => {

  return (
    <div className="flex flex-col items-center ml-20 justify-center w-1/2">
      <div>
                <img
                  src={poster}
                  alt=""
                  className="shadow-lg "
                  className="shadow-lg "
                />    
            </div>
      </div>
  );
};

export default Poster;