import Eye from '@/app/assets/Eye'
import { MovieType } from '@/app/type'
import { useState } from 'react'
import Label from '../atoms/label'
import Paragraphe from '../atoms/Paragraphe'
import Picture from '../atoms/Picture'
import Title from '../atoms/Title'
import MovieModale from './MovieModale'

type IProps = {
  movie: MovieType
  className?: string
  enableModale?: boolean
}

const Movie = ({ movie, className = '', enableModale = true }: IProps) => {
  const { title, rating, year, poster, genre, director, cast, plot } = movie
  const [isModale, setIsModale] = useState<boolean>(false)
  return (
    <>
      <div
        className={`${className} w-full rounded backdrop-blur-3xl flex flex-row gap-4 p-4 ${enableModale && 'hover:scale-105 transition'} relative`}
      >
        <Picture link={poster} />
        <div className="flex flex-col gap-2 justify-center w-2/3">
          <Title title={title} className="font-semibold" />
          <div className="flex flex-wrap items-center gap-2">
            <Label name={year} />
            <Label name={rating} />
            <Label name={genre} />
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <Paragraphe text={`Directed by: `} />
            <Paragraphe
              text={`${director?.length > 25 && enableModale ? director.slice(0, 25) + '...' : director}`}
              className="font-semibold"
            />
          </div>
          {!enableModale && <Paragraphe text={plot} />}
        </div>
        {enableModale && (
          <div
            className="w-12 bg-pri p-2 border border-2 border-sec rounded-full absolute -bottom-2 -right-2 hover:scale-105 transition cursor-pointer"
            onClick={() => setIsModale(!isModale)}
          >
            <Eye />
          </div>
        )}
      </div>
      {isModale && (
        <MovieModale movie={movie} onChange={() => setIsModale(!isModale)} />
      )}
    </>
  )
}

export default Movie
