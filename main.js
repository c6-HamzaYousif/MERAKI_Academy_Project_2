const movieArray = [{movie: "Day shift", url: "/dayShift.jpg", trailer: "https://www.youtube.com/watch?v=GN_IwBptKi4", Genre: "Fantasy", Strarring: "Jamie Fox - Dave Franco", BoxOffice: "$100 million", Duration: "1h 54m", Rating: 57, YearReleased: 2022, story: "A hardworking dad out to provide for his daughter uses a boring pool-cleaning job as a front for his real gig: hunting and killing vampires."},
     {movie: "The hating game", url: "/The-Hating-Game.jpg", trailer: "https://www.youtube.com/watch?v=j3qBGOD4b4A", Genre: "Rom-Com", Strarring: "Lucy Hale - Austin Stowell", BoxOffice: "$32 million", Duration: "1h 42m", Rating: 67, YearReleased: 2021, story: "Resolving to achieve professional success without compromising her ethics, Lucy embarks on a ruthless game of one-upmanship against cold and efficient nemesis Joshua, a rivalry that is complicated by her growing attraction to him."},
     {movie: "Carter", url: "/carter.jpg", trailer: "https://www.youtube.com/watch?v=ulPHag30btQ", Genre: "Action ", Strarring: "Joo Won - Camilla Belle", BoxOffice: "$100 million", Duration: "1h 42m", Rating: 33, YearReleased: 2022, story: "A man wakes up missing his memories. Directed by a mysterious voice from a device in his ear, he sets off on a hostage rescue mission rife with danger."},
     {movie: "Thirteen lives", url: "/picthirteen.jpg", trailer: "https://www.youtube.com/watch?v=R068Si4eb3Y", Genre: "Drama", Strarring: "Viggo Mortensen - Colin Farrell", BoxOffice: "$142 million", Duration: "2h 27m", Rating: 88, YearReleased: 2022, story: "A rescue mission is assembled in Thailand where a group of young boys and their soccer coach are trapped in a system of underground caves that are flooding."},
     {movie: "Morbius", url: "/morbius.jpg", trailer: "https://www.youtube.com/watch?v=oZ6iiRrz1SY", Genre: "Action", Strarring: "Jared Leto - Matt Smith", BoxOffice: "$163.9 million", Duration: "1h 44m", Rating: 15, YearReleased: 2022, story: "Determined to cure the disease that has plagued him his entire life, Morbius conducts a drastic experiment, which bears unforeseen consequences."},
     {movie: "Deep water", url: "/deepwaterpic.jpg", trailer: "https://www.youtube.com/watch?v=h0zqe_As_qo", Genre: "Drama", Strarring: "Ana de Armas - Ben Affleck", BoxOffice: "$248.9 million", Duration: "1h 55m", Rating: 36, YearReleased: 2022, story: "Vic and Melinda, a married couple, fall out of love with each other and the latter pursues extramarital affairs. However, when her lovers all disappear, the suspicion falls on Vic."},
     {movie: "The man from Tornto", url: "/theManFrompic.jpg", trailer: "https://www.youtube.com/watch?v=urqy8DrcGBs", Genre: "Action", Strarring: "Kevin Hart - Woody Harrelson", BoxOffice: "$375 million", Duration: "1h 35m", Rating: 24, YearReleased: 2022, story: "A case of mistaken identity forces a bumbling entrepreneur to team up with a notorious assassin in hopes of staying alive."},
     {movie: "The gray man", url: "/theGrayMan.jpg", trailer: "https://www.youtube.com/watch?v=BmllggGO4pM", Genre: "Action", Strarring: "Ryan Gosling - Ana de Armas", BoxOffice: "$205 million", Duration: "2h 2m", Rating: 46, YearReleased: 2022, story: "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague."},
     {movie: "The lost city", url: "/theLostCity.jpg", trailer: "https://www.youtube.com/watch?v=nfKO9rYDmE8", Genre: "Romance", Strarring: "Sandra Bullock - Channing Tatum", BoxOffice: "$165 million", Duration: "1h 52m", Rating: 79, YearReleased: 2022, story: "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city's lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her."},
     {movie: "Senior year", url: "/seniorYear.jpg", trailer: "https://www.youtube.com/watch?v=HCtDkpe89aY", Genre: "Comedy", Strarring: "Rebel Wilson - Angourie Rice", BoxOffice: "$89 million", Duration: "1h 32m", Rating: 33, YearReleased: 2022, story: "A high-school cheerleader falls into a coma before her prom; twenty years later, she awakens and wants to return to high school to reclaim her status and become prom queen."},
     {movie: "Let's be cops", url: "/letsBeCops.jpg", trailer: "https://www.youtube.com/watch?v=q6q73NTqH-o", Genre: "Comedy", Strarring: "Jake Johnson - Nina Dobrev", BoxOffice: "$189 million", Duration: "1h 51m", Rating: 23, YearReleased: 2014, story: "Two best friends, Ryan and Justin, attend their college reunion dressed up as cops. However, trouble ensues when they are presumed to be actual police officers and are made to fight gangsters."},
     {movie: "The hangover", url: "/theHangover.jpg", trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M", Genre: "Comedy", Strarring: "Bradley Cooper - Zack Galafanakis", BoxOffice: "$140 million", Duration: "1h 40m", Rating: 79, YearReleased: 2009, story: "Doug and his three best men go to Las Vegas to celebrate his bachelor party. However, the three best men wake up the next day with a hangover and realise that Doug is missing."},
     {movie: "I love you, man", url: "/iLoveYouMan.jpg", trailer: "https://www.youtube.com/watch?v=TJU061IOMMU", Genre: "Comedy", Strarring: "Paul Rudd - Jason Segal", BoxOffice: "$255 million", Duration: "1h 42m", Rating: 83, YearReleased: 2009, story: "Peter sets out to find out the perfect best man for his wedding. Things, however, take a drastic turn when his fiancee gets upset about his and his newly found best man's bond."},
     {movie: "Due date", url: "/dueDate.jpg ", trailer: "https://www.youtube.com/watch?v=1p3NnJ_oiE0", Genre: "Comedy", Strarring: "Zack Galafanakis - Robert Downey Jr", BoxOffice: "$180 million", Duration: "1h 52m", Rating: 55, YearReleased: 2010, story: "Peter Highman must reach Los Angeles to make it in time for his child's birth. However, he is forced to travel with Ethan, an aspiring actor, who frequently lands him in trouble."},
     {movie: "Bad trip", url: "/badTrip.jpg", trailer: "https://www.youtube.com/watch?v=UjT9I6eb4p8", Genre: "Comedy", Strarring: "Eric Andre - Tiffany Hadish", BoxOffice: "$221 million", Duration: "1h 47m", Rating: 76, YearReleased: 2021, story: "Hidden cameras capture two best friends pulling hilarious and inventive pranks on an unsuspecting public during a wild road trip."},
     {movie: "Persuasion", url: "/persuasionMovie.jpg", trailer: "https://www.youtube.com/watch?v=Fz7HmgPJQak", Genre: "Drama", Strarring: "Cosmo Jarvis - Dakota Johnson", BoxOffice: "$87 million", Duration: "2h 7m", Rating: 88, YearReleased: 2022, story: "When Frederick Wentworth -- the one who got away -- crashes back into Anne Elliot's life, she must choose between putting the past behind her or listening to her heart when it comes to second chances."},
     {movie: "The Unforgivable", url: "/theUnforgiv.jpg", trailer: "https://www.youtube.com/watch?v=JNUjx7LZoiU", Genre: "Drama", Strarring: "Sandra Bullock - John Bernthal", BoxOffice: "$110 million", Duration: "1h 32m", Rating: 66, YearReleased: 2021, story: "Ruth Slater, a woman released from prison after serving a sentence for a violent crime and attempts to re-enter society. She must try to put her life back together again in a world that refuses to forgive her past."},
     {movie: "The Mauritanian", url: "/theMaurit.jpg", trailer: "https://www.youtube.com/watch?v=sRSGg54yvjQ", Genre: "Drama", Strarring: "Jodie Foster - Tahar Rahim", BoxOffice: "$79 million", Duration: "2h 2m", Rating: 55, YearReleased: 2021, story: "A defence attorney, her associate, and a military prosecutor uncover a far-reaching conspiracy while investigating the case of a suspected 9/11 terrorist imprisoned at Guantanamo Bay, Cuba, for six years."},
     {movie: "Through My Window", url: "/throughMyWi.png", trailer: "https://www.youtube.com/watch?v=_zxhK3Z-R0c", Genre: "Drama", Strarring: "Julio Pena - Clara Galle", BoxOffice: "$133 million", Duration: "1h 46m", Rating: 76, YearReleased: 2022, story: "Raquel has a longtime crush on her hot neighbour, Ares, whom she secretly watches but has never spoken to. Can she make Ares fall in love with her?"},
     {movie: "Little Women", url: "/littleWomen.jpg", trailer: "https://www.youtube.com/watch?v=AST2-4db4ic", Genre: "Drama", Strarring: "Saoirse Ronan - Florence Pugh", BoxOffice: "$122 million", Duration: "1h 50m", Rating: 81, YearReleased: 2019, story: "While the March sisters enter the threshold of womanhood, they go through many ups and downs in life and endeavour to make important decisions that can affect their future."},
     {movie: "Interceptor", url: "/Interceptor.jpg", trailer: "https://www.youtube.com/watch?v=OQSoII4Bj1o", Genre: "Action", Strarring: "Elsa Bataky - Luke Bracey", BoxOffice: "$115 million", Duration: "1h 44m", Rating: 72, YearReleased: 2022, story: "One Army captain is forced use her years of tactical training and military expertise when a simultaneous coordinated attack threatens the remote missile interceptor station of which she is in command."},
     {movie: "The Tomorrow War", url: "/theTomorow.jpg", trailer: "https://www.youtube.com/watch?v=QPistcpGB8o", Genre: "Action", Strarring: "Chris Pratt - Betty Gilbin", BoxOffice: "$280 million", Duration: "1h 34m", Rating: 67, YearReleased: 2021, story: "When a group of time travellers from the future tell people about a war they are fighting with aliens, Dan, a school teacher, decides to help them win it in order to secure his daughter's future."},
     {movie: "A Day to Die", url: "/aDayToDie.jpg", trailer: "https://www.youtube.com/watch?v=JnFQv6hnUuU", Genre: "Action", Strarring: "Kevin Dellon - Bruce Willis", BoxOffice: "$193 million", Duration: "1h 55m", Rating: 92, YearReleased: 2022, story: "After killing a drug syndicate member while protecting a parolee, Connor Connolly has one day to pay two million dollars in reparations he doesn't have to Tyrone Pettis. He is forced to ask his old military ops crew, led by Brice Mason, to come together and somehow get two million dollars before Connor loses everyone he loves."},
     {movie: "Wrath of Man", url: "/wrathOfMan.jpg", trailer: "https://www.youtube.com/watch?v=EFYEni2gsK0", Genre: "Action", Strarring: "Jason Tatum - Scott Eastwood", BoxOffice: "$55 million", Duration: "1h 32m", Rating: 32, YearReleased: 2021, story: "H is a mysterious man who starts working for a cash moving truck company. He becomes known for using amazing precision and dexterity to neutralise robbers. However, H is actually out for revenge."},
     {movie: "The Contractor", url: "/theContract.jpg", trailer: "https://www.youtube.com/watch?v=e7glvM8Xh0w", Genre: "Action", Strarring: "Chris Pine - Ben Foster", BoxOffice: "$115million", Duration: "2h 19m", Rating: 22, YearReleased: 2022, story: "Involuntarily discharged from the Army, a special forces sergeant lands a contract with a private underground military force. When his very first assignment goes awry, the elite soldier finds himself hunted and on the run, caught in a dangerous conspiracy and fighting to stay alive long enough to get home and uncover the true motives of those who betrayed him."},
     {movie: "The Age of Adaline", url: "/theAgeOf.jpg", trailer: "https://www.youtube.com/watch?v=7UzSekc0LoQ", Genre: "Romance", Strarring: "Blake Lively - Harrison Ford", BoxOffice: "$88 million", Duration: "1h 46m", Rating: 73, YearReleased: 2015, story: "Adaline, who has been 29 for eight decades, meets and madly falls in love with Ellis. She is forced to make a life-altering decision after a meeting with his parents threatens to expose her secret."},
     {movie: "The Shape Of Water", url: "/theShpe.jpg", trailer: "https://www.youtube.com/watch?v=XFYWazblaUA", Genre: "Romance", Strarring: "Sally Hawkins - Doug Jones", BoxOffice: "$125 million", Duration: "1h 48m", Rating: 51, YearReleased: 2017, story: "Elisa, a lonely janitor, stumbles upon an amphibious creature that is held captive in a secret research facility. She then develops a unique relationship with the creature."},
     {movie: "The Bodyguard", url: "/theBodyguard.jpg", trailer: "https://www.youtube.com/watch?v=4JFRdJTszRM", Genre: "Romance", Strarring: "Kevin Costner - whitney Houston", BoxOffice: "$133 million", Duration: "2h 12m", Rating: 43, YearReleased: 1992, story: "Rachel, a singer and an actor, receives death threats from an obsessive stalker. However, things turn chaotic when she hires Frank, an ex-Secret Service agent, to be her bodyguard and falls for him."},
     {movie: "Never Let Me Go", url: "/neverLetMe.jpg", trailer: "https://www.youtube.com/watch?v=sXiRZhDEo8A", Genre: "Romance", Strarring: "Andrew Garfield - Kiera Knightley", BoxOffice: "$67 million", Duration: "1h 35m", Rating: 62, YearReleased: 2010, story: "Kathy, Tommy and Ruth are raised in an idyllic environment at Hailsham, a boarding school. Even as they deal with pangs of love, a teacher lets it slip that their fate has already been written."},
     {movie: "Focus", url: "/Focus.jpg", trailer: "https://www.youtube.com/watch?v=MxCRgtdAuBo", Genre: "Romance", Strarring: "Will Smith - Margot Robbie", BoxOffice: "$310 million", Duration: "1h 51m", Rating: 54, YearReleased: 2015, story: "Nicky, an accomplished con artist, gets romantically involved with his disciple, Jess, but, soon, ends their relationship. Years later, she returns as a femme fatale to spoil his plans."},
     {movie: "Scream", url: "/Scream.jpg", trailer: "https://www.youtube.com/watch?v=beToTslH17s", Genre: "Horror", Strarring: "Melissa Barrera - Mason Gooding", BoxOffice: "$73 million", Duration: "2h 3m", Rating: 44, YearReleased: 2022, story: "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past."},
     {movie: "No One Gets Out Alive", url: "/noOne.png", trailer: "https://www.youtube.com/watch?v=sY2TLiK27g4", Genre: "Horror", Strarring: "Cristina Rodlo - Marc Menchaca", BoxOffice: "$70 million", Duration: "1h 55m", Rating: 72, YearReleased: 2021, story: "Desperate and without documentation, a woman from Mexico moves into a rundown Cleveland boarding house. Then the unsettling cries and eerie visions begin."},
     {movie: "Umma", url: "/Umma.jpg", trailer: "https://www.youtube.com/watch?v=QQdXvvtu-iI", Genre: "Horror", Strarring: "Sandra Oh - Fivel Stewart", BoxOffice: "$120 million", Duration: "1h 32m", Rating: 56, YearReleased: 2022, story: "A woman's quiet life on an American farm takes a terrifying turn when the remains of her estranged mother arrive from Korea."},
     {movie: "The Nun", url: "/theNun.jpg", trailer: "https://www.youtube.com/watch?v=pzD9zGcUNrw", Genre: "Horror", Strarring: "Taisa Farmiga - Bonnie Arons", BoxOffice: "$137 million", Duration: "1h 47m", Rating: 66, YearReleased: 2018, story: "A priest and a novice arrive in Romania to investigate the death of a young nun. However, things take an ugly turn after they encounter a supernatural force."},
     {movie: "The Grudge", url: "/theGrudge.jpg", trailer: "https://www.youtube.com/watch?v=O2NKzO-fxwQ", Genre: "Horror", Strarring: "Sara Michelle - Jason Behr", BoxOffice: "$190 million", Duration: "1h 52m", Rating: 43, YearReleased: 2004, story: "Karen Davis moves to Tokyo, where she encounters a supernatural spirit that possesses its victims. After a series of horrifying and mysterious deaths, Karen makes a vow to stop any further deaths."}]

const type = [{type: "Recently added", id: "Recently-added"}, {type: "Popular now", id: "Popular-now"}, {type: "Comedy", id: "Comedy"}, {type: "Drama", id: "Drama"},{type: "Action", id: "Action"},{type: "Romance", id: "Romance"},{type: "Horror", id: "Horror"}]

const body = $("body")

//log element
const logo = $(".logo")
logo.html('<h2><span class="first-half">Movie</span><span class="second-half">Guide</span></h2>')

// Search
const search = $(".search")
search.html('<div class = "search-container"><input class = "search-input"  type="text" placeholder="Search for a movie, actor, genre..etc"/><svg class="svg-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></div>')
const searchBtn = $(".svg-search")
const searchInput = $(".search-input")
searchBtn.on("click", function(){
    console.log(searchInput.val())
    let filteredArray = movieArray.filter(function(elem, i){
        return (searchInput.val().toLowerCase() === elem.movie.toLowerCase()) || (searchInput.val().toLowerCase() === elem.Genre.toLowerCase()) || (elem.Strarring.toLowerCase().includes(searchInput.val().toLowerCase()))
    })
    console.log(filteredArray)
    body.html(`<div class="search-result"><h2>Movies related to '${searchInput.val()}'</h2></div>`)
    let searchContainer = $('<div class="srch-container"></div>')
    body.append(searchContainer)
    for(let j=0; j<filteredArray.length; j++){
        let test =  $(`<div class="srch"><h2 class="srch-text">${filteredArray[j].movie}</h2><img class="srch-img" src="./images${filteredArray[j].url}"/></div>`)
        searchContainer.append(test)
    }
    
})

//watchlist
let watchListArray = []
let watchListArrayOfObjects = []

const watchList = $(".watch")
watchList.html("<h2>WatchList</h2>")
watchList.on("click",function(){
    watchListArrayOfObjects = JSON.parse(localStorage.getItem("movies"))
    console.log(watchListArrayOfObjects);

    body.html(`<div class="watch-list"><h2>My WatchList</h2></div>`)
    let house = $('<div class="houseee"></div>')
    body.append(house)
    for(let j=0; j<watchListArrayOfObjects.length; j++){
        let test =  $(`<div class="wtclist"><h2 class="wtclist-text">${watchListArrayOfObjects[j].movie}</h2><img class="wtclist-img" src="./images${watchListArrayOfObjects[j].url}"/><button class="remove">Remove from wathclist</button></div>`)
        house.append(test)
        const removeButtons = $(".remove")
        removeButtons.on("click", function(){
            let x = $(this).parent()
            let y = $(this).siblings()
            for(let i=0; i<watchListArrayOfObjects.length; i++){
                if(y.text() === watchListArrayOfObjects[i].movie){
                    
                    watchListArrayOfObjects.splice(i,1)
                    localStorage.setItem("movies", JSON.stringify(watchListArrayOfObjects))
                }
            }
            x.remove()
        })
    }
})

//sign in
const signIn = $(".sign-in")
signIn.html("<h2>Sign In</h2>")
signIn.on("click", function(){
    body.html('<div class = "sign-in-big"></div>') 
    const signInContainer = $(".sign-in-big")
    const signInPage = $('<div class = "sign-in-page"></div>')
    signInContainer.append(signInPage)
    const texxt = $('<h2 class = "sign-in-text">Sign In</h2>')
    const icon = $('<div class = "icon"><svg class = "svg-input" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg></div>')
    signInPage.append(icon)
    signInPage.append(texxt)
    const inputContainer = $(`<div class="input-container"></div>`)
    signInPage.append(inputContainer)
    for(let i=0; i<4; i++){

        let fields
        if(i===0){
              fields = $('<input class="sign-in-input" type="text" placeholder="First Name"/>')
        }
         else if(i===1){
             fields = $('<input class="sign-in-input" type="text" placeholder="Last Name"/>')
         }
        else if(i===2){
             fields = $('<input class="sign-in-input" type="email" placeholder="Email"/>')

        }else{
             fields = $('<input class="sign-in-input" type="password" placeholder="Password"/>')
        }
        inputContainer.append(fields)
    }
    const signInButton = $('<button class=sing-in-btn>Login</button>')
    signInPage.append(signInButton)
})

//FAQ
const fqa = $(".fqa")
fqa .html('<h2><span class="f">F</span><span class="a">A</span><span class="q">Q</span></h2>')
fqa.on("click", function(){
    body.html('<div class = "fqa-eds">Frequently Asked Question</div>')
    body.css("background-color", "rgb(7, 7, 61)")
    const fqaContainer = $('<div class = "fqa-container"></div>')
    body.append(fqaContainer)
    for(let i=0; i<3; i++){
        if(i===0){
            const biggieSmalls = $('<div class = "biggie"><div class = "fqa-question">Why should I sign in with MovieGuide?</div><div class = "fqa-answer">If you are a big movies fan, then MovieGuide is the perfect website for you, since it has everything you need about films and your favourite movie stars.</div></div>')
            fqaContainer.append(biggieSmalls)
        }
        if(i===1){
            const biggieSmalls = $('<div class = "biggie"><div class = "fqa-question">How can I add movies to my watch-list?</div><div class = "fqa-answer">Under each movie picture, you can find an add to watchlist button, once you click on it, you can check your watchlist, it will be there.</div></div>')
            fqaContainer.append(biggieSmalls)
        }
        if(i===2){
            const biggieSmalls = $('<div class = "biggie"><div class = "fqa-question">Is there a way to contact you?</div><div class = "fqa-answer">If you scroll down to the bottm of the website, you can find our social media accounts where you are more than welcome to reach out to us, and you can always leave your feedback in the comments & suggestions box.</div></div>')
            fqaContainer.append(biggieSmalls)
        }

    }
    

})

//dark mode
const mode = $(".dark")
mode.html('<svg class = "darkk mode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/></svg><svg class = "light mode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>')
const darkMode = $(".darkk")
const lightMode = $(".light")

darkMode.on("click", function(){
    lightMode.css("visibility", "visible")
    darkMode.css("visibility", "hidden")
    // body.css("background-color", "black")
    // body.css("color", "white")
})

lightMode.on("click", function(){
    darkMode.css("visibility", "visible")
    lightMode.css("visibility", "hidden")
    body.css("background-color", "#EBDCBF")
    body.css("color", "rgb(129, 85, 85)")
})



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

    butt.on("click", function(){
        let newObj = {}
        let sibling = $(this).siblings()
        let btnawi = $(this)
        
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
        btnawi.hide(1000)
        const rmvBtn = $('<button class="watchlist-btn">Remove from watchlist</button>')
        rmvBtn.hide()
        x.append(rmvBtn)
        rmvBtn.show(1000)
        rmvBtn.on("click", function(){
            console.log($(this).siblings().text());
            let y = $(this).siblings().text()
            for(let i=0; i<watchListArrayOfObjects.length; i++){
                if(y.includes(watchListArrayOfObjects[i].movie)){
                    watchListArrayOfObjects.splice(i,1)
                    localStorage.setItem("movies", JSON.stringify(watchListArrayOfObjects))
                    $(this).hide(1000)
                    btnawi.show(1000)
                }
            }
        })

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

            //HABID starts here:::
            const specific = $(".specific")
            const specificBabyOne = $(`<div class="specific-one"><h2 class="specific-text">${movieArray[i].movie}</h2><img class="imagess" src="./images${movieArray[i].url}"/></div>`)
            const specificBabyTwo = $(`<div class="specific-two"></div>`)
            const x = $('<div class="rpg"></div>')
            specificBabyTwo.append(x)

            if(movieArray[i].Rating<50){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a target="_blank" class="remember" href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=50 && movieArray[i].Rating<60){
          const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a class="remember" target="_blank" href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=60 && movieArray[i].Rating<70){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a class="remember" target="_blank" href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)
            }else if(movieArray[i].Rating>=70 && movieArray[i].Rating<80){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div><div class="unknow-two"><a class="remember" target="_blank" href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=80 && movieArray[i].Rating<90){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg></div><p><div class="unknow-two"><a class="remember" target="_blank" href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
                x.append(babyTwoFirst)

            }else if(movieArray[i].Rating>=90 && movieArray[i].Rating<=100){
                const babyTwoFirst = $(`<div class="unknow-one">Rating: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></div><div class="unknow-two"><a class="remember" target="_blank" href = ${movieArray[i].trailer}><svg class = "link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg> Watch trailer</a></p></div>`)
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