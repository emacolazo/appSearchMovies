const apiKey = '61fddf1fee5bf95535ad20b51b7c2a63';
const urlBase = 'https://api.themoviedb.org/3/search/movie'
const urlImg = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

document.getElementById('searchButton').addEventListener('click', searchMovies)

function searchMovies() {
    resultContainer.innerHTML = '<h4>CARGANDO...</h4>'

    let searchInput = document.getElementById('searchInput').value
    
    fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results))

    
}

function displayMovies(movies) {
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML = ''

    if (movies.length === 0) {
        return resultContainer.innerHTML = '<h3>No se encontraron resultados</h3>'
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add("movie")

        let title = document.createElement('h2')
        title.textContent = "Titulo: " + movie.title

        let releaseDate = document.createElement('h5')
        releaseDate.textContent = "Fecha de lanzamiento: " + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = "Resumen: " + movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)

    });



}