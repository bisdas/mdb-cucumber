/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Content, ImageWrapper, ImageContent, TitleWrapper, TitleText } from './ProductCard.styled'

// todo: remove hard code image
import Image from '../../assets/productImages/cold_pressed_oil.png'
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

    const formattedImageUrl = `./productImages/${image}`
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
                    {/* <ImageContent imageUrl={formattedImageUrl}></ImageContent> */}
                    <ImageContent imageUrl={Image}></ImageContent>
                </ImageWrapper>
                <TitleWrapper>
                    <TitleText>{shortTitle}</TitleText>
                </TitleWrapper>
            </Content>
        </OuterWrapper>
    )
}

export default ProductCard
