/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { type FunctionComponent, type ReactElement, useMemo, useState, useEffect } from 'react'
import {
    OuterWrapper,
    Content,
    PageHeader,
    PageContent,
    LoaderWrapper,
    Description,
    DescriptionFirstLine,
    DescriptionSecondLine,
    ProductGridWrapper,
    GoBackWrapper,
    CategoryTitle,
    ProductCardWrapper,
    Grid,
    Column,
    Row,
} from './CategoryPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'
import { useParams } from 'react-router-dom'
import { useRouter } from '../../router/useRouter'
import { useCategorisedProducts } from '../../hooks/useCategorisedProducts'
import ProductCard from '../../components/ProductCard'
import InvisibleCard from '../../components/InvisibleCard'

const CategoryPage: FunctionComponent<any> = (): ReactElement => {
    const { navigateHome } = useRouter()
    const { id } = useParams()
    const [productsData, error, isProductsLoading] = useCategorisedProducts()
    const [pageLoading, setPageLoading] = useState(true)

    useEffect(() => {
        // fake delay to show the loader
        setTimeout(() => {
            setPageLoading(false)
        }, 3000)
    })

    const category = productsData?.find((data: any) => data.category.id.trim() === id?.trim())
    const numberOfColumns = 3

    const productsGrid = useMemo(() => {
        if (isProductsLoading === true) {
            return []
        }

        const updatedProducts = category.products.map((product: any) => ({
            ...product,
            isEmpty: false,
        }))

        const totalNumberOfRows = Math.ceil(category.products.length / numberOfColumns)
        const fullLengthToMatchGrid = totalNumberOfRows * numberOfColumns

        while (updatedProducts.length < fullLengthToMatchGrid) {
            updatedProducts.push({
                isEmpty: true,
            })
        }

        const grid = updatedProducts.reduce((grid: any[], currentItem: any, currentIndex: number) => {
            const modifiedGrid = [...grid]
            const isFirstElement = currentIndex % numberOfColumns === 0

            if (isFirstElement) {
                modifiedGrid.push([])
            }

            modifiedGrid[modifiedGrid.length - 1].push(currentItem)
            return modifiedGrid
        }, [])

        return grid
    }, [category?.products, numberOfColumns])

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
                        <div>Loading...</div>
                    </LoaderWrapper>
                ) : (
                    <PageContent>
                        <Description>
                            <DescriptionFirstLine>{category.products.length} items</DescriptionFirstLine>
                            <DescriptionSecondLine>in this category</DescriptionSecondLine>
                        </Description>

                        <ProductGridWrapper>
                            <Grid>
                                {productsGrid.map((gridRow: any, index: number) => (
                                    <Row key={index}>
                                        {gridRow.map((gridColumn: any) => (
                                            <Column key={gridColumn.id}>
                                                {gridColumn.isEmpty === false ? (
                                                    <ProductCardWrapper>
                                                        <ProductCard
                                                            image={gridColumn.thumbnail}
                                                            title={gridColumn.title}
                                                            linkTo={gridColumn.targetLink}
                                                        />
                                                    </ProductCardWrapper>
                                                ) : (
                                                    <ProductCardWrapper>
                                                        <InvisibleCard />
                                                    </ProductCardWrapper>
                                                )}
                                            </Column>
                                        ))}
                                    </Row>
                                ))}
                            </Grid>
                        </ProductGridWrapper>
                    </PageContent>
                )}
            </Content>
        </OuterWrapper>
    )
}

export default CategoryPage
