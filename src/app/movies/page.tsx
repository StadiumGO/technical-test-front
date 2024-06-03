"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";

export default function MoviePage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/movies");
            const result = await response.json();
            console.log(result);
            setData(result);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <header className="fixed bg-awesome-yellow w-full justify-center text-3xl font-bold font-MonografTextBold z-20 flex text-center items-center p-3 lg:w-1/4 lg:h-full lg:flex-col">
                <img src="film-svgrepo-com.svg" alt="film icon" className="w-8 mr-3 lg:w-16"/>
                MOVIE NIGHT</header>
            <div className="grid grid-cols-1 gap-4 justify-center items-center pt-20 auto-rows-auto lg:grid-cols-2 lg:pt-5 lg:ml-[25%]">
                {data.length > 0
                    ? data.map((movie, index) => (
                          <div key={index}  className="bg-beautiful-grey backdrop-blur-sm justify-center items-center w-4/5 rounded mx-auto h-full">
                              {" "}
                              <Card poster={movie.poster} title={movie.title} year={movie.year} rating={movie.rating} genre={movie.genre} director={movie.director} />
                          </div>
                      ))
                    : "No data available"}
            </div>
        </div>
    );
}
