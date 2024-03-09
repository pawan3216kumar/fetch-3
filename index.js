
let container = document.getElementById("container")
let input = document.getElementById("input")
let btn = document.getElementById("button")

function getData(movieName) {

  fetch(`http://www.omdbapi.com/?apikey=781b06c2&type=%22movie%22&s=${movieName}`)
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      displayData(res.Search)
    })
   
}

function displayData(moviesList) {
  container.innerHTML = ""

  if (!moviesList || moviesList.length === 0) {
    let notFoundDiv = document.createElement("div")
    notFoundDiv.textContent = "No Results Found"
    container.appendChild(notFoundDiv)
  } else {
    moviesList.map((movie) => {
     let div = document.createElement("div")


     let Poster = document.createElement("img")
      Poster.src = movie.Poster

      let Title = document.createElement("div")
      Title.innerText = movie.Title

    
      let year = document.createElement("p")
      year.textContent = movie.Year

      div.append(Poster ,Title, year)
        
      container.append(div)
    })
  }
}

btn.addEventListener("click", function (e) {
  let value = input.value
  getData(value)
})