/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import React, { type FunctionComponent, type ReactElement, useState, useMemo } from 'react'
import { Portal } from '../Portal'
import { Button } from '../flexible'
import {
    OuterWrapper,
    Backdrop,
    ContentWrapper,
    Content,
    ImageWrapper,
    Brand,
    TitleWrapper,
    TitleText,
    Image,
    ActionContentLayout,
    RightAlignedContent,
    LeftAlignedContent,
    AnimationTimingMilliseconds,
} from './ProductModal.styled'
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
        }, AnimationTimingMilliseconds)
    }

    const formattedImageUrl = useMemo(
        () => `${location.protocol}//${window.location.host}/productImages/${product.image}`,
        [product.image]
    )

    return (
        <Portal rootElementId="portal-root" className="product-info-portal">
            <OuterWrapper>
                <Backdrop closing={isClosing} onClick={initiateClose} />
                <ContentWrapper closing={isClosing}>
                    <Content>
                        <ImageWrapper>
                            <Image src={formattedImageUrl} alt="Product image" />
                        </ImageWrapper>
                        <Brand>{product.brand.title}</Brand>
                        <TitleWrapper>
                            <TitleText>{product.title}</TitleText>
                        </TitleWrapper>
                        <ActionContentLayout>
                            <LeftAlignedContent>
                                <Button
                                    appearance="contained"
                                    onClick={() => {
                                        openAnyLinkWindow(product.targetLink)
                                    }}
                                >
                                    See it on Amazon
                                </Button>
                            </LeftAlignedContent>
                            <RightAlignedContent>
                                <Button appearance="textonly" onClick={initiateClose}>
                                    Close
                                </Button>
                            </RightAlignedContent>
                        </ActionContentLayout>
                    </Content>
                </ContentWrapper>
            </OuterWrapper>
        </Portal>
    )
}

export default ProductModal
