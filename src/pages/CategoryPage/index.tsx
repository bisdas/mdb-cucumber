/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { type FunctionComponent, type ReactElement, useState, useEffect } from 'react'
import {
    OuterWrapper,
    Content,
    PageHeader,
    PageContent,
    Description,
    DescriptionFirstLine,
    DescriptionSecondLine,
    ProductGridWrapper,
    GoBackWrapper,
    CategoryTitle,
    ThatsAll,
} from './CategoryPage.styled'
import { LoaderWrapper } from '../../components/SharedComponents/SharedStyledComponents.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'
import { useParams } from 'react-router-dom'
import { useRouter } from '../../router/useRouter'
import { useCategorisedProducts } from '../../hooks/useCategorisedProducts'
import ProductsGrid from '../../components/ProductsGrid'
import Spinner from '../../components/Spinner'
import { getRandomNumber } from '../../utils/utils'

const CategoryPage: FunctionComponent<any> = (): ReactElement => {
    const { navigateHome } = useRouter()
    const { id } = useParams()
    const [productsData, error, isProductsLoading] = useCategorisedProducts()
    const [pageLoading, setPageLoading] = useState(true)

    useEffect(() => {
        // fake delay to show the loader on category page
        const randomDelay = getRandomNumber(250, 500)
        setTimeout(() => {
            setPageLoading(false)
        }, randomDelay)
    })

    const category = productsData?.find((data: any) => data.category.id.trim() === id?.trim())

    const navigateToHomePage = (): void => {
        navigateHome()
    }

    return (
        <OuterWrapper>
            <Content>
                <PageHeader>
                    <GoBackWrapper>
                        <BackArrow onClick={navigateToHomePage} />
                    </GoBackWrapper>
                    <CategoryTitle>{category.category.title}</CategoryTitle>
                </PageHeader>

                {isProductsLoading === true || pageLoading ? (
                    <LoaderWrapper>
                        <Spinner />
                    </LoaderWrapper>
                ) : (
                    <PageContent>
                        <Description>
                            <DescriptionFirstLine>{category.products.length} items</DescriptionFirstLine>
                            <DescriptionSecondLine>in this category</DescriptionSecondLine>
                        </Description>

                        <ProductGridWrapper>
                            <ProductsGrid products={category.products} numberOfColumns={2} />
                        </ProductGridWrapper>
                        <ThatsAll>That&apos;s all, folks!</ThatsAll>
                    </PageContent>
                )}
            </Content>
        </OuterWrapper>
    )
}

export default CategoryPage
