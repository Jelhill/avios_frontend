import { 
    UPDATE_PRODUCTS_STATE,
    UPDATE_VARIETY_INPUT,
    UPDATE_VARIETY_IMAGES,
    UPDATE_TEMP_IMAGE,
    UPDATE_PRODUCT_INPUT_STATE,
    UPDATE_PRODUCT_IMAGE_STATE,
    UPDATE_VARIETIES_STATE
 } from "../actions/productActions"

const initialState = {
    products: [],
    varietyInputs: {},
    varietyImages: {},
    tempImage: [],
    productInputs: {},
    productDisplayImage: null,
    productVarieties: [],
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

    if(action.type === UPDATE_PRODUCT_INPUT_STATE) {
        newState.productInputs = {...newState.productInputs, ...action.values}
    }

    if(action.type === UPDATE_PRODUCT_IMAGE_STATE) {
        newState.productDisplayImage = action.values
    }

    if(action.type === UPDATE_VARIETIES_STATE) {
        newState.productVarieties = action.values
    }

    return newState
}

export default productReducer
