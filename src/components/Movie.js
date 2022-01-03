import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, year, genres, summary, id }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link> ({year})</h2>
            <ul>
            {genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;