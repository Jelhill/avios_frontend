import { 
    UPDATE_PRODUCTS_STATE,
    UPDATE_VARIETY_INPUT,
    UPDATE_VARIETY_IMAGES,
    UPDATE_TEMP_IMAGE
 } from "../actions/productActions"

const initialState = {
    products: [],
    varietyInputs: {},
    varietyImages: {},
    tempImage: []
}   

const productReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === UPDATE_PRODUCTS_STATE) {
        newState.products = action.values
    }

    if(action.type === UPDATE_VARIETY_INPUT) {
        newState.varietyInputs = {...newState.varietyInputs, ...action.values}
    }

    if(action.type === UPDATE_VARIETY_IMAGES) {
        newState.varietyImages = action.values
    }

    if(action.type === UPDATE_TEMP_IMAGE) {
        newState.tempImage = newState.tempImage.concat(action.values)
    }

    return newState
}

export default productReducer
