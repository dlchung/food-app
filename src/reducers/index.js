const initialState = { restaurants: [] }

const reducer = (state = initialState, action) => {
  // console.log("hit switch", action)
  switch(action.type) {
    case "GET_ALL_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload.restaurants.data.data.allRestaurants
      }

    case "GET_NEARBY_RESTAURANTS":
      // console.log("hit reducer", action)
      return {
        ...state,
        restaurants: action.payload.restaurants
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
        keyword: action.payload.keyword
      }

    case "ALLOW_GET_RESULTS":
      return {
        ...state,
        getResults: action.payload.getResults
      }

    case "GET_LOCATIONS":
      return {
        ...state,
        locations: action.payload.locations
      }

    default:
      return state
  }
}

export default reducer
