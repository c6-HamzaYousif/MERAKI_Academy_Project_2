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
fqa .html("<h2><span>F</span><span>A</span><span>Q</span></h2>")

// const big = $('<div class="big"><h1 class="genre">Recently added</h1></div>')
// body.append(big)

// const house = $('<div class="house"></div>')
// big.append(house)

// for(let i=0; i<5; i++){
//     let x = $(`<div class="movie"><div class="movie-image a${i}"></div><h2 class="movie-name ">${recFeat[i].movie}</h2></div>`)
//     house.append(x)
// }

//Let the HABID begin :)

const recFeat = [{movie: "Day shift"}, {movie: "The hating game"}, {movie: "Carter"}, {movie: "Thirteen lives"}, {movie: "Morbius"}, {movie: "Deep water"}, {movie: "The man from Tornto"},{movie: "The gray man"}, {movie: "The lost city"}, {movie: "Recent year"} ,{movie: "Let's be cops"},{movie: "The hangover"},{movie: "I love you, man"},{movie: "Due date"},{movie: "Bad trip"},{name: "Persuasion"},{movie: "The Unforgivable"},{movie: "The Mauritanian"},{movie: "Through My Window"},{movie: "Little Women"},{movie: "Interceptor"},{movie: "The Tomorrow War"},{movie: "The Lost City"},{movie: "Wrath of Man"},{movie: "The Contractor"},{movie: "The Age of Adaline"},{movie: "The Shape Of Water"},{movie: "The Bodyguard"},{movie: "Never Let Me Go"},{movie: "Focus"},{movie: "Scream"},{movie: "No One Gets Out Alive"},{movie: "Umma"},{movie: "The Nun"},{movie: "The Grudge"}]
const type = [{type: "Recently added"}, {type: "Popular now"}, {type: "Comedy"}, {type: "Drama"},{type: "Action"},{type: "Romance"},{type: "Horror"}]
let j=0
for(let i=0; i<7; i++){
    
    const big = $(`<div class="big"><h1 class="genre">${type[i].type}</h1></div>`)
body.append(big)

const house = $('<div class="house"></div>')
big.append(house)

// const recFeat = [{movie: "Day shift"}, {movie: "The hating game"}, {movie: "Carter"}, {movie: "Thirteen lives"}, {movie: "Morbius"}, {movie: "Deep water"}, {movie: "The man from Tornto"},{movie: "The gray man"}, {movie: "The lost city"}, {movie: "Recent year"}]
for(let i=j; i<j+5; i++){
    let x = $(`<div class="movie"><div class="movie-image a${i}"></div><h2 class="movie-name ">${recFeat[i].movie}</h2></div>`)
    house.append(x)
}
j+=5

}

