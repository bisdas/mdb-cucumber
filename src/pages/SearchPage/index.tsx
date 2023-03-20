import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Content, SearchBoxWrapper } from './SearchPage.styled'
// import SearchBox from '../../components/SearchBox'

// interface BareComponentProps {

// }
const BareComponent: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            this is search page
            <Content>
                <SearchBoxWrapper>{/* <SearchBox onSearch={() => {}} /> */}</SearchBoxWrapper>
            </Content>
        </OuterWrapper>
    )
}

export default BareComponent
