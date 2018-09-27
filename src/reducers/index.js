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
      // console.log("hit reducer")
      return {
        ...state,
        latLng: action.payload.latLng
      }

    case "SET_KEYWORDS":
      return {
        ...state,
        keyword: action.payload.keyword
      }

    default:
      return state
  }
}

export default reducer
