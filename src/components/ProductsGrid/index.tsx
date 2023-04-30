import React, { type FunctionComponent, type ReactElement, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { OuterWrapper, Grid, Row, Item, ProductCardWrapper } from './ProductsGrid.styled'
import ProductCard from '../../components/ProductCard'
import InvisibleCard from '../../components/InvisibleCard'

interface IProductsGridProps {
    products: any[] | undefined
    numberOfColumns: number
}

const ProductsGrid: FunctionComponent<IProductsGridProps> = ({ products, numberOfColumns }): ReactElement => {
    const sanitizedProducts = useMemo(() => (products === undefined ? [] : [...products]), [products])
    const productsGrid = useMemo(() => {
        if (sanitizedProducts.length === 0) {
            return []
        }

        const updatedProducts = sanitizedProducts.map((product: any) => ({
            ...product,
            isEmpty: false,
            uniqueId: uuidv4(),
        }))

        const totalNumberOfRows = Math.ceil(sanitizedProducts.length / numberOfColumns)
        const fullLengthToMatchGrid = totalNumberOfRows * numberOfColumns

        while (updatedProducts.length < fullLengthToMatchGrid) {
            updatedProducts.push({
                isEmpty: true,
                uniqueId: uuidv4(),
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
    }, [sanitizedProducts, numberOfColumns])

    return (
        <>
            {productsGrid.length > 0 ? (
                <OuterWrapper>
                    <Grid>
                        {productsGrid.map((gridRow: any, index: number) => (
                            <Row key={index}>
                                {gridRow.map((gridColumn: any) => (
                                    <Item key={gridColumn.id}>
                                        {gridColumn.isEmpty === false ? (
                                            <ProductCardWrapper>
                                                <ProductCard
                                                    image={gridColumn.image}
                                                    title={gridColumn.title}
                                                    allDetails={gridColumn}
                                                />
                                            </ProductCardWrapper>
                                        ) : (
                                            <ProductCardWrapper>
                                                <InvisibleCard />
                                            </ProductCardWrapper>
                                        )}
                                    </Item>
                                ))}
                            </Row>
                        ))}
                    </Grid>
                </OuterWrapper>
            ) : (
                <></>
            )}
        </>
    )
}

export default ProductsGrid
