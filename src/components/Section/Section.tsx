import { FC } from 'react'
import { IProduct } from '../../models'
import ProductsList from '../ProductsList/ProductsList'
import styles from './Section.module.scss'

interface SectionProps {
	title: string
	products: IProduct[]
}

const Section: FC<SectionProps> = ({ title, products}) => {
	return (
		<>
			<p className={styles.title}>{title}</p>
			
			<ProductsList products={products}/>
		</>
	)
}

export default Section
