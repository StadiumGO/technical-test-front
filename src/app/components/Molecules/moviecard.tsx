
import Poster from "../Atoms/poster";
import Button from "../Atoms/eyebutton";
import MovieData from "../Atoms/movieData";

const MovieCard = ({movie}) => {

  return (
<<<<<<< HEAD
    <div className="bg-gray-200 p-6 rounded-md flex flex-col items-center gap-y-10 mx-auto my-10 bg-opacity-75">
=======
    <div className="bg-gray-200 p-6 rounded-md flex flex-col items-center gap-y-10 mx-auto my-10 bg-opacity-90 lg:flex-row lg:items-start lg:justify-between lg:p-12 ">
>>>>>>> 9130e4f (first try of the desktop display)
      <div className="content-center justify-center flex items-center">
       
          <div key={movie.id}>
                  <Poster poster={movie.poster} />
                  <MovieData title={movie.title} rating={movie.rating} year={movie.year} genre={movie.genre} director={movie.director} cast={movie.cast} plot={movie.plot} />
                  <Button />
                </div>
      </div>
    </div>
  );
};

export default MovieCard;