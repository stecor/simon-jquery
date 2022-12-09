let userClickedPattern = []

let gamePattern = []
let buttonColours = ['red', 'blue', 'green', 'yellow']
let randomChosenColour = ''
let randomNumber = 0
let redAudio = new Audio('/sounds/red.mp3')
let blueAudio = new Audio('/sounds/blue.mp3')
let greenAudio = new Audio('/sounds/green.mp3')
let yellowAudio = new Audio('/sounds/yellow.mp3')
let wrongAudio = new Audio('/sounds/wrong.mp3')

//randon sequence of colors

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 3)
  randomChosenColour = buttonColours[Number(randomNumber)]
  playSound(randomChosenColour)
  buttonPressed(randomChosenColour)
  return randomChosenColour
}

//function to play color sound

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

//button pressed display

function buttonPressed(item) {
  $('#' + item).addClass('pressed')

  setTimeout(function () {
    $('#' + item).removeClass('pressed')
  }, 500)
}

//user chosen color

$('.btn').click(function (event) {
  let userChosenColor = event.target.id
  console.log(event.target.id)
  playSound(userChosenColor)
  buttonPressed(userChosenColor)
  userClickedPattern.push(userChosenColor)
  console.log(userClickedPattern)
})

document.addEventListener('keydown', function (e) {
  //alert('key was pressed!!' + e.key)
  if (e.key === 'a' || e.key === 'A') {
    gamePattern = []
    randomChosenColour = nextSequence()

    gamePattern.push(randomChosenColour)

    console.log(gamePattern)
  }
})
