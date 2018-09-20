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

const setRestaurants = (restaurants) => {
  return {
    type: 'GET_ALL_RESTAURANTS',
    payload: {
      restaurants
    }
  }
}
