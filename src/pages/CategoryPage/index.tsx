/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { type FunctionComponent, type ReactElement, useMemo, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
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
        const randomDelay = getRandomNumber(250, 1000)
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
                            <ProductsGrid products={category.products} numberOfColumns={3} />
                        </ProductGridWrapper>
                    </PageContent>
                )}
            </Content>
        </OuterWrapper>
    )
}

export default CategoryPage
