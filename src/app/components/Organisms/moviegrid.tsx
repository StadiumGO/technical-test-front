"use client";

import { useEffect, useState } from "react";
import MovieCard from "../Molecules/moviecard";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/movies");
      const data = await res.json();
      setMovies(data);
    };

    fetchData();
  }, []);
  console.log(movies);

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-14">
        {movies.map((movie:any) => (
          <div className="flex flex-col items-center">
            <MovieCard key={movie.id} movie={movie} />
        </div>
        ))}
      </div>
    </div>
  );
}
