/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { Portal } from '../Portal'
import {
    OuterWrapper,
    Backdrop,
    ContentWrapper,
    Content,
    ImageWrapper,
    ImageContent,
    TitleWrapper,
    TitleText,
} from './ProductModal.styled'

interface IProductModalProps {
    product: any
    onClose: any
}

const ProductModal: FunctionComponent<IProductModalProps> = ({ product, onClose }): ReactElement => {
    debugger
    const formattedImageUrl = `../assets/productImages/${product.image}`
    const shortTitle = `${product.title.substring(0, 50)}...`

    return (
        <Portal rootElementId="portal-root" className="product-info-portal">
            <OuterWrapper>
                <Backdrop onClick={onClose} />
                <ContentWrapper>
                    <Content>
                        <ImageWrapper></ImageWrapper>
                        <TitleWrapper>
                            <TitleText>{shortTitle}</TitleText>
                        </TitleWrapper>
                    </Content>
                </ContentWrapper>
            </OuterWrapper>
        </Portal>
    )
}

export default ProductModal
