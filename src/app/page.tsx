"use client";

import { useState, useEffect } from "react";
import Movie from "@/components/Movie/Movie";

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
    // <body>
    //   <main className="bg-yellow-200 grid grid-cols-2 lg:grid-cols-[350px_1fr] justify-center">
    //     <h1 className="place-self-center col-span-2 lg:col-span-1 flex items-stretch uppercase font-bold text-2xl lg:text-4xl">
    //       Movie night
    //     </h1>
    //     <ul className="bg-cinema bg-fixed lg:bg-cover col-start-1 col-span-2 lg:col-start-2 lg:col-span-2 lg:grid lg:grid-cols-2 pt-10">
    //       {data.map((movie, index) => (
    //         <li key={index} className="mb-4 relative">
    //           <Movie {...movie} id={`movie-${index}`}
    //           />
    //         </li>
    //       ))}
    //     </ul>
    //   </main>
    // </body>

    //   <body>
    //   <main className="flex flex-col lg:flex-row">
    //     <h1 className="bg-yellow-200 w-full h-20 lg:w-fit lg:h-screen fixed content-center text-center uppercase font-bold text-2xl lg:text-4xl lg:p-10">
    //       Movie night
    //     </h1>
    //     <ul className="bg-cinema bg-fixed lg:bg-cover gap-4">
    //       {data.map((movie, index) => (
    //         <li key={index} className="relative mb-4">
    //           <Movie {...movie} id={`movie-${index}`}
    //           />
    //         </li>
    //       ))}
    //     </ul>
    //   </main>
    // </body>

    <body>
      <main className="flex flex-col lg:flex-row ">
        <div className="bg-yellow-200 flex items-center justify-center lg:w-[600px]">
          <h1 className="uppercase font-bold text-2xl lg:text-4xl p-8">
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
