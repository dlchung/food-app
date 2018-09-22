const initialState = { restaurants: [] }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_ALL_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload.restaurants.data.data.allRestaurants
      }

    case "SET_LOCATION":
      return {
        ...state,
        selectedLocation: action.payload.selectedLocation,
        latLng: action.payload.latLng
      }

    default:
      return state
  }
}

export default reducer
