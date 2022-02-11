const getWeatherData = location => {
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  icon.innerHTML= ''
  fetch(`/weather?address=${location}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
        icon.innerHTML = `<img src="${data.icon}" alt="weather icon">`
      }
    })
  })
}



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')
const icon = document.querySelector('.weather-icon')

messageOne.textContent = ''


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  getWeatherData(location)
})


