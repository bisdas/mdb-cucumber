/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, TitleWrapper, TitleText, Content } from './MoreProductsCard.styled'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg'

const MoreProductsCard: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
            <Content>
                <TitleWrapper>
                    <TitleText>
                        <div>Show more</div>
                        <span>items</span>
                        <ArrowRight
                            height={18}
                            width={18}
                            style={{
                                position: 'relative',
                                top: '5px',
                                left: '4px',
                            }}
                        />
                    </TitleText>
                </TitleWrapper>
            </Content>
        </OuterWrapper>
    )
}

export default MoreProductsCard
