import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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

				<TransitionGroup className={products.length && styles.cart__items}>
					{products.length ? (
							products.map(product => (
								<CSSTransition 
									key={product.id}
									timeout={500}
              						classNames="product"
								>
									<CartProduct
										setCost={setCost}
										product={product}
									/>
								</CSSTransition>
							))
					) : (
						<h3 style={{ opacity: 0.3, fontWeight: 300 }}>
							Товары не найдены
						</h3>
					)}
				</TransitionGroup>

				<div className={styles.cart__total}>
					<CartTotal totalCost={cost} />
				</div>
			</div>
		</>
	)
}

export default Cart
