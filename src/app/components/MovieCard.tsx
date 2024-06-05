import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

type MovieCardProps = {
  cast: string[];
  director: string;
  genre: string;
  plot: string;
  poster: string;
  rating: number;
  title: string;
  year: number;
};

const MovieCard: React.FC<MovieCardProps> = ({
  cast,
  director,
  genre,
  plot,
  poster,
  rating,
  title,
  year,
}) => {

  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <div className="relative flex max-md:flex-col max-md:justify-center items-center gap-5 md:w-[43%] md:min-w-[400px] md:h-64 p-14 md:p-6 bg-white/85 rounded-md">
        <div className=" flex items-center justify-center w-3/5 md:w-1/3 md:h-full overflow-hidden">
            <Image src={poster} alt={`poster of the movie ${title}`} width="500" height="500" className="w-full h-auto md:w-full md:h-auto object-contain" />
        </div>
        <div className="md:w-2/3 flex flex-col gap-4 md:gap-3 items-center md:items-start justify-center">
          <p className="font-space-grotesk font-bold text-4xl md:text-3xl text-secondary max-md:text-center">{title}</p>
          <div className="flex items-center justify-center gap-7 md:gap-5 text-xl md:text-base">
            <p className="bg-primary p-1 rounded-md">{year}</p>
            <p className="bg-primary p-1 rounded-md">{rating}</p>
            <p className="bg-primary p-1 rounded-md">{genre}</p>
          </div>
          <p className="flex max-md:flex-col items-center justify-center gap-2 text-xl md:text-base overflow-hidden">
            <span className="max-md:text-center whitespace-nowrap">Directed by :</span>
            <span className="font-bold max-md:text-center overflow-hidden text-ellipsis">{director}</span>
          </p>
        </div>
        <button 
          className="absolute -bottom-6 -right-6 md:-bottom-5 md:-right-5 p-2 flex items-center justify-center border-solid border-4 md:border-[3px] border-zinc-900 rounded-full bg-primary hover:bg-amber-300"
          onClick={openModal}
        >
          <Image 
            src={"/eye-icon.svg"} 
            alt="" 
            width="100" 
            height="100" 
            className="w-10 md:w-8 h-auto transition-transform duration-500 hover:rotate-180" 
          />
        </button>
        {isModalOpen && <Modal closeModal={closeModal} cast={cast} director={director} plot={plot} title={title} />}
    </div>
  );
}

export default MovieCard;