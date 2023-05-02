/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, type FunctionComponent, type ReactElement, useMemo } from 'react'
import { OuterWrapper, Content, ImageWrapper, ImageContent, TitleWrapper, TitleText } from './ProductCard.styled'
import ProductModal from '../ProductModal'
import { useScrollLock } from '../../hooks/useScrollLock'

interface IProductCardProps {
    image: string
    title: string
    allDetails: any
}

const ProductCard: FunctionComponent<IProductCardProps> = ({ image, title, allDetails }): ReactElement => {
    const [isProductModalOpen, setIsProductModalOpen] = useState(false)

    useScrollLock(isProductModalOpen)

    const formattedImageUrl = useMemo(
        () => `${location.protocol}//${window.location.host}/productImages/${image}`,
        [image]
    )
    const shortTitle = `${title.substring(0, 50)}...`

    return (
        <OuterWrapper>
            {isProductModalOpen && (
                <ProductModal
                    product={allDetails}
                    onClose={() => {
                        setIsProductModalOpen(false)
                    }}
                />
            )}

            <Content
                onClick={() => {
                    setIsProductModalOpen(true)
                }}
            >
                <ImageWrapper>
                    <ImageContent imageUrl={formattedImageUrl}></ImageContent>
                </ImageWrapper>
                <TitleWrapper>
                    <TitleText>{shortTitle}</TitleText>
                </TitleWrapper>
            </Content>
        </OuterWrapper>
    )
}

export default ProductCard
