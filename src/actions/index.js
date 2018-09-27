import { fetchAllRestaurants, fetchNearbyRestaurants } from '../adapters/restaurantsAdapter'

export const getAllRestaurants = () => {
  return (dispatch) => {
    fetchAllRestaurants()
      .then(resp => {
        // console.log("HELLO", resp)
        dispatch(setRestaurants(resp))
      })
  }
}

export const getNearbyRestaurants = (latLng) => {
  return (dispatch) => {
    fetchNearbyRestaurants(latLng)
      .then(resp => {
        dispatch(setNearbyRestaurants(resp.data))
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

export const setKeywords = (keywords) => {
  return {
    type: 'SET_KEYWORDS',
    payload: {
      keywords
    }
  }
}

const setNearbyRestaurants = (restaurants) => {
  return {
    type: 'GET_NEARBY_RESTAURANTS',
    payload: {
      restaurants
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
