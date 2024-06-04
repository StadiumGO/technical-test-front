import { MoviesType } from '@/app/type'
import Movie from '../molecules/Movie'

type IProps = {
  movies: MoviesType | null
  className?: string
}

const Movies = ({ movies, className = '' }: IProps) => {
  return (
    <>
      <div className={`${className} px-4 md:px-16 py-4`}>
        <ul className="flex flex-wrap w-full gap-y-8 justify-between">
          {movies?.map((movie, index) => (
            <li key={index} className="w-full md:w-half">
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Movies
