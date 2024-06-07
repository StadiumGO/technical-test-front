
const Poster = ({ poster }) => {

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center ml-10 justify-center w-[80%]">
=======
    <div className="flex flex-col items-center ml-20 justify-center w-1/2 lg:w-1/3 lg:flex-none lg:self-start lg:object-cover lg:rounded-t content-center lg:left-0">
>>>>>>> 9130e4f (first try of the desktop display)
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