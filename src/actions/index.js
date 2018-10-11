import { fetchAllRestaurants, fetchNearbyRestaurants } from '../adapters/restaurantsAdapter'
import { fetchLocations } from '../adapters/locationsAdapter'

export const getAllRestaurants = () => {
  console.log("getAllRestaurants")
  return (dispatch) => {
    dispatch(isFetching(true))
    fetchAllRestaurants()
      .then(resp => {
        // console.log("HELLO", resp)
        dispatch(setRestaurants(resp))
      })
  }
}

export const getNearbyRestaurants = (latLng, keyword, clear = false) => {
  console.log("getNearbyRestaurants")
  return (dispatch) => {
    dispatch(isFetching(true))
    fetchNearbyRestaurants(latLng, keyword)
      .then(resp => {
        dispatch(setNearbyRestaurants(resp.data))
      })
  }
}

export const clearRestaurants = () => {
  console.log("clearing restaurants")
  return (dispatch) => {
    dispatch(setRestaurants([]))
  }
}

export const setLocation = (latLng) => {
  // console.log("hit action", latLng)
  let coordinates = {}
  coordinates = Object.assign({}, latLng)
  return {
    type: "SET_LOCATION",
    payload: {
      latLng: coordinates // {lat: x, lng: y}
    }
  }
}

export const getLocations = () => {
  console.log("getting locations")
  return (dispatch) => {
    fetchLocations()
      .then(resp => {
        dispatch(setLocations(resp.data))
      })
  }
}

// Immediate location of user
export const setCurrentLocation = (latLng) => {
  return {
    type: "SET_CURRENT_LOCATION",
    payload: {
      currentLocation: latLng
    }
  }
}

export const setKeywords = (keyword, allowResults = true) => {
  return {
    type: "SET_KEYWORDS",
    payload: {
      keyword,
      allowResults
    }
  }
}

// export const setSearchLoading = (loading) => {
//   console.log("hit action setSearchLoading", loading)
//   return {
//     type: "SET_SEARCH_LOADING",
//     payload: {
//       searchLoading: loading
//     }
//   }
// }

export const setAllowResults = (allowResults) => {
  return {
    type: "ALLOW_RESULTS",
    payload: {
      allowResults
    }
  }
}

const isFetching = (isFetching) => {
  // console.log("isFetching action", isFetching)
  return {
    type: "SET_SEARCH_LOADING",
    payload: {
      isFetching
    }
  }
}

const setNearbyRestaurants = (restaurants) => {
  return {
    type: "GET_NEARBY_RESTAURANTS",
    payload: {
      restaurants
    }
  }
}

const setRestaurants = (restaurants) => {
  return {
    type: "GET_ALL_RESTAURANTS",
    payload: {
      restaurants
    }
  }
}

const setLocations = (locations) => {
  return {
    type: "GET_LOCATIONS",
    payload: {
      locations
    }
  }
}
