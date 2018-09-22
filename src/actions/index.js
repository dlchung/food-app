import { fetchAllRestaurants } from '../adapters/restaurantsAdapter'

export const getAllRestaurants = () => {
  return (dispatch) => {
    fetchAllRestaurants()
      .then(resp => {
        // console.log("HELLO", resp)
        dispatch(setRestaurants(resp))
      })
  }
}

export const setLocation = (selectedLocation, latLng) => {
  return (dispatch) => {
    let coordinates = {}
    latLng.then(data => {
      coordinates = Object.assign({}, data)
      dispatch({
        type: 'SET_LOCATION',
        payload: {
          selectedLocation, latLng: coordinates
        }
      })
    })
  }
}

const setRestaurants = (restaurants) => {
  return {
    type: 'GET_ALL_RESTAURANTS',
    payload: {
      restaurants
    }
  }
}
