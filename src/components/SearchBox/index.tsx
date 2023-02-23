import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    SearchIconWrapper,
    SearchTextBoxWrapper,
    SearchTextBox,
    SearchForm,
    SearchButtonWrapper,
    SearchButton,
} from './SearchBox.styled'
import { ReactComponent as SearchIcon } from '../../assets/icons/search-light.svg'

const SearchBox: FunctionComponent<any> = (): ReactElement => {
    const onSearch = (): void => {
        console.log('search form submitted')
    }

    return (
        <OuterWrapper>
            <SearchForm onSubmit={onSearch}>
                <SearchIconWrapper>
                    <SearchIcon height={18} width={18} fill="#bdbdbd" />
                </SearchIconWrapper>

                <SearchTextBoxWrapper>
                    <SearchTextBox type="text" placeholder="products & categories" />
                </SearchTextBoxWrapper>
                <SearchButtonWrapper>
                    <SearchButton type="submit">SEARCH</SearchButton>
                </SearchButtonWrapper>
            </SearchForm>
        </OuterWrapper>
    )
}

export default SearchBox
