import { ActionTypes } from '../constants/action-types'
import fakeStoreApi from '../../apis/fakeStoreApi'

export const fetchProducts = () => async dispatch => {
    const response = await fakeStoreApi
    .get('/products')
    .catch(error => console.log(error))

    dispatch({ type: 
        ActionTypes.FETCH_PRODUCTS, 
        payload: response.data 
    })
}

export const fetchProduct = id => async dispatch => {
    const response = await fakeStoreApi
    .get(`/products/${id}`)
    .catch(error => console.log(error))

    dispatch({ type: 
        ActionTypes.SELECTED_PRODUCT, 
        payload: response.data 
    })
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}