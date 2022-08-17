const body = $("body")
const dropList = $(".drop-list")
dropList.html("<select><option>Comedy</option><option>Drama</option><option>Action</option><option>Romance</option><option>Horror</option></select>")

const logo = $(".logo")
logo.html("<h2>Ego<span>Best</span></h2>")

const search = $(".search")
search.html('<input type="text" placeholder="Search for a movie, actor, genre..etc"/>')

const watchList = $(".watch")
watchList.html("<h2>WatchList</h2>")

const signIn = $(".sign-in")
signIn.html("<h2>Sign In</h2>")

const fqa = $(".fqa")
fqa .html("<h2><span>F</span><span>Q</span><span>A</span></h2>")

const big = $('<div class="big"><h1>Recently added</h1></div>')
body.append(big)

const house = $('<div class="house"></div>')
big.append(house)

for(let i=0; i<5; i++){
    let x = $(`<div class="movie"><div class="movie-image a${i}"></div><h4 class="movie-name"></h4></div>`)
    house.append(x)
}

const recFeat = [{movie: "karkar"}, {movie: "katkoot"}, {movie: "boo7a"}, {movie: "lembi"}, {movie: "8 gega"}]

const movieName = $(".movie-name")

for(let i=0; i<recFeat.length;i++){
    movieName[i].text(`${recFeat[i].movie}`)
}

const test = $('<h2 class="test"></h2>')