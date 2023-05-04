import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CartProduct from '../../components/CartProduct/CartProduct'
import CartTotal from '../../components/CartTotal/CartTotal'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { updateCartCost } from '../../store/action-creators/cart'
import './Animation.scss'
import styles from './Cart.module.scss'


const Cart: FC = () => {
	const { products, totalCost } = useTypedSelector(state => state.cart)
	const [cost, setCost] = useState(totalCost)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(updateCartCost(cost))
		// eslint-disable-next-line
	}, [cost])

	return (
		<>
			<h2 className={styles.title}>Корзина</h2>
			<div className={styles.cart}>

				<div className={styles.cart__items}>
					{products.length 
						? products.map(product => 
							<CartProduct setCost={setCost} product={product} key={product.id}/>
						) 
						: <h3 style={{textAlign: 'center', opacity: 0.4}}>Товары не найдены</h3>
					}
				</div>

				<div className={styles.cart__total}>
					<CartTotal totalCost={cost}/>
				</div>
			</div>
		</>
	)
}

export default Cart
