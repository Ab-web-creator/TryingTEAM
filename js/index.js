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

const blueContainers = document.querySelectorAll('.blue_container')
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
