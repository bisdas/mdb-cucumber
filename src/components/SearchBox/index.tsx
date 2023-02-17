import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, SearchIconWrapper, SearchTextBoxWrapper, SearchTextBox } from './SearchBox.styled'
import { ReactComponent as SearchIcon } from '../../assets/icons/search-light.svg'

const SearchBox: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <SearchIconWrapper>
                <SearchIcon height={24} width={24} />
            </SearchIconWrapper>
            <SearchTextBoxWrapper>
                <SearchTextBox type="text" placeholder="products & categories" />
            </SearchTextBoxWrapper>
        </OuterWrapper>
    )
}

export default SearchBox
