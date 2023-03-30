/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, SingleProductWrapper } from './ProductsInCategory.styled'

interface IProductsInCategoryProps {
    category: string
    showAll: boolean
}

const ProductsInCategory: FunctionComponent<IProductsInCategoryProps> = ({ category, showAll }): ReactElement => {
    return (
        <OuterWrapper>
            {/* <SingleProductWrapper>
            <ProductCard />
        </SingleProductWrapper>
        <SingleProductWrapper>
            <ProductCard />
        </SingleProductWrapper>
        <SingleProductWrapper>
            <ProductCard />
        </SingleProductWrapper>
        <SingleProductWrapper>
            <ProductCard />
        </SingleProductWrapper>
        <SingleProductWrapper>
            <ProductCard />
        </SingleProductWrapper> */}
        </OuterWrapper>
    )
}

export default ProductsInCategory
