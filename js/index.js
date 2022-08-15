const logos = document.querySelectorAll('.logo')
const blueContainers = document.querySelectorAll('.blue_container')

function scrollHandler(e) {
  var atSnappingPoint = e.target.scrollLeft % e.target.offsetWidth === 0
  var timeOut = atSnappingPoint ? 0 : 150 //see notes

  clearTimeout(e.target.scrollTimeout) //clear previous timeout

  e.target.scrollTimeout = setTimeout(function () {
    console.log('Scrolling stopped!')
    const sections = document.querySelectorAll('.logo')
    console.log(sections)
    const options = {
      root: null,
      threshold: 0,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }
        console.log(entry)
        if (entry.target.classList.contains('inverse')) {
          entry.target.classList.remove('inverse')
          setTimeout(() => {
            entry.target.classList.add('inverse')
          }, 1000)
        } else {
          setTimeout(() => {
            entry.target.classList.add('inverse')
          }, 500)
        }
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })

    console.log(blueContainers)
    const settings = {
      root: null,
      threshold: 0,
      rootMargin: '0px',
    }

    const watcher = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }
        console.log(entry)
        if (entry.target.classList.contains('inverse')) {
          entry.target.classList.remove('inverse')
          setTimeout(() => {
            entry.target.classList.add('inverse')
          }, 1000)
        } else {
          setTimeout(() => {
            entry.target.classList.add('inverse')
          }, 500)
        }
      })
    }, settings)

    blueContainers.forEach((section) => {
      watcher.observe(section)
    })
  }, timeOut)
}

const scroller = document.getElementById('scroller')

scroller.addEventListener('scroll', scrollHandler)

console.log('isScrolling')
