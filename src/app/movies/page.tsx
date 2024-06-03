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

    //mobile : grid col1
    // desktop : grid col2
    // composant card doit passer en props toutes les infos
    
    return (
        <div>
            {data.length > 0 ? 
            data.map((movie, index) => (<div key={index}> <Card 
                poster = {movie.poster}
                title={movie.title} 
                year={movie.year} 
                rating={movie.rating} 
                genre={movie.genre} 
                director={movie.director} /></div>)) 
            : "No data available"}
        </div>
    );
}
