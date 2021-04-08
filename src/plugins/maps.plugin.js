export default function makeAutoComplete(input) {
  const autoComplete = new google.maps.places.Autocomplete(input, {
    types: ['(cities)']
  })
  autoComplete.addListener('place_changed', () => {
    const place = autoComplete.getPlace()
    input.dispatchEvent(new CustomEvent('changed', {detail: place}))
  })
}

export const geocoder = new google.maps.Geocoder()
