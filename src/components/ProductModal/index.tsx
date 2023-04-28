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
    Brand,
    TitleWrapper,
    TitleText,
    ActionLinkButton,
} from './ProductModal.styled'
import Image from '../../assets/productImages/cold_pressed_oil.png'
import { openAnyLinkWindow } from '../../utils/utils'

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

    // const formattedImageUrl = `../assets/productImages/${product.image}`

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
                        <ImageWrapper>
                            <img
                                src={Image}
                                height="100%"
                                width="100%"
                                alt="product-image"
                                style={{ position: 'absolute', top: '0px', left: '0px' }}
                            />
                        </ImageWrapper>
                        <Brand>{product.brand.title}</Brand>
                        <TitleWrapper>
                            <TitleText>{product.title}</TitleText>
                        </TitleWrapper>
                        <ActionLinkButton
                            onClick={() => {
                                openAnyLinkWindow(product.targetLink)
                            }}
                        >
                            See it on Amazon
                        </ActionLinkButton>
                    </Content>
                </ContentWrapper>
            </OuterWrapper>
        </Portal>
    )
}

export default ProductModal
