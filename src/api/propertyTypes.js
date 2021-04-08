import axios from 'axios'

const getPropertyTypes = () => {
  const options = {
    method: 'GET',
    url: 'https://mashvisor-api.p.rapidapi.com/city/list',
    params: {state: 'FL', page: '1', items: '10'},
    headers: {
      'x-rapidapi-key': '916ea4ab16mshb3b1c5ffcaecfc5p13dac7jsn059e586b5253',
      'x-rapidapi-host': 'mashvisor-api.p.rapidapi.com'
    }
  }
  return axios
    .request(options)
    .then(response => response.data.content.list)
    .catch(error => {
      console.error(error)
    })
}

export default {
  getPropertyTypes
}
