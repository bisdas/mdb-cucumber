import React, { useRef, useEffect, type FunctionComponent, type ReactElement, useContext } from 'react'
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
import { AppContext } from '../../stateManagement/contexts/appContext'
import { PAGES } from '../../configuration/constants'

interface SearchBoxProps {
    onSearch: (term: string) => any
    onFocus?: () => any
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({ onSearch, onFocus }): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [state] = useContext(AppContext)

    useEffect(() => {
        if (state.activePage === PAGES.SEARCH) {
            inputRef?.current?.focus()
        }
    }, [])

    const onSubmitForm = (event: any): void => {
        event.preventDefault()
    }

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onSearch(event.currentTarget.value)
    }

    const onFocusInput = (): void => {
        onFocus instanceof Function && onFocus()
    }

    return (
        <OuterWrapper>
            <SearchForm onSubmit={onSubmitForm}>
                <SearchIconWrapper>
                    <SearchIcon height={18} width={18} fill="#bdbdbd" />
                </SearchIconWrapper>

                <SearchTextBoxWrapper>
                    <SearchTextBox
                        ref={inputRef}
                        type="text"
                        placeholder="products & categories"
                        onChange={onChangeInput}
                        onFocus={onFocusInput}
                    />
                </SearchTextBoxWrapper>
                {/* <SearchButtonWrapper>
                    <SearchButton type="submit">SEARCH</SearchButton>
                </SearchButtonWrapper> */}
            </SearchForm>
        </OuterWrapper>
    )
}

export default SearchBox
