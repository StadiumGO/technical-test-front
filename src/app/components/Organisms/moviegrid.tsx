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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="flex flex-col items-center justify-center py-14">
=======
      <div className="flex flex-col items-center justify-center py-14 no-scrollbar lg:grid lg:grid-cols-2 lg:gap-10 lg:py-0 lg:flex-none">
>>>>>>> 9130e4f (first try of the desktop display)
=======
      <div className="flex flex-col items-center justify-center py-14 no-scrollbar">
>>>>>>> f39ddbc (mobile-first version)
        {movies.map((movie:any) => (
          <div className="flex flex-col items-center lg:flex-none lg:self-start">
            <MovieCard key={movie.id} movie={movie} />
        </div>
        ))}
      </div>
    </div>
  );
}
