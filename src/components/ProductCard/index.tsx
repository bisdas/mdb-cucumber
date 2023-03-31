/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, ImageWrapper, ImageContent, TitleWrapper, TitleText, Anchor } from './ProductCard.styled'

// todo: remove hard code image
import Image from '../../assets/productThumbs/cold_pressed_oil.png'

interface IProductCardProps {
    image: string
    title: string
    linkTo: string
}

const ProductCard: FunctionComponent<IProductCardProps> = ({ image, title, linkTo }): ReactElement => {
    const formattedImageUrl = `./productImages/${image}`
    const shortTitle = `${title.substring(0, 50)}...`
    return (
        <OuterWrapper>
            <Anchor href={linkTo} target="_blank" title={title}>
                <ImageWrapper>
                    {/* <ImageContent imageUrl={formattedImageUrl}></ImageContent> */}
                    <ImageContent imageUrl={Image}></ImageContent>
                </ImageWrapper>
                <TitleWrapper>
                    <TitleText>{shortTitle}</TitleText>
                </TitleWrapper>
            </Anchor>
        </OuterWrapper>
    )
}

export default ProductCard
