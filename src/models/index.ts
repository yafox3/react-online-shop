export interface IProduct {
	id: number
	title: string
	price: number
	img: string
	rate: number
}

export interface ICartProduct {
	id: number
	title: string
	price: number
	img: string
	rate: number
	count: number
	totalCost: number
}