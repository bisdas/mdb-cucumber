import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, ImageWrapper, ImageContent, TitleWrapper, TitleText } from './ProductCard.styled'
import img from '../../assets/productThumbs/cold_pressed_oil.png'

const ProductCard: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <ImageWrapper>
                <ImageContent image={img}></ImageContent>
            </ImageWrapper>
            <TitleWrapper>
                <TitleText>Saffolla Cold Pressed Organic Sunflower Oil</TitleText>
            </TitleWrapper>
        </OuterWrapper>
    )
}

export default ProductCard
