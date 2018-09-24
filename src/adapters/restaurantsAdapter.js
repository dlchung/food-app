import axios from 'axios'

const API_URL = "http://localhost:3000/api"

export const fetchAllRestaurants = () => {
  const body = { "query": "{ allRestaurants { id name } }" }
  return axios.post(API_URL, body)
}

export const fetchNearbyRestaurants = (latLng) => {
  const location = `${latLng.lat},${latLng.lng}`
  const radius = "1000"
  const type = "restaurant"
  const body = { location, radius, type }
  return axios.post(`${API_URL}/nearby`, body)
}
