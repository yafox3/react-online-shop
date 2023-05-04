import { ICartProduct, IProduct } from '../models'

export const isExist = (products: ICartProduct[], product: IProduct) => {
	let isExist = false 
	products.forEach((el) => {
		if (el.id === product.id) {
			isExist = true
		}
	})
	return isExist
}