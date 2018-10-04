import axios from 'axios'

const API_URL = "http://localhost:3000/api"

export const fetchAllRestaurants = () => {
  const body = {
    "query": "{ allRestaurants { id name description restaurant_type street city state zipcode created_at updated_at google_places_id google_lat google_lng google_types third_party_rating_id phone phone_2 yelp_url foursquare_url googleplaces_url zomato_url yelp_id foursquare_id zomato_id } }"
  }
  return axios.post(API_URL, body)
}

export const fetchNearbyRestaurants = (latLng, keyword, radius = "2000") => {
  const location = `${latLng.lat},${latLng.lng}`
  const type = "restaurant"
  const body = { location, radius, type, keyword }
  return axios.post(`${API_URL}/nearby`, body)
}

export const fetchRestaurantRating = (restaurant_id, platform) => {
  const body = { restaurant_id, platform }
  return axios.post(`${API_URL}/rating`, body)
}

export const fetchAddLocation = (name, address) => {
  const body = { name, address }
  return axios.post(`${API_URL}/locations/create`)
}

export const fetchDeleteLocation = (id) => {
  const body = { id }
  return axios.post(`${API_URL}/locations/delete`)
}
