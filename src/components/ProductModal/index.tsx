/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import React, { type FunctionComponent, type ReactElement, useState, useEffect } from 'react'
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
    const [isClosing, setIsClosing] = useState(false)

    const initiateClose = (): void => {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, 300)
    }

    const formattedImageUrl = `../assets/productImages/${product.image}`
    const shortTitle = `${product.title.substring(0, 50)}...`

    return (
        <Portal rootElementId="portal-root" className="product-info-portal">
            <OuterWrapper>
                <Backdrop
                    closing={isClosing}
                    onClick={() => {
                        initiateClose()
                    }}
                />
                <ContentWrapper closing={isClosing}>
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
