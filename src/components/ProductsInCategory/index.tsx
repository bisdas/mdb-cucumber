/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, SingleProductWrapper } from './ProductsInCategory.styled'
import ProductCard from '../ProductCard'
import MoreProductsCard from '../MoreProductsCard'
import { useRouter } from '../../router/useRouter'

interface IProductsInCategoryProps {
    products: any[]
    showAll: boolean
    categoryId: string
}

const ProductsInCategory: FunctionComponent<IProductsInCategoryProps> = ({
    products,
    showAll,
    categoryId,
}): ReactElement => {
    const { navigateCategory } = useRouter()
    const selectProducts = showAll ? products : products.slice(0, 5)

    const navigateCategoryPage = (): void => {
        navigateCategory(categoryId)
    }

    return (
        <>
            {selectProducts.map(product => (
                <SingleProductWrapper key={product.id}>
                    <ProductCard image={product.thumbnail} title={product.title} linkTo={product.targetLink} />
                </SingleProductWrapper>
            ))}

            <MoreProductsCard onShowMoreProducts={navigateCategoryPage} />
        </>
    )
}

export default ProductsInCategory
