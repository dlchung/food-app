const initialState = { restaurants: [] }

const reducer = (state = initialState, action) => {
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
      return {
        ...state,
        selectedLocation: action.payload.selectedLocation,
        latLng: action.payload.latLng
      }

    case "SET_KEYWORDS":
      return {
        ...state,
        keywords: action.payload.keywords
      }

    default:
      return state
  }
}

export default reducer
