import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='13d76a157a2d41aaa73239720177511e'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=13d76a157a2d41aaa73239720177511e';

//https://api.themoviedb.org/3/trending/all/day?api_key=13d76a157a2d41aaa73239720177511e
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id: string)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}