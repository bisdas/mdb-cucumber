/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, type FunctionComponent, type ReactElement, useMemo } from 'react';
import {
    OuterWrapper,
    Content,
    ImageWrapper,
    ImageContent,
    TitleWrapper,
    TitleText,
    HyperlinkContent,
} from './ProductCard.styled';
import ProductModal from '../ProductModal';
import { useScrollLock } from '../../hooks/useScrollLock';
import { DELISH_BOWL_AMAZON_STORE_ID, EnableProductPopup } from '../../configuration/constants';
import { MetricType, sendMetrics } from '../../utils/analyticsUtils';

interface IProductCardProps {
    image: string;
    title: string;
    allDetails: any;
}

const ProductCard: FunctionComponent<IProductCardProps> = ({ image, title, allDetails }): ReactElement => {
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);

    useScrollLock(isProductModalOpen);

    const formattedImageUrl = useMemo(
        () => `${location.protocol}//${window.location.host}/productImages/${image}`,
        [image]
    );
    const shortTitle = `${title.substring(0, 50)}...`;
    const productLink: string = `${allDetails.targetLink}/ref=nosim?tag=${DELISH_BOWL_AMAZON_STORE_ID}`;

    return (
        <OuterWrapper>
            {isProductModalOpen && (
                <ProductModal
                    product={allDetails}
                    onClose={() => {
                        setIsProductModalOpen(false);
                    }}
                />
            )}

            {EnableProductPopup && (
                <Content
                    onClick={() => {
                        setIsProductModalOpen(true);
                    }}
                >
                    <ImageWrapper>
                        <ImageContent imageUrl={formattedImageUrl}></ImageContent>
                    </ImageWrapper>
                    <TitleWrapper>
                        <TitleText>{shortTitle}</TitleText>
                    </TitleWrapper>
                </Content>
            )}

            {!EnableProductPopup && (
                <HyperlinkContent
                    href={productLink}
                    target="_blank"
                    onClick={() => {
                        sendMetrics(MetricType.visitProduct);
                    }}
                >
                    <ImageWrapper>
                        <ImageContent imageUrl={formattedImageUrl}></ImageContent>
                    </ImageWrapper>
                    <TitleWrapper>
                        <TitleText>{shortTitle}</TitleText>
                    </TitleWrapper>
                </HyperlinkContent>
            )}
        </OuterWrapper>
    );
};

export default ProductCard;
