const initialState = {
  restaurants: [],
  isFetching: true
}

const reducer = (state = initialState, action) => {
  // console.log("hit switch", action)
  switch(action.type) {
    case "GET_ALL_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload.restaurants.data.data.allRestaurants,
        isFetching: false
      }

    case "GET_NEARBY_RESTAURANTS":
      // console.log("hit reducer", action)
      return {
        ...state,
        restaurants: action.payload.restaurants,
        isFetching: false
      }

    case "SET_LOCATION":
      console.log("Location is now:", action.payload.latLng)
      return {
        ...state,
        latLng: action.payload.latLng
      }

    case "SET_KEYWORDS":
      return {
        ...state,
        keyword: action.payload.keyword,
        allowResults: action.payload.allowResults
      }

    case "ALLOW_RESULTS":
      return {
        ...state,
        allowResults: action.payload.allowResults
      }

    case "GET_LOCATIONS":
      return {
        ...state,
        locations: action.payload.locations
      }

    case "SET_CURRENT_LOCATION":
      return {
        ...state,
        currentLocation: action.payload.currentLocation
      }

    case "SET_SEARCH_LOADING":
      // console.log("hit reducer", action)
      return {
        ...state,
        isFetching: action.payload.isFetching
      }

    default:
      return state
  }
}

export default reducer
