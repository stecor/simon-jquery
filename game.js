let gamePattern = []
let buttonColours = ['red', 'blue', 'green', 'yellow']
let randomChosenColour = ''
let randomNumber = 0

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 3)
  return randomNumber
}

randomChosenColour = buttonColours[nextSequence()]
gamePattern.push(randomChosenColour)
