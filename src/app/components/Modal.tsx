import React from 'react';
import { useState, useEffect } from 'react';

type ModalProps = {
    closeModal: () => void;
    cast: string[];
    director: string;
    plot: string;
    title: string;
};

const opacityTransitionDuration: number = 700;

const Modal: React.FC<ModalProps> = ({ closeModal, cast, director, plot, title }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            closeModal();
        }, opacityTransitionDuration);
    };

    return (
        <div className={`fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center transition-opacity duration-${opacityTransitionDuration} ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="w-[90%] md:w-[30%] md:min-w-[460] flex flex-col gap-5 bg-white p-8 rounded-md shadow-md">
                <h2 className="self-center text-3xl md:text-2xl font-bold">{title}</h2>
                <p className="max-md: text-xl">{plot}</p>
                <p className="max-md: text-xl">Featuring : <span className="font-bold">{cast.join(", ")}</span></p>
                <p className="max-md: text-xl">Directed by : <span className="font-bold">{director}</span></p>
                <button 
                    onClick={handleClose}
                    className="w-[60%] self-center max-md:text-lg px-6 py-3 md:px-4 md:py-2 text-white mt-5 rounded-xl md:rounded-md bg-gradient-to-tl from-rose-500 to-rose-800 shadow shadow-secondary hover:bg-gradient-to-br"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
