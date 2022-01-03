import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [background, setBackground] = useState();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        const data = json.data.movie;
        setMovie(data.title);
        setBackground(data.large_cover_image);
        console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>{movie}</h1>
            <img src={background}></img>
        </div>
    )
};

export default Detail;