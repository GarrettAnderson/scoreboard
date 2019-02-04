let team1Score = 0
let team2Score = 0
let team1Name
let team2Name

const main = () => {
    document.querySelector('.team1Score').textContent = 0
    document.querySelector('.team2Score').textContent = 0
    document.querySelector('.team1Name').textContent = 'Team 1'
    document.querySelector('.team2Name').textContent = 'Team 2'
}

// Team 1: when user clicks 'Add 1' button, increase counter by 1 for Team 1
const increaseNumberTeam1 = () => {
    team1Score++ // counter = counter + 1
    document.querySelector('.team1Score').textContent = team1Score
}

// Team 2: when user clicks 'Add 1' button, increase counter by 1 for Team 2
const increaseNumberTeam2 = () => {
    team2Score++
    document.querySelector('.team2Score').textContent = team2Score
}

// when user clicks 'Subtract 1' button, subtract counter by 1

// when user inputs a number and clicks 'Update' button, <p> tag/ the variable counter changes

const updateTeam1Name = () => {
    // get inner HTML and store in variable team1Name
    team1Name = document.getElementById('updated-name-team-1').value
    console.log(team1Name)

    // update HTML with new variable
    document.querySelector('.team1Name').textContent = team1Name
}

const updateTeam2Name = () => {
    team2Name = document.querySelector('.updated-name-team-2').value
    console.log(team2Name)

    document.querySelector('.team2Name').textContent = team2Name
}

document.addEventListener('DOMContentLoaded', main)

// Add 1 to team 1 and team 2 score when respective button is clicked
document.querySelector('.team-1-add-1-button').addEventListener('click', increaseNumberTeam1)
document.querySelector('.team-2-add-2-button').addEventListener('click', increaseNumberTeam2)

// Update team score
document.querySelector('.update-team-1-name').addEventListener('click', updateTeam1Name)
document.querySelector('.update-team-2-name').addEventListener('click', updateTeam2Name)

// Run increaseNumber functions when 'Add 1' button is clicked
// document.addEventListener('click',)
// var addTeam1Score = document.getElementById('add-button-team-1')
// addTeam1Score.onclick = increaseNumberTeam1()

// document.addEventListener('click', increaseNumberTeam2)

// document.addEventListener('click', increaseNumberTeam2)

// onclick button for update value:
// 1. get value from HTML and store in variable
// 2. update score with new variable value
