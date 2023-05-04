import { CartAction, CartActionTypes, CartState } from '../../types/cart'

const initialState: CartState = {
	products: [],
	totalCost: 0
}

const add = (state: CartState, action: CartAction) => {
	action.payload.count = 1
	action.payload.totalCost = action.payload.price

	return {
		...state,
		products: [...state.products, action.payload],
		totalCost: state.totalCost + action.payload.price
	}
}

const updateCost = (state: CartState, action: CartAction) => {
	return {
		...state,
		totalCost: action.payload
	}
}

const remove = (state: CartState, action: CartAction) => {
	return {
		...state,
		products: state.products.filter((prod) => prod.id !== action.payload.id), 
		totalCost: state.totalCost - action.payload.totalCost
	}
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			return add(state, action)
		case CartActionTypes.UPDATE_CART_COST: 
			return updateCost(state, action)
		case CartActionTypes.REMOVE_FROM_CART:
			return remove(state, action)
		default:
			return state
	}
}