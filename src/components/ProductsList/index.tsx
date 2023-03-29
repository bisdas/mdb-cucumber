import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper } from './ProductsList.styled'

interface IProductsListProps {
    category: string
    items: ReactElement[]
}

const ProductsList: FunctionComponent<IProductsListProps> = (): ReactElement => {
    return <OuterWrapper></OuterWrapper>
}

export default ProductsList
