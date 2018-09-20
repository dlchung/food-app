const initialState = { restaurants: [] }

const reducer = (state = initialState, action) => {
  // console.log("hit reducer", (action))
  switch(action.type) {
    case "GET_ALL_RESTAURANTS":
      // console.log(action.payload.restaurants.data.data.allRestaurants)
      return {
        ...state,
        restaurants: action.payload.restaurants.data.data.allRestaurants
      }

    default:
      return state
  }
}

export default reducer
