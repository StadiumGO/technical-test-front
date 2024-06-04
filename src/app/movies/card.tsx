import React from 'react';

export default function Card({ poster, title, year, rating, genre, director, cast, plot, onOpenModal }) {
    return (
        <div className="rounded bg-beautiful-grey backdrop-blur-sm relative flex flex-col items-center mt-3 p-5 gap-1 text-center lg:flex-row lg:ml-2 lg:w-[95%] lg:pr-3 lg:h-full">
            <img src={poster} alt="Movie Poster" className="w-32 mb-1" />
            <div className="lg:text-left lg:ml-2">
                <h5 className="uppercase font-bold font-MonografTextBold text-2xl mb-1">{title}</h5>
                <div className="flex gap-3 text-xs flex-wrap justify-center mb-2 lg:text-left lg:justify-start">
                    <p className="bg-awesome-yellow p-1 rounded">{year}</p>
                    <p className="bg-awesome-yellow p-1 rounded">{rating}</p>
                    <p className="bg-awesome-yellow p-1 rounded">{genre}</p>
                </div>
                <div className="lg:flex flex-row">
                    <p className="text-xs">Directed by:</p>
                    <p className="font-bold text-xs mb-2 lg:ml-1">{director}</p>
                </div>
            </div>

            <button
                className="bg-awesome-yellow rounded-full p-1 border-solid border-black border-2 absolute -bottom-3 -right-2"
                onClick={onOpenModal}
            >
                <img src="bouton-de-visibilite.png" alt="bouton de visibilite" className="w-6" />
            </button>
        </div>
    );
}
