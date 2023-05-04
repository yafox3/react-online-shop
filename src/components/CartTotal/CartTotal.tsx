import { FC } from 'react'
import styles from './CartTotal.module.scss'

interface CartTotalProps {
	totalCost: number
}

const CartTotal: FC<CartTotalProps> = ({totalCost}) => {
	return (
		<div className={styles.total}>

			<div className={styles.total__cost}>
				<span>итого</span>
				<span>₽ {totalCost}</span>
			</div>
			
			<button className={styles.total__buy_btn}>Перейти к оформлению</button>
		</div>
	)
}

export default CartTotal
