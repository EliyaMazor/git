'use strict'

var gBallSize = 100

function onBallClick(elBall) {
  gBallSize += getRandomInt(20, 60)
  
  if(gBallSize > 400) gBallSize = 100

  elBall.style.width = `${gBallSize}px`
  elBall.style.height = `${gBallSize}px`
  elBall.innerText = gBallSize
}
