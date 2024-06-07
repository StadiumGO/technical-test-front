"use client";

import { useState, useEffect } from "react";
import Movie from "@/components/Movie/Movie";
import Image from "next/image";

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
      <main className="flex flex-col lg:flex-row ">
        <div className="bg-yellow-200 flex items-center justify-center lg:w-[600px] lg:flex-col p-8">
          <Image src="/images/chip.svg" alt="" width={50} height={50} aria-hidden="true"/>
          <h1 className="uppercase font-bold text-2xl lg:text-4xl p-3">
            Movie night
          </h1>
        </div>
        <div className="bg-cinema bg-fixed">
          <ul className="lg:grid lg:grid-cols-2 lg:ml-20 mt-5">
            {data.map((movie, index) => (
              <li key={index} className="relative mb-4">
                <Movie {...movie} id={`movie-${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </body>
  );
};

export default Home;
