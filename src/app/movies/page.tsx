import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

type Movie = {
    cast: string[],
    director: string,
    genre: string,
    plot: string,
    poster: string,
    rating: number,
    title: string,
    year: number,
}

const Movies: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);
    console.log(movies);

    useEffect(() => {
        (async() => {
            try{
                const response = await fetch("/api/movies");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: Movie[] = await response.json();
                data.forEach(movie => movie.title = movie.title.toUpperCase());
                setMovies(data);
            } catch (error: any) {
                setError(error.message);
                console.error("Fetch error: ", error);
            }
        })();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const movieCards = movies.map((movie: Movie, i: number) => {
        return <MovieCard key={i} {...movie} />
    });

    return(
        <>
            {movieCards}
        </>
    );
}

export default Movies;