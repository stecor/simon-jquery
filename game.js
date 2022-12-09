let userClickedPattern = []
let level = 0
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
  if (level === 0) {
    $('#level-title').html('LEVEL 0')
    level++
    console.log(level)
  } else {
    console.log(level)
    $('#level-title').html('LEVEL ' + level)
    level++
  }
  randomNumber = Math.floor(Math.random() * 3)
  randomChosenColour = buttonColours[Number(randomNumber)]
  setTimeout(() => {
    playSound(randomChosenColour)
    buttonPressed(randomChosenColour)
  }, 1000)

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
  nextSequence()
})

document.addEventListener('keydown', function (e) {
  //alert('key was pressed!!' + e.key)
  if (e.key === 'a' || e.key === 'A') {
    level = 0
    gamePattern = []
    console.log(level)
    randomChosenColour = nextSequence()

    gamePattern.push(randomChosenColour)
    console.log(gamePattern)
  }
})
