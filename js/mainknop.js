const startMenu = './images/1_start_menu.gif'
const stopMenu = './images/1_stop_menu.gif'

const mainKnop1_1 = document.querySelector('#main_knop_clicker1_1')
const mainKnop1_2 = document.querySelector('#main_knop_clicker1_2')

const mainKnop2_1 = document.querySelector('#main_knop_clicker2_1')
const mainKnop2_2 = document.querySelector('#main_knop_clicker2_2')

const mainKnop3_1 = document.querySelector('#main_knop_clicker3_1')
const mainKnop3_2 = document.querySelector('#main_knop_clicker3_2')

const mainKnop4_1 = document.querySelector('#main_knop_clicker4_1')
const mainKnop4_2 = document.querySelector('#main_knop_clicker4_2')



const bluezone1 = document.querySelector('#blueZone1')
const bluezone2 = document.querySelector('#blueZone2')
const bluezone3 = document.querySelector('#blueZone3')
const bluezone4 = document.querySelector('#blueZone4')

// page 1 
mainKnop1_1.addEventListener('click', () => {
  bluezone1.style.backgroundImage = `url('${startMenu}?a=${Math.random()})`
  mainKnop1_1.style.zIndex = 302
  mainKnop1_2.style.zIndex = 303
  console.log('click for start menu page 1')
})

mainKnop1_2.addEventListener('click', () => {
  bluezone1.style.backgroundImage = `url('${stopMenu}?a=${Math.random()}')`
 
  mainKnop1_1.style.zIndex = 303
  mainKnop1_2.style.zIndex = 302

  console.log('click for stop menu page 1')
})

// page 2
mainKnop2_1.addEventListener('click', () => {
  bluezone2.style.backgroundImage = `url('${startMenu}?a=${Math.random()})`
  mainKnop2_1.style.zIndex = 302
  mainKnop2_2.style.zIndex = 303

  console.log('click for start menu page 2')
})

mainKnop2_2.addEventListener('click', () => {
  bluezone2.style.backgroundImage = `url('${stopMenu}?a=${Math.random()}')`
  mainKnop2_1.style.zIndex = 303
  mainKnop2_2.style.zIndex = 302
  console.log('click for stop menu page 2')
})


// page 3
mainKnop3_1.addEventListener('click', () => {
  bluezone3.style.backgroundImage = `url('${startMenu}?a=${Math.random()})`
  mainKnop3_1.style.zIndex = 302
  mainKnop3_2.style.zIndex = 303

  console.log('click for start menu page 3')
})

mainKnop3_2.addEventListener('click', () => {
  bluezone3.style.backgroundImage = `url('${stopMenu}?a=${Math.random()}')`
  mainKnop3_1.style.zIndex = 303
  mainKnop3_2.style.zIndex = 302
  console.log('click for stop menu page 3')
})


// page 4 
mainKnop4_1.addEventListener('click', () => {
  bluezone4.style.backgroundImage = `url('${startMenu}?a=${Math.random()})`
  mainKnop4_1.style.zIndex = 302
  mainKnop4_2.style.zIndex = 303
  console.log('click for start menu page 4')
})

mainKnop4_2.addEventListener('click', () => {
  bluezone4.style.backgroundImage = `url('${stopMenu}?a=${Math.random()}')`
  mainKnop4_1.style.zIndex = 303
  mainKnop4_2.style.zIndex = 302
  console.log('click for stop menu page 4')
})