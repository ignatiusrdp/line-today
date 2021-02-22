import { 
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from "./constants";
  
const initialState = { 
categories: [], 
categoryList: [], 
loading: false,
error: ""

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories,
                categoryList: action.payload.categoryList
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    
    }
}

export default appReducer