import { FC } from 'react'
import Section from '../../components/Section/Section'
import { headphones, wirelessHeadphones } from '../../data/products'

const Shop: FC = () => {

	return (
		<>
			<Section title='Наушники' products={headphones}/>
			<Section title='Беспроводные наушники' products={wirelessHeadphones}/>
		</>
	)
}

export default Shop
