import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const fetchAllRestaurants = () => {
  const body = {
    "query": "{ allRestaurants { id name description restaurant_type street city state zipcode created_at updated_at googleplaces_id lat lng google_types third_party_rating_id phone phone_2 yelp_url foursquare_url googleplaces_url zomato_url yelp_id foursquare_id zomato_id } }"
  }
  return axios.post(API_URL, body)
}

export const fetchNearbyRestaurants = (latLng, keyword, radius = "1500") => {
  // const location = `${latLng.lat},${latLng.lng}`
  const lat = latLng.lat
  const lng = latLng.lng
  // const type = "restaurant"
  const type = "restaurants, All"
  const limit = 20
  const body = { lat, lng, radius, type, keyword, limit }
  return axios.post(`${API_URL}/nearby`, body)
}

export const fetchRestaurantRating = (restaurant_id, platform) => {
  const body = { restaurant_id, platform }
  return axios.post(`${API_URL}/rating`, body)
}
