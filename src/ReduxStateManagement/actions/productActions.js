export const UPDATE_PRODUCTS_STATE = "UPDATE_PRODUCTS_STATE"
export const UPDATE_VARIETY_INPUT = "UPDATE_VARIETY_INPUT"
export const UPDATE_VARIETY_IMAGES = "UPDATE_VARIETY_IMAGES"
export const UPDATE_TEMP_IMAGE = "UPDATE_TEMP_IMAGE"

export const updateProductState = (values) => {
    return {
        type: UPDATE_PRODUCTS_STATE,
        values
    }
}

export const updateVarietyInputState = (values) => {
    return {
        type: UPDATE_VARIETY_INPUT,
        values
    }
}

export const updateVarietyImageState = (values) => {
    return {
        type: UPDATE_VARIETY_IMAGES,
        values
    }
}

export const updateStateWithTempImage = (values) => {
    return {
        type: UPDATE_TEMP_IMAGE,
        values
    }
}