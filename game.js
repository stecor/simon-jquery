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
let lastUser = ''
let lastGame = ''
let currentLevel = []
let clicked = []

const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i])

function checkAnswer() {
  console.log('userClicked: ' + userClickedPattern)
  console.log('gameClicked: ' + gamePattern)
  if (userClickedPattern.length === gamePattern.length) {
    if (equals(userClickedPattern, gamePattern)) {
      userClickedPattern = []
      nextSequence()
      console.log('correct')
      level++
    } else {
      console.log('wrong')
      level = 0
      userClickedPattern = []
      buttonPressed('wrong')
    }
  }

  $('#level-title').html('LEVEL ' + level)
}

//randon sequence of colors

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 3)
  randomChosenColour = buttonColours[Number(randomNumber)]
  gamePattern.push(randomChosenColour)
  setTimeout(() => {
    playSound(randomChosenColour)
    buttonPressed(randomChosenColour)
  }, 2000)
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
      wrongAudio.play()
      break
  }
}

//button pressed display

function buttonPressed(item) {
  if (item === 'wrong') {
    playSound('wrong')
    $('body').addClass('game-over')
    setTimeout(function () {
      $('body').removeClass('game-over')
    }, 500)
  } else {
    $('#' + item).addClass('pressed')
    setTimeout(function () {
      $('#' + item).removeClass('pressed')
    }, 500)
  }
}

//user chosen color

$('.btn').click(function (event) {
  let userChosenColor = event.target.id
  userClickedPattern.push(userChosenColor)
  playSound(userChosenColor)
  buttonPressed(userChosenColor)
  checkAnswer()
})

document.addEventListener('keydown', function (e) {
  //alert('key was pressed!!' + e.key)
  if (e.key === 'a' || e.key === 'A') {
    level = 0
    userClickedPattern = []
    gamePattern = []
    $('#level-title').html('LEVEL ' + level)
    nextSequence()
  }
})
