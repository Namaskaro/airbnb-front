import axios from 'axios'

export const geocode = async () => {
  const location = 'Saratov'
  return await axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyCiNKAJhDqe00qB5kKoWwqUZqsldEVJGHw'
      }
    })
    .then(response => {
      console.log(response)
    })
}
