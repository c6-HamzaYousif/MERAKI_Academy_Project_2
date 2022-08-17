const body = $("body")
const dropList = $(".drop-list")
dropList.html("<select><option>Comedy</option><option>Drama</option><option>Action</option><option>Romance</option><option>Horror</option></select>")

const logo = $(".logo")
logo.html('<h2><span class="first-half">Movie</span><span class="second-half">Guide</span></h2>')

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

// const recFeat = [{movie: "Day shift", url: "/dayShift.jpg"}, {movie: "The hating game", url: "/dayShift.jpg"}, {movie: "Carter", url: "/dayShift.jpg"}, {movie: "Thirteen lives", url: "/dayShift.jpg"}, {movie: "Morbius", url: "/dayShift.jpg"}, {movie: "Deep water", url: "/dayShift.jpg"}, {movie: "The man from Tornto", url: "/dayShift.jpg"},{movie: "The gray man", url: "/dayShift.jpg"}, {movie: "The lost city", url: "/dayShift.jpg"}, {movie: "Senior year", url: "/dayShift.jpg"} ,{movie: "Let's be cops", url: "/dayShift.jpg"},{movie: "The hangover", url: "/dayShift.jpg"},{movie: "I love you, man", url: "/dayShift.jpg"},{movie: "Due date", url: "/dayShift.jpg"},{movie: "Bad trip", url: "/dayShift.jpg"},{movie: "Persuasion", url: "/dayShift.jpg"},{movie: "The Unforgivable", url: "/dayShift.jpg"},{movie: "The Mauritanian", url: "/dayShift.jpg"},{movie: "Through My Window", url: "/dayShift.jpg"},{movie: "Little Women", url: "/dayShift.jpg"},{movie: "Interceptor", url: "/dayShift.jpg"},{movie: "The Tomorrow War", url: "/dayShift.jpg"},{movie: "The Lost City", url: "/dayShift.jpg"},{movie: "Wrath of Man", url: "/dayShift.jpg"},{movie: "The Contractor", url: "/dayShift.jpg"},{movie: "The Age of Adaline", url: "/dayShift.jpg"},{movie: "The Shape Of Water", url: "/dayShift.jpg"},{movie: "The Bodyguard", url: "/dayShift.jpg"},{movie: "Never Let Me Go", url: "/dayShift.jpg"},{movie: "Focus", url: "/dayShift.jpg"},{movie: "Scream", url: "/dayShift.jpg"},{movie: "No One Gets Out Alive", url: "/dayShift.jpg"},{movie: "Umma", url: "/dayShift.jpg"},{movie: "The Nun", url: "/dayShift.jpg"},{movie: "The Grudge", url: "/dayShift.jpg"}]
// const type = [{type: "Recently added"}, {type: "Popular now"}, {type: "Comedy"}, {type: "Drama"},{type: "Action"},{type: "Romance"},{type: "Horror"}]
// let j=0
// for(let i=0; i<7; i++){
    
//     const big = $(`<div class="big"><h1 class="genre">${type[i].type}</h1></div>`)
// body.append(big)

// const house = $('<div class="house"></div>')
// big.append(house)

// for(let i=j; i<j+5; i++){
//     let x = $(`<div class="movie"><div class="movie-image a${i}"></div><h2 class="movie-name ">${recFeat[i].movie}</h2></div>`)
//     house.append(x)
// }
// j+=5

// }


//HABID VOLUME 2.0

const recFeat = [{movie: "Day shift", url: "/dayShift.jpg"}, {movie: "The hating game", url: "/The-Hating-Game.jpg"}, {movie: "Carter", url: "/carter.jpg"}, {movie: "Thirteen lives", url: "/thirteen\ lives.jpg"}, {movie: "Morbius", url: "/Morbius_\(film\)_poster.jpg"}, {movie: "Deep water", url: "/dayShift.jpg"}, {movie: "The man from Tornto", url: "/dayShift.jpg"},{movie: "The gray man", url: "/dayShift.jpg"}, {movie: "The lost city", url: "/dayShift.jpg"}, {movie: "Senior year", url: "/dayShift.jpg"} ,{movie: "Let's be cops", url: "/dayShift.jpg"},{movie: "The hangover", url: "/dayShift.jpg"},{movie: "I love you, man", url: "/dayShift.jpg"},{movie: "Due date", url: "/dayShift.jpg"},{movie: "Bad trip", url: "/dayShift.jpg"},{movie: "Persuasion", url: "/dayShift.jpg"},{movie: "The Unforgivable", url: "/dayShift.jpg"},{movie: "The Mauritanian", url: "/dayShift.jpg"},{movie: "Through My Window", url: "/dayShift.jpg"},{movie: "Little Women", url: "/dayShift.jpg"},{movie: "Interceptor", url: "/dayShift.jpg"},{movie: "The Tomorrow War", url: "/dayShift.jpg"},{movie: "The Lost City", url: "/dayShift.jpg"},{movie: "Wrath of Man", url: "/dayShift.jpg"},{movie: "The Contractor", url: "/dayShift.jpg"},{movie: "The Age of Adaline", url: "/dayShift.jpg"},{movie: "The Shape Of Water", url: "/dayShift.jpg"},{movie: "The Bodyguard", url: "/dayShift.jpg"},{movie: "Never Let Me Go", url: "/dayShift.jpg"},{movie: "Focus", url: "/dayShift.jpg"},{movie: "Scream", url: "/dayShift.jpg"},{movie: "No One Gets Out Alive", url: "/dayShift.jpg"},{movie: "Umma", url: "/dayShift.jpg"},{movie: "The Nun", url: "/dayShift.jpg"},{movie: "The Grudge", url: "/dayShift.jpg"}]
const type = [{type: "Recently added"}, {type: "Popular now"}, {type: "Comedy"}, {type: "Drama"},{type: "Action"},{type: "Romance"},{type: "Horror"}]
let j=0
for(let i=0; i<7; i++){
    
    const big = $(`<div class="big"><h1 class="genre">${type[i].type}</h1></div>`)
body.append(big)

const house = $('<div class="house"></div>')
big.append(house)

for(let i=j; i<j+5; i++){
    let x = $(`<div class="movie"><div class="movie-image"></div><h2 class="movie-name ">${recFeat[i].movie}</h2></div>`)
    let y = $(".movie-image")
    console.log(recFeat[i].url);
    y.css("background", `url(./images${recFeat[i].url}) no-repeat center center/ contain`)
    house.append(x)
}
j+=5

}
