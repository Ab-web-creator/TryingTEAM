const mainKnop1_1 = document.querySelector('#main_knop_clicker1_1')
const mainKnop1_2 = document.querySelector('#main_knop_clicker1_2')

const blueZoneImage1 = document.querySelector('#gif1a')

const blueZoneContainer2 = document.querySelector('#blueZone1b')
const blueZoneContainer3 = document.querySelector('#blueZone1c')

let startMenuImg
let stopMenuImg

// page 1
mainKnop1_1.addEventListener('click', () => {
  const startMenuUrl = `./images/1_start_menu.gif?a=${Math.random()}`
  startMenuImg = document.createElement('img')
  startMenuImg.setAttribute('id', 'gif1b')
  startMenuImg.src = startMenuUrl

  blueZoneContainer2.appendChild(startMenuImg)

  blueZoneImage1.style.zIndex = 104
  startMenuImg.style.zIndex = 105
  startMenuImg.style.visibility = 'visible'

  mainKnop1_1.style.zIndex = 302
  mainKnop1_2.style.zIndex = 303
  console.log('click for start menu page 1')

  if (blueZoneContainer3.hasChildNodes()) {
    blueZoneContainer3.removeChild(stopMenuImg)
  }

  const stopMenuUrl = `./images/1_stop_menu.gif?a=${Math.random()}`
  stopMenuImg = document.createElement('img')
  stopMenuImg.setAttribute('id', 'gif1c')
  stopMenuImg.src = stopMenuUrl
})

mainKnop1_2.addEventListener('click', () => {
  startMenuImg.style.zIndex = 105

  blueZoneContainer3.appendChild(stopMenuImg)
  stopMenuImg.style.zIndex = 106
  stopMenuImg.style.visibility = 'visible'

  setTimeout(() => {
    blueZoneImage1.style.zIndex = 105
    startMenuImg.style.zIndex = 104
    startMenuImg.style.visibility = 'hidden'
    stopMenuImg.style.zIndex = 104
    stopMenuImg.style.visibility = 'hidden'

    if (blueZoneContainer2.hasChildNodes()) {
      blueZoneContainer2.removeChild(startMenuImg)
    }

    
  }, 2400)

  mainKnop1_1.style.zIndex = 303
  mainKnop1_2.style.zIndex = 302
  console.log('click for stop menu page 1')

 
})

// до этого места сделал

// page 2
// mainKnop2_1.addEventListener('click', () => {
//   bluezone2.style.backgroundImage = `url('${startMenu}?a=${Math.random()})`
//   mainKnop2_1.style.zIndex = 302
//   mainKnop2_2.style.zIndex = 303

//   console.log('click for start menu page 2')
// })

// mainKnop2_2.addEventListener('click', () => {
//   bluezone2.style.backgroundImage = `url('${stopMenu}?a=${Math.random()}')`
//   mainKnop2_1.style.zIndex = 303
//   mainKnop2_2.style.zIndex = 302
//   console.log('click for stop menu page 2')
// })

// // page 3
// mainKnop3_1.addEventListener('click', () => {
//   bluezone3.style.backgroundImage = `url('${startMenu}?a=${Math.random()})`
//   mainKnop3_1.style.zIndex = 302
//   mainKnop3_2.style.zIndex = 303

//   console.log('click for start menu page 3')
// })

// mainKnop3_2.addEventListener('click', () => {
//   bluezone3.style.backgroundImage = `url('${stopMenu}?a=${Math.random()}')`
//   mainKnop3_1.style.zIndex = 303
//   mainKnop3_2.style.zIndex = 302
//   console.log('click for stop menu page 3')
// })

// // page 4
// mainKnop4_1.addEventListener('click', () => {
//   bluezone4.style.backgroundImage = `url('${startMenu}?a=${Math.random()})`
//   mainKnop4_1.style.zIndex = 302
//   mainKnop4_2.style.zIndex = 303
//   console.log('click for start menu page 4')
// })

// mainKnop4_2.addEventListener('click', () => {
//   bluezone4.style.backgroundImage = `url('${stopMenu}?a=${Math.random()}')`
//   mainKnop4_1.style.zIndex = 303
//   mainKnop4_2.style.zIndex = 302
//   console.log('click for stop menu page 4')
// })
