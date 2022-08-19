const body = $("body")
const dropList = $(".drop-list")
dropList.html('<select><option value="none" selected disabled hidden>Pick a category</option><option value="Comedy">Comedy</option><option value="Drama">Drama</option><option value="Action">Action</option><option value="Romance">Romance</option><option value="Horror">Horror</option></select>')

const logo = $(".logo")
logo.html('<h2><span class="first-half">Movie</span><span class="second-half">Guide</span></h2>')

const search = $(".search")
search.html('<input type="text" placeholder="Search for a movie, actor, genre..etc"/>')

let watchListArray = []
let watchListArrayOfObjects = []

const watchList = $(".watch")
watchList.html("<h2>WatchList</h2>")
watchList.on("click",function(){

    // const jsonOb = JSON.stringify(watchListArray)
    // localStorage.setItem("movies", jsonOb)
    // const newww = localStorage.getItem("movies")
    // const watchListArrayOfObjects = JSON.parse(newww)
    console.log(watchListArrayOfObjects)
    body.html('<div class="watch-list"><h2>My watchList</h2></div>')
    let house = $('<div class="houseee"></div>')
    body.append(house)
    for(let j=0; j<watchListArrayOfObjects.length; j++){
        let test =  $(`<div class="wtclist"><h2 class="wtclist-text">${watchListArrayOfObjects[j].movie}</h2><img class="wtclist-img" src="./images${watchListArrayOfObjects[j].url}"/><button class="remove">Remove from wathclist</button></div>`)
        house.append(test)
        const removeButtons = $(".remove")
        removeButtons.on("click", function(){
            console.log(this)
            let x = $(this).parent()
            let y = $(this).siblings()
            // console.log(y.text())
            for(let i=0; i<watchListArrayOfObjects.length; i++){
                if(y.text() === watchListArrayOfObjects[i].movie){
                    watchListArrayOfObjects.splice(i,1)
                }
            }
            x.remove()
        })
    }
})

const signIn = $(".sign-in")
signIn.html("<h2>Sign In</h2>")
signIn.on("click", function(){
    body.html('<div class = "sign-in-page"></div>')
    const signInPage = $(".sign-in-page")
    for(let i=0; i<4; i++){
        let signField = $(`<div class="sign-in-input"></div>`)
        signInPage.append(signField)
        let fields
        if(i===0){
             fields = $('<label>First Name:<input type="text" placeholder="John, Jane..etc"/></label>')
        }else if(i===1){
             fields = $('<label>Last Name:<input type="text" placeholder="Doe, Smith..etc"/></label>')
        }else if(i===2){
            console.log(i)
             fields = $('<label>Email:<input type="email" placeholder="ex: JohnDoe@Gmail.com"/></label>')
        }else{
             fields = $('<label>Password:<input type="password" placeholder="enter the password"/></label>')
        }
        signField.append(fields)
    }
    const signInButton = $('<button class=sing-in-btn>Sign In</button>')
    signInPage.append(signInButton)
})

const fqa = $(".fqa")
fqa .html('<h2><span class="f">F</span><span class="a">A</span><span class="q">Q</span></h2>')


const movieArray = [{movie: "Day shift", url: "/dayShift.jpg", trailer: "", Genre: "Fantasy", Strarring: "Jamie Fox - Dave Franco", BoxOffice: "$100 million", Duration: "1h 54m", Rating: 57, YearReleased: 2022, story: "A hardworking dad out to provide for his daughter uses a boring pool-cleaning job as a front for his real gig: hunting and killing vampires."},
     {movie: "The hating game", url: "/The-Hating-Game.jpg", trailer: "https://www.youtube.com/watch?v=j3qBGOD4b4A", Genre: "Rom-Com", Strarring: "Lucy Hale - Austin Stowell", BoxOffice: "$294,625", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: "Resolving to achieve professional success without compromising her ethics, Lucy embarks on a ruthless game of one-upmanship against cold and efficient nemesis Joshua, a rivalry that is complicated by her growing attraction to him."},
     {movie: "Carter", url: "/carter.jpg", trailer: "", Genre: "Action ", Strarring: "Joo Won - Camilla Belle", BoxOffice: "$100 million", Duration: "1h 42m", Rating: 33, YearReleased: 2022, story: "A man wakes up missing his memories. Directed by a mysterious voice from a device in his ear, he sets off on a hostage rescue mission rife with danger."},
     {movie: "Thirteen lives", url: "/picthirteen.jpg", trailer: "", Genre: "Drama", Strarring: "Viggo Mortensen - Colin Farrell", BoxOffice: "$142 million", Duration: "2h 27m", Rating: 88, YearReleased: 2022, story: "A rescue mission is assembled in Thailand where a group of young boys and their soccer coach are trapped in a system of underground caves that are flooding."},
     {movie: "Morbius", url: "/morbius.jpg", trailer: "", Genre: "Action", Strarring: "Jared Leto - Matt Smith", BoxOffice: "$163.9 million", Duration: "1h 44m", Rating: 15, YearReleased: 2022, story: "Determined to cure the disease that has plagued him his entire life, Morbius conducts a drastic experiment, which bears unforeseen consequences."},
     {movie: "Deep water", url: "/deepwaterpic.jpg", trailer: "", Genre: "Drama", Strarring: "Ana de Armas - Ben Affleck", BoxOffice: "$248.9 million", Duration: "1h 55m", Rating: 36, YearReleased: 2022, story: "Vic and Melinda, a married couple, fall out of love with each other and the latter pursues extramarital affairs. However, when her lovers all disappear, the suspicion falls on Vic."},
     {movie: "The man from Tornto", url: "/theManFrompic.jpg", trailer: "", Genre: "Action", Strarring: "Kevin Hart - Woody Harrelson", BoxOffice: "$375 million", Duration: "1h 35m", Rating: 24, YearReleased: 2022, story: "A case of mistaken identity forces a bumbling entrepreneur to team up with a notorious assassin in hopes of staying alive."},
     {movie: "The gray man", url: "/theGrayMan.jpg", trailer: "", Genre: "Action", Strarring: "Ryan Gosling - Ana de Armas", BoxOffice: "$205 million", Duration: "2h 2m", Rating: 46, YearReleased: 2022, story: "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."},
     {movie: "The lost city", url: "/theLostCity.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "$165 million", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Senior year", url: "/seniorYear.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "$89 million", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Let's be cops", url: "/letsBeCops.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "$189 million", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The hangover", url: "/theHangover.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "$140 million", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "I love you, man", url: "/iLoveYouMan.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "$255 million", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Due date", url: "/dueDate.jpg ", trailer: "", Genre: "", Strarring: "", BoxOffice: "$180 million", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Bad trip", url: "/badTrip.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Persuasion", url: "/persuasionMovie.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Unforgivable", url: "/theUnforgiv.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Mauritanian", url: "/theMaurit.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Through My Window", url: "/throughMyWi.png", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Little Women", url: "/littleWomen.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Interceptor", url: "/Interceptor.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Tomorrow War", url: "/theTomorow.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Lost City", url: "/theLostCity.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Wrath of Man", url: "/wrathOfMan.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Contractor", url: "/theContract.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Age of Adaline", url: "/theAgeOf.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Shape Of Water", url: "/theShpe.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Bodyguard", url: "/theBodyguard.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Never Let Me Go", url: "/neverLetMe.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Focus", url: "/Focus.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Scream", url: "/Scream.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "No One Gets Out Alive", url: "/noOne.png", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "Umma", url: "/Umma.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Nun", url: "/theNun.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""},
     {movie: "The Grudge", url: "/theGrudge.jpg", trailer: "", Genre: "", Strarring: "", BoxOffice: "", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: ""}]

const type = [{type: "Recently added", id: "Recently-added"}, {type: "Popular now", id: "Popular-now"}, {type: "Comedy", id: "Comedy"}, {type: "Drama", id: "Drama"},{type: "Action", id: "Action"},{type: "Romance", id: "Romance"},{type: "Horror", id: "Horror"}]
let j=0
for(let i=0; i<7; i++){
    
    const big = $(`<div class="big"><h1 class="genre" id = ${type[i].id}>${type[i].type}</h1></div>`)
body.append(big)

const house = $('<div class="house"></div>')
big.append(house)

// const addToWatchList = function(){
//     console.log(this)
// }


for(let i=j; i<j+5; i++){

    let x = $(`<div class="movie"></div>`)
    let y = $(`<div class="movie-image"></div>`)
    y.css("background", `url(./images${movieArray[i].url}) no-repeat center center/ contain`)
    let z = $(`<h2 class="movie-name ">${movieArray[i].movie}</h2>`)
    let butt = $(`<button class="watchlist-btn">Add to watch list</button>`)
    house.append(x)
    x.append(y)
    x.append(z)
    x.append(butt)

    butt.one("click", function(){
        let newObj = {}
        let sibling = $(this).siblings()
        $(this).css("background-color", "rgb(30, 173, 173)")
        
        for(let i=0; i<movieArray.length; i++){
            
            if(sibling.text() === movieArray[i].movie){
                newObj.movie = movieArray[i].movie
                newObj.url = movieArray[i].url
                watchListArray.push(newObj)
                const jsonOb = JSON.stringify(watchListArray)
                localStorage.setItem("movies", jsonOb)
                const newww = localStorage.getItem("movies")
                watchListArrayOfObjects = JSON.parse(newww)
                
            }
        }

    })
    
}
j+=5

}

const movieImgDiv = $(".movie-image")
movieImgDiv.on("click", function(){
    let blabla = $(this).parent().text()
    for(let i=0; i<movieArray.length; i++){
        if(blabla.includes(movieArray[i].movie)){
            console.log(i);
            body.html('<div class = "specific"></div>')
            // body.css("background-color", "white")

            //HABID starts here:::
            const specific = $(".specific")
            const specificBabyOne = $(`<div class="specific-one"><h2 class="specific-text">${movieArray[i].movie}</h2><img class="imagess" src="./images${movieArray[i].url}"/></div>`)
            const specificBabyTwo = $(`<div class="specific-two"></div>`)
            const x = $('<div class="rpg"></div>')
            specificBabyTwo.append(x)

            if(movieArray[i].Rating<50){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=50 && movieArray[i].Rating<60){
          const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=60 && movieArray[i].Rating<70){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)
            }else if(movieArray[i].Rating>=70 && movieArray[i].Rating<80){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=80 && movieArray[i].Rating<90){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg></div><p><div class="unknow-two"><a href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=90 && movieArray[i].Rating<=100){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></div><div class="unknow-two"><a href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }
            specific.append(specificBabyOne)
            specific.append(specificBabyTwo)
            const babyTwoSecond = $('<div class="baby-two-second"></div>')
            const unorderedList = $('<ul class="unordered"></ul>')
            const genre = $(`<li>Genre:   ${movieArray[i].Genre}</li>`)
            const stars = $(`<li>Strarring:   ${movieArray[i].Strarring}</li>`)
            const Released = $(`<li>Year released:   ${movieArray[i].YearReleased}</li>`)
            const durationn = $(`<li>Duration:   ${movieArray[i].Duration}</li>`)
            const boxOffice = $(`<li>Box office:   ${movieArray[i].BoxOffice}</li>`)
            const story = $(`<li>About:<span class="potato"> ${movieArray[i].story}</span></li>`)
            specificBabyTwo.append(babyTwoSecond)
            babyTwoSecond.append(unorderedList)
            unorderedList.append(genre)
            unorderedList.append(stars)
            unorderedList.append(Released)
            unorderedList.append(durationn)
            unorderedList.append(boxOffice)
            unorderedList.append(story)
            
        }
    }
    
})

const footer = $('<div class="foooter"></div>')
body.append(footer)

const socialMedia = $('<div class="social-media"></div>')
const suggestions = $('<div class="suggestions"></div>')

footer.append(socialMedia)
footer.append(suggestions)



socialMedia.html('<div class="foot-first"><h2 class="foot-text">Follow us on social media:</h2><a target="_blank" href="https://www.facebook.com/movieguide"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></a><a href="https://twitter.com/movieguide" target="_blank"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg></a><a href="https://www.instagram.com/movieguide/?hl=en" target="_blank"><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg></a><a href="https://www.youtube.com/movieguide" target="_blank"><svg class="youtube" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg></a></div>')
suggestions.html('<div class="foot-first"><h2 class="foot-text">Comments&Suggestions:</h2><textarea class="text-area" rows="3" cols="50" placeholder="I would love if the website was..."></textarea></label></div>')