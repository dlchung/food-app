import axios from 'axios'

const API_URL = "http://localhost:3000/api"

export const fetchAddLocation = (name, address) => {
  const body = { name, address }
  return axios.post(`${API_URL}/locations/create`, body)
}

export const fetchDeleteLocation = (id) => {
  const body = { id }
  return axios.post(`${API_URL}/locations/delete`, body)
}

export const fetchLocations = () => {
  return axios.get(`${API_URL}/locations/get_locations`)
}
