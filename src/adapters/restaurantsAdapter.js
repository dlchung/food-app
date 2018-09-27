import axios from 'axios'

const API_URL = "http://localhost:3000/api"

export const fetchAllRestaurants = () => {
  const body = { "query": "{ allRestaurants { id name description restaurant_type street city state zipcode created_at updated_at google_places_id google_lat google_lng google_types } }" }
  return axios.post(API_URL, body)
}

export const fetchNearbyRestaurants = (latLng) => {
  const location = `${latLng.lat},${latLng.lng}`
  const radius = "1000"
  const type = "restaurant"
  const body = { location, radius, type }
  return axios.post(`${API_URL}/nearby`, body)
}

export const fetchRestaurantRatings = (restaurant_id = null) => {
  const ratings = {
    yelp: 4.3,
    foursquare: 4.2,
    tripadvisor: 3.5,
    seamless: 3.9
  }

  return ratings
}
