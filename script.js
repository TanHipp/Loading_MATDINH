const span = document.querySelectorAll('.container div span')
var index = 0

const removeAllBackground = () => {
  span.forEach((e) => {
    e.classList.remove('active')
  })
}

setInterval(() => {
  span[index].classList.add('active')
  index++
  if (index == span.length) {
    index = 1
    removeAllBackground()
  }
}, 50)
