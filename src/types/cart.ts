import { ICartProduct } from '../models'

export enum CartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
	UPDATE_CART_COST = 'UPDATE_CART_COST',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

export interface CartState {
	products: ICartProduct[]
	totalCost: number
}

export interface CartAction {
	type: string
	payload?: any
}