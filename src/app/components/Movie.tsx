import clsx from "clsx";
import Image from "next/image";

const Movie = ({
  className,
  title,
  poster,
  year,
  rating,
  genre,
  director,
  ...rest
}: {
  className?: string;
  title: string;
  poster: string;
  year: number;
  rating: number;
  genre: string;
  director: string;
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        className,
        "rounded bg-white/90 flex flex-col lg:flex-row items-center p-4 gap-3 mx-10"
      )}
    >
      <Image src={poster} alt="" width={120} height={100} className="lg:mr-4" />
      <div className="flex flex-col lg:items-start">
        <h2 className="uppercase font-bold text-2xl text-center lg:text-left">
          {title}
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-3 text-xs mt-2">
          <span className="rounded bg-yellow-200 p-1">{year}</span>
          <span className="rounded bg-yellow-200 p-1">{rating}</span>
          <span className="rounded bg-yellow-200 p-1 ">{genre}</span>
        </div>
        <div className="text-center lg:text-left mt-2 lg:flex">
          <div className="text-sm lg:text-xs">Directed by :</div>
          <div className="font-bold text-sm lg:text-xs lg:ml-1 line-clamp-1">
            {director}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
