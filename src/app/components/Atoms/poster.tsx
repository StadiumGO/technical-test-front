
const Poster = ({ poster }) => {

  return (
    <div className="flex flex-col items-center ml-20 justify-center w-1/2 lg:w-1/3 lg:flex-none lg:self-start lg:object-cover lg:rounded-t content-center lg:left-0">
      <div>
                <img
                  src={poster}
                  alt=""
                  className="shadow-lg "
                />    
            </div>
      </div>
  );
};

export default Poster;