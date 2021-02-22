import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from "./constants"

import axios from "axios"

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (payload) =>{
    return {
        type:FETCH_DATA_SUCCESS,
        payload : payload
    }
}

export const fetchDataFailure = (error) => {
    return {
        type:FETCH_DATA_FAILURE,
        error: error
    }
}

export const fetchUsers = () =>{
    return async function(dispatch) {
        axios.get("/portaljson")
            .then( (response) => {
                const payload = {categories: [], categoriesList: [] }
                payload["categories"] = response.data.result.categories
                payload["categoryList"] = response.data.result.categoryList
                console.log( response.data.result)
                dispatch(fetchDataSuccess(payload))
            })
            .catch( (err) => {
                dispatch(fetchDataFailure(err))
            })
    }
}