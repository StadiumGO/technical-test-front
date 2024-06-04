import { MovieType } from '@/app/type'
import Modale from '../atoms/Modale'
import Movie from './Movie'

type IProps = {
  movie: MovieType
  onChange: () => void
}

const MovieModale = ({ movie, onChange }: IProps) => {
  return (
    <>
      <Modale
        children={
          <>
            <Movie movie={movie} enableModale={false} />
          </>
        }
        onChange={onChange}
      />
    </>
  )
}

export default MovieModale
