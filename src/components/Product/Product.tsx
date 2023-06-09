import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IProduct } from '../../models'
import { addToCart, updateCartCost } from '../../store/action-creators/cart'
import { isExist } from '../../utils/utils'
import './Animation.scss'
import styles from './Product.module.scss'

interface ProductProps {
	product: IProduct
}

const Product: FC<ProductProps> = ({ product }) => {
	const {products, totalCost} = useTypedSelector(state => state.cart)
	const [fly, setFly] = useState(false)
	const dispatch = useDispatch()

	const onBuy = () => {
		if (isExist(products, product)) {
			// eslint-disable-next-line
			products.map(cartProduct => {
				if (cartProduct.id === product.id && cartProduct.count < 99) {
					++cartProduct.count
					cartProduct.totalCost = cartProduct.price * cartProduct.count
					dispatch(updateCartCost(totalCost + cartProduct.price))
				}
			})
		} else {
			dispatch(addToCart(product))
		}

		setFly(true)
		setTimeout(() => {
			setFly(false)
		},1000)
	}

	return (
		<>
			<div className={fly ? 'to-cart-animation' : styles.product_hidden}>
				<div className={styles.product__img}>
					<img
						src={product.img}
						alt={product.title}
						draggable='false'
					/>
				</div>
			</div>

			<div className={styles.product}>
				<div className={styles.product__img}>
					<img
						src={product.img}
						alt={product.title}
						draggable='false'
					/>
				</div>
	
				<div className={styles.product__title_price}>
					<span className={styles.title}>{product.title}</span>
					<span className={styles.price}>{product.price} ₽</span>
				</div>
	
				<div className={styles.product__rate_buy}>
					<span>
						<svg
							width='25'
							height='23'
							viewBox='0 0 25 23'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z'
								fill='#FFCE7F'
							/>
						</svg>
						{product.rate}
					</span>
					<button 
						onClick={onBuy}
						className={styles.btn}
					>
						Купить
					</button>
				</div>
			</div>
		</>
	)
}

export default Product
