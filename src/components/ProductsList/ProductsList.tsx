import { FC } from 'react'
import { IProduct } from '../../models'
import Product from '../Product/Product'
import styles from './ProductsList.module.scss'

interface ProductsListProps {
	products: IProduct[]
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
	return (
		<div className={styles.products}>
			{products.map(product => (
				<Product product={product} key={product.id}/>
			))}
		</div>
	)
}

export default ProductsList
