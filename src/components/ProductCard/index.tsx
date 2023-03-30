/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, ImageWrapper, ImageContent, TitleWrapper, TitleText, Anchor } from './ProductCard.styled'
import img from '../../assets/productThumbs/cold_pressed_oil.png'

interface IProductCardProps {
    image: string
    title: boolean
    linkTo: string
}

const ProductCard: FunctionComponent<IProductCardProps> = ({ image, title, linkTo }): ReactElement => {
    const formattedImageUrl = `../../assets/productThumbs/${image}`
    return (
        <OuterWrapper>
            <ImageWrapper>
                <ImageContent imageUrl={formattedImageUrl}></ImageContent>
            </ImageWrapper>
            <TitleWrapper>
                <TitleText>
                    <Anchor href={linkTo} target="_blank">
                        {title}
                    </Anchor>
                </TitleText>
            </TitleWrapper>
        </OuterWrapper>
    )
}

export default ProductCard
