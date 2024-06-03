export default function Card({poster, title, year, rating, genre, director}) {
    return (
        <div>
            <img src={poster} alt="Movie Poster" />
            <h5>{title}</h5>
            <p>{year}</p>
            <p>{rating}</p>
            <p>{genre}</p>
            <p>Directed by :</p>
            <p>{director}</p>
        </div>
    );
}
