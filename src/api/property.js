import axios from 'axios'
const appId = 'ML2ZRMDKHV'
const apiKey = '6b38c12a01a7f377c600b7eb9bb610d0'
const headers = {
  'X-Algolia-API-Key': apiKey,
  'X-Algolia-Application-Id': appId
}

async function getHomesByLocation(lat, lng) {
  try {
    const response = await axios
      .post(`https://ML2ZRMDKHV-dsn.algolia.net/1/indexes/homes/query`, {
        headers,
        body: JSON.stringify({
          // aroundLatLng: `${lat},${lng}`,
          hitsPerPage: 10,
          attributesToHighlight: []
        })
      })
      .then(response => response)
    return response.json
  } catch (error) {
    console.log(error)
  }
}

export default {
  getHomesByLocation
}
