import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    SearchIconWrapper,
    SearchTextBoxWrapper,
    SearchTextBox,
    SearchForm,
    // SearchButtonWrapper,
    // SearchButton,
} from './SearchBox.styled'
import { ReactComponent as SearchIcon } from '../../assets/icons/search-light.svg'

interface SearchBoxProps {
    onSearch: (term: string) => any
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({ onSearch }): ReactElement => {
    const onSubmitForm = (event: any): void => {
        event.preventDefault()
    }

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onSearch(event.currentTarget.value)
    }

    return (
        <OuterWrapper>
            <SearchForm onSubmit={onSubmitForm}>
                <SearchIconWrapper>
                    <SearchIcon height={18} width={18} fill="#bdbdbd" />
                </SearchIconWrapper>

                <SearchTextBoxWrapper>
                    <SearchTextBox type="text" placeholder="products & categories" onChange={onChangeInput} />
                </SearchTextBoxWrapper>
                {/* <SearchButtonWrapper>
                    <SearchButton type="submit">SEARCH</SearchButton>
                </SearchButtonWrapper> */}
            </SearchForm>
        </OuterWrapper>
    )
}

export default SearchBox
