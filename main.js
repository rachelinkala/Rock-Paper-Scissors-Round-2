$(document).ready( function() {

var choices = ['rock', 'paper', 'scissors']

var user,
    computer,
    result
var $selectors = $('.choice')
var $computerChoice = $('#computer')[0]
var $userChoice = $('#user')[0]

var score = { win: 0, lose: 0, tie: 0 }
var $wins = $('#wins')[0]
var $losses = $('#losses')[0]
var $ties = $('#ties')[0]


function userSelection (e) {
  user = e.target.id
  $userChoice.src = user + '.png'
  $userChoice.className = 'selected'
  computer = computerSelection()
  $computerChoice.src = computer + '.png'
  $computerChoice.className = 'selected'
  result = compare()
  score[result]++
  render()
}

function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function compare() {
  if (user === computer)
    return 'tie'

  switch(user) {
    case 'rock':
      return computer === 'paper' ? 'lose' : 'win'
    case 'paper':
      return computer === 'scissors' ? 'lose' : 'win'
    case 'scissors':
      return computer === 'rock' ? 'lose' : 'win'
    default:
      return
  }
}

function render() {
  $wins.innerHTML = 'Wins: ' + score.win
  $losses.innerHTML = 'Losses: ' + score.lose
  $ties.innerHTML = 'Ties: ' + score.tie
}


$('.choice').click( function(e) {
  userSelection(e)
})  


})