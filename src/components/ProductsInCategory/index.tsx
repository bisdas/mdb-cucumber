/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, SingleProductWrapper } from './ProductsInCategory.styled'
import ProductCard from '../ProductCard'

interface IProductsInCategoryProps {
    products: any[]
    showAll: boolean
}

const ProductsInCategory: FunctionComponent<IProductsInCategoryProps> = ({ products, showAll }): ReactElement => {
    return (
        <>
            {products.map(product => (
                <SingleProductWrapper key={product.id}>
                    <ProductCard image={product.thumbnail} title={product.title} linkTo={product.targetLink} />
                </SingleProductWrapper>
            ))}
        </>
    )
}

export default ProductsInCategory
