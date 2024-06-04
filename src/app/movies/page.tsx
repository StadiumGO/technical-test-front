'use client'
import { useEffect, useState } from 'react'
import { MoviesType } from '../type'
import Banner from '../UI/organisms/Banner'
import Movies from '../UI/organisms/Movies'

const MoviesPage = () => {
  const [movies, setMovies] = useState<MoviesType | null>(null)

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/movies`)
      const data = await response.json()
      setMovies(data)
    } catch (error) {
      console.error('Erreur lors de la récupération des films:', error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <div
        className="flex flex-col md:flex-row bg-no-repeat bg-cover bg-center max-h-screen"
        style={{ backgroundImage: `url(/movieTheatre.jpg)` }}
      >
        <Banner className="w-full md:w-1/4 py-4" />
        <Movies
          movies={movies}
          className="w-full md:w-3/4 overflow-y-scroll no-scrollbar"
        />
      </div>
    </>
  )
}

export default MoviesPage
