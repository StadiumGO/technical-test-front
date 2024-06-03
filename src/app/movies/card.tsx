export default function Card({ poster, title, year, rating, genre, director }) {
    return (
        <div className="flex flex-col items-center mt-3 p-5 gap-1 text-center ">
            <img src={poster} alt="Movie Poster" className="w-32" />
            <h5 className="uppercase font-bold  font-MonografTextBold text-2xl">{title}</h5>
            <div className="flex gap-3 text-xs flex-wrap justify-center mb-2">
                <p className="bg-awesome-yellow p-1 rounded">{year}</p>
                <p className="bg-awesome-yellow p-1 rounded">{rating}</p>
                <p className="bg-awesome-yellow p-1 rounded">{genre}</p>
            </div>
            <p className="text-xs">Directed by :</p>
            <p className="font-bold text-xs mb-2">{director}</p>
            <div className="bg-awesome-yellow rounded-full p-1 border-solid border-black border-2 absolute -bottom-3 -right-2 ">
                <img src="bouton-de-visibilite.png" alt="bouton de visibilite" className="w-6" />
            </div>
        </div>
    );
}
