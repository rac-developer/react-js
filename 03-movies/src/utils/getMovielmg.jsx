import placeholder from '../img/placeholder.png';

export function getMovieImg(path, width) {
    return path? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder
}

// const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;