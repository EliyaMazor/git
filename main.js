'use strict'

var gBallSize = 100

function onBallClick(elBall, maxDiameter) {
  gBallSize += getRandomInt(20, 60)

  if (gBallSize > maxDiameter) gBallSize = 100

  elBall.style.backgroundColor = getRandomColor()
  elBall.style.width = `${gBallSize}px`
  elBall.style.height = `${gBallSize}px`
  elBall.innerText = gBallSize
}
