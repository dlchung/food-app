import axios from 'axios'

export const fetchAllRestaurants = () => {
  const url = "http://localhost:3000/api"
  const body = { "query": "{ allRestaurants { id name } }" }
  return axios.post(url, body)
}

export const fetchNearbyRestaurants = (selectedLocation) => {
  const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}`
}
