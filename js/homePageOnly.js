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

// Слово blueZoneImage больше нигде нет, для чего создано?
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

let basisMenuUrlPage1 = `./images/1_basis.gif`
let basisMenuUrlPage2 = `./images/2_basis.gif`
let basisMenuUrlPage3 = `./images/3_basis.gif`
let basisMenuUrlPage4 = `./images/4_basis.gif`

let startMenuUrlPage1 = `./images/1_start_menu.gif`
let stopMenuUrlPage1 = `./images/1_stop_menu.gif`

let startMenuUrlPage2 = `./images/2_start_menu.gif`
let stopMenuUrlPage2 = `./images/2_stop_menu.gif`

let startMenuUrlPage3 = `./images/3_start_menu.gif`
let stopMenuUrlPage3 = `./images/3_stop_menu.gif`

let startMenuUrlPage4 = `./images/4_start_menu.gif`
let stopMenuUrlPage4 = `./images/4_stop_menu.gif`

const linkButton1 = document.querySelector('.linkButton1')
const linkButton2 = document.querySelector('.linkButton2')
const linkButton3 = document.querySelector('.linkButton3')

const imageResult1 = document.querySelector('.linkResult1')
const imageResult2 = document.querySelector('.linkResult2')
const imageResult3 = document.querySelector('.linkResult3')



const linkImageResult1_1 = './images/LinkResult1_1.gif'
const linkImageResult1_2 = './images/LinkResult1_2.gif'
const linkImageResult1_3 = './images/LinkResult1_3.gif'

const linkImageResult2_1 = './images/LinkResult2_1.gif'
const linkImageResult2_2 = './images/LinkResult2_2.gif'
const linkImageResult2_3 = './images/LinkResult2_3.gif'

const linkImageResult3_1 = './images/LinkResult3_1.gif'
const linkImageResult3_2 = './images/LinkResult3_2.gif'
const linkImageResult3_3 = './images/LinkResult3_3.gif'

const linkImageResult4_1 = './images/LinkResult4_1.gif'
const linkImageResult4_2 = './images/LinkResult4_2.gif'
const linkImageResult4_3 = './images/LinkResult4_3.gif'



const closeLink = document.querySelector('.closeLink')
closeLink.disabled = true

function linkImageSource(link1, link2, link3) {
  imageResult1.src = link1
  imageResult2.src = link2
  imageResult3.src = link3
}

function displayCurrentDescription(current, image2, image3) {
  current.style.opacity = 1
  current.style.zIndex = 3
  image2.style.opacity = 0
  image3.style.opacity = 0
}

let isDescOpen = false
let closeButtonHeight1 = 340
let closeButtonHeight2 = 320
let closeButtonHeight3 = 200

let firstExpandButton = 165
let secondExpandButton = 130
let thirdExpandButton = 95

function changeDefaultExpandPositions(firstValue, secondValue, thirdValue) {
  firstExpandButton = firstValue
  secondExpandButton = secondValue
  thirdExpandButton = thirdValue
}

function setExpandButtonsPosition(position1, position2, position3) {
  linkButton1.style.bottom = `${position1}px`
  linkButton2.style.bottom = `${position2}px`
  linkButton3.style.bottom = `${position3}px`
}

function setCloseButtonPositions(position1, position2, position3) {
  closeButtonHeight1 = position1
  closeButtonHeight2 = position2
  closeButtonHeight3 = position3
}

function setCloseButtonHeight(height) {
  closeLink.style.bottom = `${height}px`
  closeLink.disabled = false
  closeLink.style.zIndex = 3
}

closeLink.addEventListener('click', () => {
  resetDescriptions()
  basis.style.zIndex = 10
})

linkButton1.addEventListener('click', (e) => {
  
  displayCurrentDescription(imageResult1, imageResult2, imageResult3)
  isDescOpen = true
<<<<<<< HEAD
  setCloseButtonHeight(linkHeight1)
  basis.style.zIndex = -3
=======
  setCloseButtonHeight(closeButtonHeight1)
  setExpandButtonsPosition(165, 130, 95)
>>>>>>> cbc775f8d9f9253b59b2e609af3dcc8b9e0ebf6d
})

linkButton2.addEventListener('click', () => {
  displayCurrentDescription(imageResult2, imageResult1, imageResult3)
  isDescOpen = true
<<<<<<< HEAD
  setCloseButtonHeight(linkHeight2)
  basis.style.zIndex = -3
=======
  setCloseButtonHeight(closeButtonHeight2)
  setExpandButtonsPosition(360, 130, 95)
>>>>>>> cbc775f8d9f9253b59b2e609af3dcc8b9e0ebf6d
})

linkButton3.addEventListener('click', () => {
  displayCurrentDescription(imageResult3, imageResult1, imageResult2)
  isDescOpen = true
<<<<<<< HEAD
  setCloseButtonHeight(linkHeight3)
  basis.style.zIndex = -3
=======
  setCloseButtonHeight(closeButtonHeight3)
  setExpandButtonsPosition(280, 240, 95)
>>>>>>> cbc775f8d9f9253b59b2e609af3dcc8b9e0ebf6d
})

function resetDescriptions() {
  imageResult1.style.opacity = 0
  imageResult2.style.opacity = 0
  imageResult3.style.opacity = 0

  imageResult1.style.zIndex = 0
  imageResult1.style.zIndex = 0
  imageResult1.style.zIndex = 0

  closeLink.disabled = false
  closeLink.style.zIndex = -3
  setExpandButtonsPosition(
    firstExpandButton,
    secondExpandButton,
    thirdExpandButton,
  )
}

// 4 knops which appear only when start button is clicked

const oneOfFour1 = document.querySelector('.oneOfFour1')
const oneOfFour2 = document.querySelector('.oneOfFour2')
const oneOfFour3 = document.querySelector('.oneOfFour3')
const oneOfFour4 = document.querySelector('.oneOfFour4')

function hideFourLinkButtons() {
  oneOfFour1.style.zIndex = -3
  oneOfFour2.style.zIndex = -3
  oneOfFour3.style.zIndex = -3
  oneOfFour4.style.zIndex = -3
}

function unhideFourLinkButtons() {
  oneOfFour1.style.zIndex = 10
  oneOfFour2.style.zIndex = 10
  oneOfFour3.style.zIndex = 10
  oneOfFour4.style.zIndex = 10
}


// if we click them, they open links depending on which page they are in
oneOfFour1.addEventListener('click', () => {
  if (sectionOneView) {
  window.open("./html_pages/rijles.html")
  }
  if (sectionTwoView) {
  window.open("./html_pages/locatie.html")
  }
  if (sectionThreeView) {
  window.open("./html_pages/theorie.html")
  }
  if (sectionFourView) {
  window.open("./html_pages/waarom.html")
  }
})

oneOfFour2.addEventListener('click', () => {
  if (sectionOneView) {
  window.open("./html_pages/versneller.html")
  }
  if (sectionTwoView) {
  window.open("./html_pages/simulator.html")
  }
  if (sectionThreeView) {
  window.open("./html_pages/reserveren.html")
  }
  if (sectionFourView) {
  window.open("./html_pages/justdiggit.html")
  }
})

oneOfFour3.addEventListener('click', () => {
  if (sectionOneView) {
  window.open("./html_pages/versneller.html")
  }
  if (sectionTwoView) {
  window.open("./html_pages/simulator.html")
  }
  if (sectionThreeView) {
  window.open("./html_pages/reserveren.html")
  }
  if (sectionFourView) {
  window.open("./html_pages/justdiggit.html")
  }
})

oneOfFour4.addEventListener('click', () => {
  if (sectionOneView) {
  window.open("./html_pages/versneller.html")
  }
  if (sectionTwoView) {
  window.open("./html_pages/simulator.html")
  }
  if (sectionThreeView) {
  window.open("./html_pages/reserveren.html")
  }
  if (sectionFourView) {
  window.open("./html_pages/justdiggit.html")
  }
})

// Mainbutton animations
const mainButton = document.querySelector('.mainButton')
mainButton.addEventListener('click', (e) => {
  
  if (sectionOneView) {
    if (basisImageDisplay) {
      if (isDescOpen) {
        resetDescriptions()
      }

      hideLinkButtons(true)
      unhideFourLinkButtons()

      console.log(e.target)
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
      hideFourLinkButtons()
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
        hideLinkButtons(false)
      }, 2050)
    }
  }

  if (sectionTwoView) {
    console.log('we are clicking on section two')

    if (basisImageDisplay) {
      if (isDescOpen) {
        resetDescriptions()
      }
      hideLinkButtons(true)
      unhideFourLinkButtons()
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
      hideFourLinkButtons()
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
        hideLinkButtons(false)
        hideFourLinkButtons()
      }, 2050)
    }
  }

  if (sectionThreeView) {
    if (isDescOpen) {
      resetDescriptions()
    }
    console.log('we are clicking on section three')

    if (basisImageDisplay) {
      hideLinkButtons(true)
      unhideFourLinkButtons()
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
      hideFourLinkButtons()
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
        hideLinkButtons(false)
        hideFourLinkButtons()
      }, 2050)
    }
  }

  if (sectionFourView) {
    if (isDescOpen) {
      resetDescriptions()
    }
    console.log('we are clicking on section four')

    if (basisImageDisplay) {
      hideLinkButtons(true)
      unhideFourLinkButtons()
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
      hideFourLinkButtons()
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
        hideLinkButtons(false)
        hideFourLinkButtons()
      }, 2050)
    }
  }
})

mainDiv.addEventListener('scroll', () => {
  const scrolledHeight = mainDiv.scrollTop
  hideFourLinkButtons()

  // basisMenuUrlPage1 = `./images/1_basis.gif?a=${Math.random()}`

  if (scrolledHeight >= 0 && scrolledHeight <= page1.scrollHeight * 0.1) {
    dynamicContainer.style.opacity = 1
    linkImageSource(linkImageResult1_1, linkImageResult1_2, linkImageResult1_3)
    console.log('Page 1')

    hideLinkButtons(false)
  

    resetDescriptions()
    setCloseButtonPositions(340, 320, 200)

    pageHeader.innerText = 'De rijopleiding'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage1
    basis.style.zIndex = 2

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
    resetDescriptions()
    basis.style.zIndex = 2
    hideLinkButtons(false)
    console.log('9')
  }

  if (
    scrolledHeight >= page1.scrollHeight &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.2 // 500 < 500 + 100
  ) {
    console.log('page 2')
    dynamicContainer.style.opacity = 1
    linkImageSource(linkImageResult2_1, linkImageResult2_2, linkImageResult2_3)
    hideLinkButtons(false)
    resetDescriptions()
    setCloseButtonPositions(540, 520, 400)
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
    basis.style.zIndex = 2
    hideLinkButtons(false)
    resetDescriptions()
  }

  if (
    scrolledHeight >= page1.scrollHeight + page2.scrollHeight &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.2
  ) {
    console.log('page 3')
    dynamicContainer.style.opacity = 1
    linkImageSource(linkImageResult3_1, linkImageResult3_2, linkImageResult3_3)
    hideLinkButtons(false)
    resetDescriptions()
    setCloseButtonPositions(340, 320, 300)
    pageHeader.innerText = 'De theorie'

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
    basis.style.zIndex = 2
    hideLinkButtons(false)
    resetDescriptions()
  }

  if (
    scrolledHeight >=
    page1.scrollHeight + page2.scrollHeight + page3.scrollHeight
  ) {
    console.log('Page 4')
    dynamicContainer.style.opacity = 1
    linkImageSource(linkImageResult4_1, linkImageResult4_2, linkImageResult4_3)
    hideLinkButtons(false)
    resetDescriptions()
    setCloseButtonPositions(240, 220, 200)
    pageHeader.innerText = 'De impact'

    basisImageDisplay = true

    basis.src = basisMenuUrlPage4
    basis.style.zIndex = 2

    sectionOneView = false
    sectionTwoView = false
    sectionThreeView = false
    sectionFourView = true
  }
})

function hideLinkButtons(buttonStatus) {
  if (buttonStatus == true) {
    linkButton1.style.zIndex = -1
    linkButton2.style.zIndex = -1
    linkButton3.style.zIndex = -1
  } else {
    linkButton1.style.zIndex = 3
    linkButton2.style.zIndex = 3
    linkButton3.style.zIndex = 3
  }
}
