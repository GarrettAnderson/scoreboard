let gamePeriod = 0
let team1Score = 0
let team2Score = 0
let team1Name
let team2Name

const main = () => {
  document.querySelector('.team1Name').textContent = 'Team 1'
  document.querySelector('.team2Name').textContent = 'Team 2'
  document.querySelector('.team1Score').textContent = 0
  document.querySelector('.team2Score').textContent = 0
  document.querySelector('.period-number').textContent = 0
}

// Team 1: when user clicks 'Add 1' button, increase counter by 1 for Team 1
const increaseNumberTeam1 = () => {
  team1Name = document.querySelector('.team2Name').textContent
  gamePeriod = document.querySelector('.period-number').textContent
  if (team1Score < 20) {
    team1Score++
    console.log(gamePeriod)
  } else if (team1Score === 20) {
    team1Score++
    document.querySelector('.isWinner').textContent = 'WINNER!!'
    document.querySelector('.team1').classList.add('winner')
    document.querySelector('.team-1-add-1-button').classList.add('hide-button')
  }
  document.querySelector('.team1Score').textContent = team1Score
}

// Team 2: when user clicks 'Add 1' button, increase counter by 1 for Team 2
const increaseNumberTeam2 = () => {
  team2Name = document.querySelector('.team2Name').textContent
  if (team2Score < 20) {
    team2Score++
  } else if (team2Score <= 20) {
    team2Score++
    document.querySelector('.isWinner2').textContent = 'WINNER!!'
    document.querySelector('.team2').classList.add('winner')
    document.querySelector('.team-2-add-2-button').classList.add('hide-button')
  }
  document.querySelector('.team2Score').textContent = team2Score
}

// when user clicks 'Subtract 1' button, subtract counter by 1

const subtractNumberTeam1 = () => {
  if (team1Score > 1) {
    team1Score = team1Score - 1
  } else {
    team1Score = 0
    document.querySelector('.team-1-subtract-1-button').classList.add('hide-button')
  }
  document.querySelector('.team1Score').textContent = team1Score
}
// if (team1Score >= 0) {
//   team1Score === 0
//   document.querySelector('.team1Score').textContent = team1Score
// }

const subtractNumberTeam2 = () => {
  if (team2Score >= 1) {
    team2Score = team2Score - 1
  } else {
    team2Score = 0
    document.querySelector('.team-2-subtract-2-button').classList.add('hide-button')
  }
  document.querySelector('.team2Score').textContent = team2Score
}

// Update Team Name
const updateTeam1Name = () => {
  // get inner HTML and store in variable team1Name
  team1Name = document.getElementById('updated-name-team-1').value
  console.log(team1Name)

  // update HTML with new variable
  document.querySelector('.team1Name').textContent = team1Name
}

const updateTeam2Name = () => {
  // get inner HTML and store in variable team1Name
  team2Name = document.querySelector('.updated-name-team-2').value
  console.log(team2Name)

  // update HTML with new variable
  document.querySelector('.team2Name').textContent = team2Name
}

const resetTeam1Score = () => {
  team1Score = 0
  document.querySelector('.team1Name').textContent = 'Team 1'
  document.querySelector('.team1Score').textContent = team1Score
  document.querySelector('.team-1-add-1-button').classList.remove('hide-button')
  document.querySelector('.team-1-subtract-1-button').classList.remove('hide-button')
  document.querySelector('.isWinner').textContent = ''
  document.querySelector('.team1').classList.remove('winner')
}

const resetTeam2Score = () => {
  team2Score = 0
  document.querySelector('.team2Name').textContent = 'Team 2'
  document.querySelector('.team2Score').textContent = team1Score
  document.querySelector('.team-2-add-2-button').classList.remove('hide-button')
  document.querySelector('.team-2-subtract-2-button').classList.remove('hide-button')
  document.querySelector('.isWinner2').textContent = ''
  document.querySelector('.team2').classList.remove('winner')
}

const increasePeriod = () => {
  if (gamePeriod < 4) {
    gamePeriod++
  } else {
    return gamePeriod
    // console.log(gamePeriod)
  }
  document.querySelector('.period-number').textContent = gamePeriod
}

const decreasePeriod = () => {
  if (gamePeriod >= 1) {
    gamePeriod--
  } else {
    gamePeriod = 0
  }
  document.querySelector('.period-number').textContent = gamePeriod
}

document.addEventListener('DOMContentLoaded', main)

// Add 1 to team 1 and team 2 score when respective button is clicked
document.querySelector('.team-1-add-1-button').addEventListener('click', increaseNumberTeam1)
document.querySelector('.team-2-add-2-button').addEventListener('click', increaseNumberTeam2)

// Update team name
document.querySelector('.update-team-1-name').addEventListener('click', updateTeam1Name)
document.querySelector('.update-team-2-name').addEventListener('click', updateTeam2Name)

// Subtract team score
document.querySelector('.team-1-subtract-1-button').addEventListener('click', subtractNumberTeam1)
document.querySelector('.team-2-subtract-2-button').addEventListener('click', subtractNumberTeam2)

// Reset team score
document.querySelector('.team-1-reset-1-button').addEventListener('click', resetTeam1Score)
document.querySelector('.team-2-reset-2-button').addEventListener('click', resetTeam2Score)

// Increase/Decrease period number
document.querySelector('.period-increase-button').addEventListener('click', increasePeriod)
document.querySelector('.period-decrease-button').addEventListener('click', decreasePeriod)
