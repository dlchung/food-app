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

export const setLocation = (location) => {
  console.log("hit action")
  return {
    type: 'SET_LOCATION',
    payload: {
      location
    }
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
