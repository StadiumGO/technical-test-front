"use client";

import { useState, useEffect } from "react";
import Movie from "./components/Movie";

const Home = () => {
  const [data, setData] = useState<any[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/movies/");
      if (!response.ok) {
        throw new Error("No response");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <body>
      <main className="bg-yellow-200 grid grid-cols-2 lg:grid-cols-[350px_1fr] justify-center">
        <h1 className="place-self-center bg-fixed col-span-2 lg:col-span-1 flex items-stretch uppercase font-bold text-2xl lg:text-4xl">
          Movie night
        </h1>
        <ul className="bg-cinema bg-fixed lg:bg-cover col-start-1 col-span-2 lg:col-start-2 lg:col-span-2 lg:grid lg:grid-cols-2 pt-10">
          {data.map((movie) => (
            <li key={movie.title} className="mb-4">
              <Movie
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                rating={movie.rating}
                genres={movie.genre}
                director={movie.director}
              />
            </li>
          ))}
        </ul>
      </main>
    </body>
  );
};

export default Home;
