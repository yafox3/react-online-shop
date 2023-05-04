import { CartActionTypes } from '../../types/cart'

export const addToCart = (payload: any) => {
	return {type: CartActionTypes.ADD_TO_CART, payload: payload}
}

export const updateCartCost = (payload: any) => {
	return {type: CartActionTypes.UPDATE_CART_COST, payload: payload}
}

export const removeFromCart = (payload: any) => {
	return {type: CartActionTypes.REMOVE_FROM_CART, payload: payload}
}