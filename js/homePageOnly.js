const mainDiv = document.querySelector('.section-container')

const dynamicContainer = document.querySelector('.dynamicContainer')
const pageLogo = document.createElement('img')
pageLogo.setAttribute('class', 'pageLogo')
pageLogo.src = './images/logo.png'
const pageHeader = document.createElement('a')
pageHeader.innerText = 'De rijopleiding'
pageHeader.setAttribute('class', 'pageHeader')
dynamicContainer.appendChild(pageLogo)
dynamicContainer.appendChild(pageHeader)

const blueZoneContainer = document.querySelector('.blueZoneContainer')
const basis = document.querySelector('.basis')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

const blueZoneImage = document.querySelector('.blueZoneImage')

const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

let basisImageDisplay = true
// let starImageDisplay = false
// let stopImageDisplay = false

let sectionOneView = true
let sectionTwoView = false
let sectionThreeView = false
let sectionFourView = false

let basisMenuUrlPage1 = `./images/1_basis.gif?a=${Math.random()}`
let basisMenuUrlPage2 = `./images/2_basis.gif?a=${Math.random()}`
let basisMenuUrlPage3 = `./images/3_basis.gif?a=${Math.random()}`
let basisMenuUrlPage4 = `./images/4_basis.gif?a=${Math.random()}`

const mainButton = document.querySelector('.mainButton')
mainButton.addEventListener('click', () => {
  if (sectionOneView) {
    let startMenuUrlPage1 = `./images/1_start_menu.gif?a=${Math.random()}`
    let stopMenuUrlPage1 = `./images/1_stop_menu.gif?a=${Math.random()}`
    if (basisImageDisplay) {
      start.src = startMenuUrlPage1

      setTimeout(() => {
        start.style.zIndex = 2
        stop.style.zIndex = 1
        basis.style.zIndex = 0
      }, 300)

      basisImageDisplay = false

      mainButton.disabled = true

      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    } else {
      stop.src = stopMenuUrlPage1
      setTimeout(() => {
        stop.style.zIndex = 2
        start.style.zIndex = 1
        basis.style.zIndex = 0
      }, 500)

      basisImageDisplay = true

      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    }
  }

  if (sectionTwoView) {
    console.log('we are clicking on section two')
    let startMenuUrlPage2 = `./images/2_start_menu.gif?a=${Math.random()}`
    let stopMenuUrlPage2 = `./images/2_stop_menu.gif?a=${Math.random()}`
    if (basisImageDisplay) {
      start.src = startMenuUrlPage2
      setTimeout(() => {
        start.style.zIndex = 2
        stop.style.zIndex = 1
        basis.style.zIndex = 0
      }, 300)

      basisImageDisplay = false

      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    } else {
      stop.src = stopMenuUrlPage2
      setTimeout(() => {
        stop.style.zIndex = 2
        start.style.zIndex = 1
        basis.style.zIndex = 0
      }, 500)

      basisImageDisplay = true

      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    }
  }

  if (sectionThreeView) {
    console.log('we are clicking on section three')
    let startMenuUrlPage3 = `./images/3_start_menu.gif?a=${Math.random()}`
    let stopMenuUrlPage3 = `./images/3_stop_menu.gif?a=${Math.random()}`
    if (basisImageDisplay) {
      start.src = startMenuUrlPage3
      setTimeout(() => {
        start.style.zIndex = 2
        stop.style.zIndex = 1
        basis.style.zIndex = 0
      }, 300)

      basisImageDisplay = false

      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    } else {
      stop.src = stopMenuUrlPage3
      setTimeout(() => {
        stop.style.zIndex = 2
        start.style.zIndex = 1
        basis.style.zIndex = 0
      }, 500)

      basisImageDisplay = true

      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    }
  }

  if (sectionFourView) {
    console.log('we are clicking on section four')
    let startMenuUrlPage4 = `./images/4_start_menu.gif?a=${Math.random()}`
    let stopMenuUrlPage4 = `./images/4_stop_menu.gif?a=${Math.random()}`
    if (basisImageDisplay) {
      start.src = startMenuUrlPage4
      setTimeout(() => {
        start.style.zIndex = 2
        stop.style.zIndex = 1
        basis.style.zIndex = 0
      }, 300)

      basisImageDisplay = false

      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    } else {
      stop.src = stopMenuUrlPage4
      setTimeout(() => {
        stop.style.zIndex = 2
        start.style.zIndex = 1
        basis.style.zIndex = 0
      }, 500)

      basisImageDisplay = true

      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    }
  }
})


mainDiv.addEventListener('scroll', () => {
  const scrolledHeight = mainDiv.scrollTop

  basisMenuUrlPage1 = `./images/1_basis.gif?a=${Math.random()}`

  if (scrolledHeight >= 0 && scrolledHeight <= page1.scrollHeight * 0.1) {
    dynamicContainer.style.opacity = 1
    console.log('Page 1')

    pageHeader.innerText = 'De rijopleiding'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage1
    basis.style.zIndex = 2

    console.log('mid top 1-2')
    sectionOneView = true
    sectionTwoView = false
    sectionThreeView = false
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.1 &&
    scrolledHeight <= page1.scrollHeight * 0.2
  ) {
    dynamicContainer.style.opacity = 0.9
    console.log('2-3')
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.2 &&
    scrolledHeight <= page1.scrollHeight * 0.3
  ) {
    dynamicContainer.style.opacity = 0.75
    console.log('2-3')
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.3 &&
    scrolledHeight <= page1.scrollHeight * 0.4
  ) {
    dynamicContainer.style.opacity = 0.5
    console.log('3-4')
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.4 &&
    scrolledHeight <= page1.scrollHeight * 0.45
  ) {
    console.log('4-5')
    dynamicContainer.style.opacity = 0.25
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.45 &&
    scrolledHeight <= page1.scrollHeight * 0.55
  ) {
    dynamicContainer.style.opacity = 0

    pageHeader.innerText = 'De rijopleiding'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage1
    basis.style.zIndex = 2

    console.log('mid top 1-2')
    sectionOneView = true
    sectionTwoView = false
    sectionThreeView = false
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.55 &&
    scrolledHeight <= page1.scrollHeight * 0.65
  ) {
    dynamicContainer.style.opacity = 0
    console.log('mid bottom 1-2')

    pageHeader.innerText = 'De simulator'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage2
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = true
    sectionThreeView = false
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.65 &&
    scrolledHeight <= page1.scrollHeight * 0.7
  ) {
    dynamicContainer.style.opacity = 0.25
    console.log('6-7')
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.7 &&
    scrolledHeight <= page1.scrollHeight * 0.8
  ) {
    dynamicContainer.style.opacity = 0.5
    console.log('7-8')
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.8 &&
    scrolledHeight <= page1.scrollHeight * 0.9
  ) {
    dynamicContainer.style.opacity = 0.75
    console.log('8-9')
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.9 &&
    scrolledHeight < page1.scrollHeight
  ) {
    dynamicContainer.style.opacity = 0.9
    console.log('9')
  }

  if (
    scrolledHeight >= page1.scrollHeight &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.2 // 500 < 500 + 100
  ) {
    console.log('page 2')
    dynamicContainer.style.opacity = 1
    pageHeader.innerText = 'De simulator'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage2
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = true
    sectionThreeView = false
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.1 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.2
  ) {
    dynamicContainer.style.opacity = 0.9
    console.log('2-3')
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.2 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.3
  ) {
    dynamicContainer.style.opacity = 0.75
    console.log('2-3')
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.3 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.4
  ) {
    dynamicContainer.style.opacity = 0.5
    console.log('3-4')
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.4 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.45
  ) {
    console.log('4-5')
    dynamicContainer.style.opacity = 0.25
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.45 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.55
  ) {
    dynamicContainer.style.opacity = 0
    pageHeader.innerText = 'De simulator'
    console.log('mid top 2-3')

    basisImageDisplay = true

    basis.src = basisMenuUrlPage2
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = true
    sectionThreeView = false
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.55 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.65
  ) {
    dynamicContainer.style.opacity = 0
    pageHeader.innerText = 'De theorie'

    console.log('mid bottom 2-3')
    basisImageDisplay = true

    basis.src = basisMenuUrlPage3
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = false
    sectionThreeView = true
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.65 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.7
  ) {
    dynamicContainer.style.opacity = 0.25
    console.log('6-7')
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.7 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.8
  ) {
    dynamicContainer.style.opacity = 0.5
    console.log('7-8')
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.8 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.9
  ) {
    dynamicContainer.style.opacity = 0.75
    console.log('8-9')
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.9 &&
    scrolledHeight < page1.scrollHeight + page2.scrollHeight
  ) {
    dynamicContainer.style.opacity = 0.9
    console.log('9')
  }

  if (
    scrolledHeight >= page1.scrollHeight + page2.scrollHeight &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.2
  ) {
    console.log('page 3')
    dynamicContainer.style.opacity = 1
    pageHeader.innerText = 'De theorie'

    console.log('mid bottom 2-3')
    basisImageDisplay = true

    basis.src = basisMenuUrlPage3
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = false
    sectionThreeView = true
    sectionFourView = false
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.1 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.2
  ) {
    dynamicContainer.style.opacity = 0.9
    console.log('2-3')
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.2 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.3
  ) {
    dynamicContainer.style.opacity = 0.75
    console.log('2-3')
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.3 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.4
  ) {
    dynamicContainer.style.opacity = 0.5
    console.log('3-4')
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.4 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.45
  ) {
    console.log('4-5')
    dynamicContainer.style.opacity = 0.25
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.45 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.55
  ) {
    dynamicContainer.style.opacity = 0
    pageHeader.innerText = 'De theorie'
    console.log('mid top 3-4')

    basisImageDisplay = true

    basis.src = basisMenuUrlPage3
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = false
    sectionThreeView = true
    sectionFourView = false
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.55 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.65
  ) {
    dynamicContainer.style.opacity = 0
    pageHeader.innerText = 'De impact'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage4
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = false
    sectionThreeView = false
    sectionFourView = true
    console.log('mid bottom 3-4')
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.65 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.7
  ) {
    dynamicContainer.style.opacity = 0.25
    console.log('6-7')
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.7 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.8
  ) {
    dynamicContainer.style.opacity = 0.5
    console.log('7-8')
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.8 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.9
  ) {
    dynamicContainer.style.opacity = 0.75
    console.log('8-9')
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.9 &&
    scrolledHeight <
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight
  ) {
    dynamicContainer.style.opacity = 0.9
    console.log('9')
  }

  if (
    scrolledHeight >=
    page1.scrollHeight + page2.scrollHeight + page3.scrollHeight
  ) {
    console.log('Page 4')
    dynamicContainer.style.opacity = 1
    pageHeader.innerText = 'De impact'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage4
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = false
    sectionThreeView = false
    sectionFourView = true
    console.log('mid bottom 3-4')
  }
})
