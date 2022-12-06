let gamePattern = []
let buttonColours = ['red', 'blue', 'green', 'yellow']
let randomChosenColour = ''
let randomNumber = 0
let redAudio = new Audio('/sounds/red.mp3')
let blueAudio = new Audio('/sounds/blue.mp3')
let greenAudio = new Audio('/sounds/green.mp3')
let yellowAudio = new Audio('/sounds/yellow.mp3')
let wrongAudio = new Audio('/sounds/wrong.mp3')

//randon sequence

function nextSequence() {
  return Math.floor(Math.random() * 3)
}

function playSound(btnColor) {
  switch (btnColor) {
    case 'red':
      redAudio.play()
      break
    case 'blue':
      blueAudio.play()
      break
    case 'green':
      greenAudio.play()
      break
    case 'yellow':
      yellowAudio.play()
      break

    default:
      break
  }
}

randomNumber = nextSequence()
randomChosenColour = buttonColours[Number(randomNumber)]
gamePattern.push(randomChosenColour)

gamePattern.forEach(buttonPressed)

function buttonPressed(item) {
  console.log(item)
  console.log(gamePattern)
  $('#' + item).addClass('pressed')

  setTimeout(function () {
    $('#' + item).removeClass('pressed')
  }, 500)
}

$('.btn').click(function (event) {
  console.log(event.target.id)
  let btnColor = event.target.id
  playSound(btnColor)
  buttonPressed(btnColor)
})
