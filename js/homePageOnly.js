const mainDiv = document.querySelector('.main-1')
const h1 = document.querySelector('.head-1')
const h2 = document.querySelector('.head-2')
const h3 = document.querySelector('.head-3')
const h4 = document.querySelector('.head-4')

const l1 = document.querySelector('.login-1')
const l2 = document.querySelector('.login-2')
const l3 = document.querySelector('.login-3')
const l4 = document.querySelector('.login-4')


const m1_1 = document.querySelector('#main_knop_clicker1_1')
const m2_1 = document.querySelector('#main_knop_clicker2_1')
const m3_1 = document.querySelector('#main_knop_clicker3_1')
const m4_1 = document.querySelector('#main_knop_clicker4_1')

const m1_2 = document.querySelector('#main_knop_clicker1_2')
const m2_2 = document.querySelector('#main_knop_clicker2_2')
const m3_2 = document.querySelector('#main_knop_clicker3_2')
const m4_2 = document.querySelector('#main_knop_clicker4_2')



const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

const heightTwoToFour =
  page2.scrollHeight + page3.scrollHeight + page4.scrollHeight

const heightThreeToFour = page3.scrollHeight + page4.scrollHeight

// console.log(document.querySelector('.main-1'))
mainDiv.addEventListener('scroll', () => {
  //   console.log(mainDiv.scrollHeight)

  const totalHeight = mainDiv.scrollHeight

  //   console.log(page1.scrollHeight)

  //   console.log(page2.scrollHeight)

  const scrolledHeight = mainDiv.scrollTop

  // console.log(scrolledHeight)

  if (scrolledHeight >= 0 && scrolledHeight <= page1.scrollHeight * 0.2) {
    console.log('Page 1')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.classList.remove('active')
    l3.classList.remove('active')
    h4.classList.remove('active')
    l4.classList.remove('active')

    h1.style.opacity = 1
    l1.style.opacity = 1
    h1.classList.add('active')
    l1.classList.add('active')

    l1.style.zIndex = 200
    l2.style.zIndex = 199
    l3.style.zIndex = 199
    l4.style.zIndex = 199

    m1_1.style.zIndex = 303
    m2_1.style.zIndex = 300
    m3_1.style.zIndex = 300
    m4_1.style.zIndex = 300

    m1_2.style.zIndex = 302
    m2_2.style.zIndex = 300
    m3_2.style.zIndex = 300
    m4_2.style.zIndex = 300



  }

  if (
    scrolledHeight > page1.scrollHeight * 0.2 &&
    scrolledHeight <= page1.scrollHeight * 0.4
  ) {
    console.log('0.4')
    h1.classList.remove('active')
    l1.classList.remove('active')
    h1.style.opacity = 0.4
    l1.style.opacity = 0.4

    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0
    l2.style.opacity = 0
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.4 &&
    scrolledHeight <= page1.scrollHeight * 0.6
  ) {
    console.log('0.6')
    h1.classList.remove('active')
    l1.classList.remove('active')
    h1.style.opacity = 0
    l1.style.opacity = 0

    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0
    l2.style.opacity = 0
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.6 &&
    scrolledHeight <= page1.scrollHeight * 0.8
  ) {
    console.log('0.8')
    h1.classList.remove('active')
    l1.classList.remove('active')
    h1.style.opacity = 0
    l1.style.opacity = 0

    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0.1
    l2.style.opacity = 0.1
  }

  if (
    scrolledHeight > page1.scrollHeight * 0.8 &&
    scrolledHeight < page1.scrollHeight
  ) {
    console.log('1')
    h1.classList.remove('active')
    l1.classList.remove('active')
    h1.style.opacity = 0
    l1.style.opacity = 0

    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0.6
    l2.style.opacity = 0.6
  }

  if (
    scrolledHeight >= page1.scrollHeight &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.2 // 500 < 500 + 100
  ) {
    console.log('page 2')

    h1.classList.remove('active')
    l1.classList.remove('active')

    h3.classList.remove('active')
    l3.classList.remove('active')

    h4.classList.remove('active')
    l4.classList.remove('active')

    h2.style.opacity = 1
    l2.style.opacity = 1
    h2.classList.add('active')
    l2.classList.add('active')


    l1.style.zIndex = 199
    l2.style.zIndex = 200
    l3.style.zIndex = 199
    l4.style.zIndex = 199


    m1_1.style.zIndex = 300
    m2_1.style.zIndex = 303
    m3_1.style.zIndex = 300
    m4_1.style.zIndex = 300

    m1_2.style.zIndex = 300
    m2_2.style.zIndex = 302
    m3_2.style.zIndex = 300
    m4_2.style.zIndex = 300



  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.2 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.4
  ) {
    console.log('0.4')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0.4
    l2.style.opacity = 0.4

    h3.classList.remove('active')
    l3.classList.remove('active')
    h3.style.opacity = 0
    l3.style.opacity = 0
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.4 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.6
  ) {
    console.log('0.6')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0
    l2.style.opacity = 0

    h3.classList.remove('active')
    l3.classList.remove('active')
    h3.style.opacity = 0
    l3.style.opacity = 0
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.6 &&
    scrolledHeight <= page1.scrollHeight + page2.scrollHeight * 0.8
  ) {
    console.log('0.8')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0
    l2.style.opacity = 0

    h3.classList.remove('active')
    l3.classList.remove('active')
    h3.style.opacity = 0.1
    l3.style.opacity = 0.1
  }

  if (
    scrolledHeight > page1.scrollHeight + page2.scrollHeight * 0.8 &&
    scrolledHeight < page1.scrollHeight + page2.scrollHeight
  ) {
    console.log('1')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h2.style.opacity = 0
    l2.style.opacity = 0

    h3.classList.remove('active')
    l3.classList.remove('active')
    h3.style.opacity = 0.6
    l3.style.opacity = 0.6
  }

  if (
    scrolledHeight >= page1.scrollHeight + page2.scrollHeight &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.2
  ) {
    // 500 < 500 + 100) {
    console.log('page 3')
    h1.classList.remove('active')
    l1.classList.remove('active')

    h2.classList.remove('active')
    l2.classList.remove('active')

    h4.classList.remove('active')
    l4.classList.remove('active')

    h3.style.opacity = 1
    l3.style.opacity = 1
    h3.classList.add('active')
    l3.classList.add('active')


    l1.style.zIndex = 199
    l2.style.zIndex = 199
    l3.style.zIndex = 200
    l4.style.zIndex = 199


    m1_1.style.zIndex = 300
    m2_1.style.zIndex = 300
    m3_1.style.zIndex = 303
    m4_1.style.zIndex = 300

    m1_2.style.zIndex = 300
    m2_2.style.zIndex = 30
    m3_2.style.zIndex = 302
    m4_2.style.zIndex = 300

  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.2 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.4
  ) {
    console.log('0.4')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.style.opacity = 0.4
    l3.style.opacity = 0.4

    h3.classList.remove('active')
    l3.classList.remove('active')
    h4.style.opacity = 0
    l4.style.opacity = 0
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.4 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.6
  ) {
    console.log('0.6')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.style.opacity = 0
    l3.style.opacity = 0

    h3.classList.remove('active')
    l3.classList.remove('active')
    h4.style.opacity = 0
    l4.style.opacity = 0
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.6 &&
    scrolledHeight <=
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.8
  ) {
    console.log('0.8')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.style.opacity = 0
    l3.style.opacity = 0

    h3.classList.remove('active')
    l3.classList.remove('active')
    h4.style.opacity = 0.1
    l4.style.opacity = 0.1
  }

  if (
    scrolledHeight >
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight * 0.8 &&
    scrolledHeight <
      page1.scrollHeight + page2.scrollHeight + page3.scrollHeight
  ) {
    console.log('1')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.style.opacity = 0
    l3.style.opacity = 0

    h3.classList.remove('active')
    l3.classList.remove('active')
    h4.style.opacity = 0.5
    l4.style.opacity = 0.5
  }

  if (
    scrolledHeight >=
    page1.scrollHeight + page2.scrollHeight + page3.scrollHeight
  ) {
    console.log('4')
    h1.classList.remove('active')
    l1.classList.remove('active')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.classList.remove('active')
    l3.classList.remove('active')

    h4.style.opacity = 1
    l4.style.opacity = 1
    h4.classList.add('active')
    l4.classList.add('active')

    l1.style.zIndex = 199
    l2.style.zIndex = 199
    l3.style.zIndex = 199
    l4.style.zIndex = 200


    m1_1.style.zIndex = 300
    m2_1.style.zIndex = 300
    m3_1.style.zIndex = 300
    m4_1.style.zIndex = 303

    m1_2.style.zIndex = 300
    m2_2.style.zIndex = 300
    m3_2.style.zIndex = 300
    m4_2.style.zIndex = 302

  }
})
