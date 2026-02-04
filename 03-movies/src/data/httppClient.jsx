const API = 'https://api.themoviedb.org/3';

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2Q3NmExNTdhMmQ0MWFhYTczMjM5NzIwMTc3NTExZSIsIm5iZiI6MTczNDcwMDIxMS4zNjIsInN1YiI6IjY3NjU2Y2IzODdiOTJhNDNiZTVkZWZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1g1l7Zvdyifn1Zh543r2ra4R_KwWtSqSkTm6ld621So',
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then((result) => result.json());
}

// export const getMovies = async (query) => {
//   const url = `${API_URL}3/discover/movie?api_key=b8d8b9c0a0c6f0b4b0d0e0f0&language=es-ES&query=${query}`
//   const response = await fetch(url)
//   return response.json()
// }

// export const getMovie = async (id) => {
//   const url = `${API_URL}3/movie/${id}?api_key=b8d8b9c0a0c6f0b4b0d0e0f0&language=es-ES`
//   const response = await fetch(url)
//   return response.json()
// }