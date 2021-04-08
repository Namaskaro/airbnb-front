import axios from 'axios'

const getCountries = () => {
  return axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
}

export default {
  getCountries
}

// import axios from 'axios'

// const options = {
//   method: 'GET',
//   url: 'https://restcountries-v1.p.rapidapi.com/all',
//   headers: {
//     'x-rapidapi-key': '916ea4ab16mshb3b1c5ffcaecfc5p13dac7jsn059e586b5253',
//     'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com'
//   }
// }

// axios
//   .request(options)
//   .then(function(response) {
//     response.data
//   })
//   .catch(function(error) {
//     console.error(error)
//   })
