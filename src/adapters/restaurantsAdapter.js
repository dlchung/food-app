import axios from 'axios'

export const fetchAllRestaurants = () => {
  const url = "http://localhost:3000/api"
  const body = { "query": "{ allRestaurants { name } }" }
  return axios.post(url, body)
}
