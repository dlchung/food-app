const initialState = { restaurants: [] }

const reducer = (state = initialState, action) => {
  // console.log("hit reducer", (action))
  switch(action.type) {
    case "GET_ALL_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload.restaurants.data.data.allRestaurants
      }

    case "SET_LOCATION":
      console.log("hit reducer")
      return {
        ...state,
        selectedLocation: action.payload.location
      }

    default:
      return state
  }
}

export default reducer
