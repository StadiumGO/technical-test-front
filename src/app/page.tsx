"use client";

import { useState, useEffect } from "react";
import Movie from "./components/Movie";

const Home = () => {
  const [data, setData] = useState<any[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const getMovies = async () => {
    if (!apiUrl) {
      console.error("API URL is not defined");
      return;
    }

    try {
      const response = await fetch(apiUrl);
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
        <h1 className="place-self-center col-span-2 lg:col-span-1 flex items-stretch uppercase font-bold text-2xl lg:text-4xl">
          Movie night
        </h1>
        <ul className="bg-cinema bg-fixed lg:bg-cover col-start-1 col-span-2 lg:col-start-2 lg:col-span-2 lg:grid lg:grid-cols-2 pt-10">
          {data.map((movie, index) => (
            <li key={index} className="mb-4">
              <Movie {...movie} id={`movie-${index}`}
              />
            </li>
          ))}
        </ul>
      </main>
    </body>
  );
};

export default Home;
