//get element by id for home-score and guest-score
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

//initialize homeCount
let homeCount = 0
//create homeScore functions for +1 +2 +3
function home1() {
    homeCount += 1
    homeScore.textContent = homeCount
 }

function home2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function home3() {
    homeCount += 3
    homeScore.textContent = homeCount

}

//initialize guestCount
let guestCount = 0
//create guestScore functions for +1 +2 +3
function guest1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guest2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guest3() {
    guestCount += 3
    guestScore.textContent = guestCount
}

//reset button
function reset(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCount = 0
    guestCount = 0
}