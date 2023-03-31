/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    Content,
    PageHeader,
    PageContent,
    Description,
    DescriptionFirstLine,
    DescriptionSecondLine,
    ProductList,
    GoBackWrapper,
    CategoryTitle,
    ProductCardWrapper,
} from './SearchPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'
import { useParams } from 'react-router-dom'
import { useRouter } from '../../router/useRouter'
import { useCategorisedProducts } from '../../hooks/useCategorisedProducts'
import ProductCard from '../../components/ProductCard'

const SearchPage: FunctionComponent<any> = (): ReactElement => {
    const { navigateHome } = useRouter()
    const { id } = useParams()
    const [productsData, error, isLoading] = useCategorisedProducts()

    const currentProductGroup = productsData.find((data: any) => data.category.id.trim() === id?.trim())
    const products = currentProductGroup.products

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
                    <CategoryTitle>{currentProductGroup.category.title}</CategoryTitle>
                </PageHeader>
                <PageContent>
                    <Description>
                        <DescriptionFirstLine>{products.length} items</DescriptionFirstLine>
                        <DescriptionSecondLine>in this category</DescriptionSecondLine>
                    </Description>

                    <ProductList>
                        {products.map((product: any) => (
                            <ProductCardWrapper key={product.id}>
                                <ProductCard
                                    image={product.thumbnail}
                                    title={product.title}
                                    linkTo={product.targetLink}
                                />
                            </ProductCardWrapper>
                        ))}
                    </ProductList>
                </PageContent>
            </Content>
        </OuterWrapper>
    )
}

export default SearchPage
