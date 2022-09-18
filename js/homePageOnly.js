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
const blueZoneImage = document.querySelector('.blueZoneImage')

const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

let basisImageDisplay = true
let starImageDisplay = false
let stopImageDisplay = false

let sectionOneView = true
let sectionTwoView = false
let sectionThreeView = false
let sectionFourView = false

let basisMenuUrlPage1 = `./images/1_basis.gif?a=${Math.random()}`
let startMenuUrlPage1 = `./images/1_start_menu.gif?a=${Math.random()}`
let stopMenuUrlPage1

let basisMenuUrlPage2 = `./images/2_basis.gif?a=${Math.random()}`
let startMenuUrlPage2 = `./images/2_start_menu.gif?a=${Math.random()}`
let stopMenuUrlPage2

let basisMenuUrlPage3 = `./images/3_basis.gif?a=${Math.random()}`
let startMenuUrlPage3 = `./images/3_start_menu.gif?a=${Math.random()}`
let stopMenuUrlPage3

let basisMenuUrlPage4 = `./images/4_basis.gif?a=${Math.random()}`
let startMenuUrlPage4 = `./images/4_start_menu.gif?a=${Math.random()}`
let stopMenuUrlPage4

const mainButton = document.querySelector('.mainButton')
mainButton.addEventListener('click', () => {
  if (sectionOneView) {
    if (basisImageDisplay) {
      blueZoneImage.src = startMenuUrlPage1
      basisImageDisplay = false
      starImageDisplay = true
      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)

      stopMenuUrlPage1 = `./images/1_stop_menu.gif?a=${Math.random()}`
    } else {
      blueZoneImage.src = stopMenuUrlPage1
      basisImageDisplay = true
      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    }
  }

  if (sectionTwoView) {
    console.log('we are clicking on section two')
    if (basisImageDisplay) {
      blueZoneImage.src = startMenuUrlPage2
      basisImageDisplay = false
      starImageDisplay = true
      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)

      stopMenuUrlPage2 = `./images/2_stop_menu.gif?a=${Math.random()}`
    } else {
      blueZoneImage.src = stopMenuUrlPage2
      basisImageDisplay = true
      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    }
  }

  if (sectionThreeView) {
    console.log('we are clicking on section three')
    if (basisImageDisplay) {
      blueZoneImage.src = startMenuUrlPage3
      basisImageDisplay = false
      starImageDisplay = true
      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)

      stopMenuUrlPage3 = `./images/3_stop_menu.gif?a=${Math.random()}`
    } else {
      blueZoneImage.src = stopMenuUrlPage3
      basisImageDisplay = true
      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)
    }
  }

  if (sectionFourView) {
    console.log('we are clicking on section four')
    if (basisImageDisplay) {
      blueZoneImage.src = startMenuUrlPage4
      basisImageDisplay = false
      starImageDisplay = true
      mainButton.disabled = true
      setTimeout(() => {
        mainButton.disabled = false
      }, 2450)

      stopMenuUrlPage4 = `./images/4_stop_menu.gif?a=${Math.random()}`
    } else {
      blueZoneImage.src = stopMenuUrlPage4
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

  if (scrolledHeight >= 0 && scrolledHeight <= page1.scrollHeight * 0.1) {
    dynamicContainer.style.opacity = 1
    console.log('Page 1')
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
    pageHeader.innerText = 'De rijopleiding'
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.45 &&
    scrolledHeight <= page1.scrollHeight * 0.55
  ) {
    dynamicContainer.style.opacity = 0

    basisImageDisplay = true
    blueZoneImage.src = basisMenuUrlPage1

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

    basisImageDisplay = true
    blueZoneImage.src = basisMenuUrlPage2

    sectionOneView = false
    sectionTwoView = true
    sectionThreeView = false
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.65 &&
    scrolledHeight <= page1.scrollHeight * 0.7
  ) {
    pageHeader.innerText = 'De simulator'
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
    pageHeader.innerText = 'De simulator'
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.45 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.55
  ) {
    dynamicContainer.style.opacity = 0
    console.log('mid top 2-3')

    basisImageDisplay = true
    blueZoneImage.src = basisMenuUrlPage2

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

    console.log('mid bottom 2-3')
    basisImageDisplay = true
    blueZoneImage.src = basisMenuUrlPage3

    sectionOneView = false
    sectionTwoView = false
    sectionThreeView = true
    sectionFourView = false
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.65 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.7
  ) {
    pageHeader.innerText = 'De theorie'
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
    pageHeader.innerText = 'De theorie'
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.45 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.55
  ) {
    dynamicContainer.style.opacity = 0
    console.log('mid top 3-4')

    basisImageDisplay = true
    blueZoneImage.src = basisMenuUrlPage3

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

    basisImageDisplay = true
    blueZoneImage.src = basisMenuUrlPage4

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
    pageHeader.innerText = 'De impact'
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
  }
})
