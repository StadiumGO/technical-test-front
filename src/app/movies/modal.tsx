import React from 'react';

export default function Modal({ poster, title, year, rating, genre, director, cast, plot, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
                <button
                    className="absolute lg:-top-2 lg:-right-2 bg-awesome-yellow text-black p-2 rounded-full border-solid border-black border-2 top-2 right-2"
                    onClick={onClose}
                >
                    Close
                </button>
                <div className="flex flex-col items-center lg:flex-row">
                    <img src={poster} alt="Movie Poster" className="w-32 lg:w-64 mb-4 lg:mb-0 lg:mr-4" />
                    <div className="lg:text-left">
                        <h2 className="uppercase font-bold font-MonografTextBold text-2xl mb-2">{title}</h2>
                        <div className="flex gap-3 text-xs flex-wrap justify-center mb-2 lg:text-left lg:justify-start">
                            <p className="bg-awesome-yellow p-1 rounded">{year}</p>
                            <p className="bg-awesome-yellow p-1 rounded">{rating}</p>
                            <p className="bg-awesome-yellow p-1 rounded">{genre}</p>
                        </div>
                        <div className="lg:flex flex-row">
                            <p className="text-xs">Directed by:</p>
                            <p className="font-bold text-xs mb-2 lg:ml-1">{director}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">Cast:</p>
                            <p>{cast.join(', ')}</p>
                        </div>
                        <div>
                            <p className="font-bold">Plot:</p>
                            <p>{plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
