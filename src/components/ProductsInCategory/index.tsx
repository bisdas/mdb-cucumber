/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { SingleProductWrapper } from './ProductsInCategory.styled'
import ProductCard from '../ProductCard'
import MoreProductsCard from '../MoreProductsCard'
import { Link } from 'react-router-dom'

interface IProductsInCategoryProps {
    products: any[]
    showAll: boolean
    category: {
        title: string
        id: string
    }
}

const ProductsInCategory: FunctionComponent<IProductsInCategoryProps> = ({
    products,
    showAll,
    category,
}): ReactElement => {
    const selectProducts = showAll ? products : products.slice(0, 5)
    const moreItemsLink: string = `category/${category.id}`
    return (
        <>
            {selectProducts.map(product => (
                <SingleProductWrapper key={product.id}>
                    <ProductCard image={product.thumbnail} title={product.title} linkTo={product.targetLink} />
                </SingleProductWrapper>
            ))}

            <Link to={moreItemsLink} style={{ textDecoration: 'none' }}>
                <MoreProductsCard />
            </Link>
        </>
    )
}

export default ProductsInCategory
