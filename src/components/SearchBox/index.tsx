import React, { useRef, useEffect, type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, SearchIconWrapper, SearchTextBoxWrapper, SearchTextBox, SearchForm } from './SearchBox.styled'
import { ReactComponent as SearchIcon } from '../../assets/icons/search-light.svg'
// import { AppContext } from '../../stateManagement/contexts/appContext'
// import { PAGES } from '../../configuration/constants'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../router'

interface SearchBoxProps {
    onSearch: (term: string) => any
    onFocus?: () => any
    seamless?: boolean
    icon?: boolean
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({
    onSearch,
    onFocus,
    seamless = false,
    icon = true,
}): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)
    // const [state] = useContext(AppContext)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === `/${ROUTES.SEARCH}`) {
            inputRef?.current?.focus()
        }
    }, [location.pathname])

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
        <OuterWrapper seamless={seamless}>
            <SearchForm seamless={seamless} onSubmit={onSubmitForm}>
                {icon && (
                    <SearchIconWrapper>
                        <SearchIcon height={18} width={18} fill="#bdbdbd" />
                    </SearchIconWrapper>
                )}

                <SearchTextBoxWrapper>
                    <SearchTextBox
                        ref={inputRef}
                        type="text"
                        placeholder="product, brand, category, etc."
                        onChange={onChangeInput}
                        onFocus={onFocusInput}
                    />
                </SearchTextBoxWrapper>
            </SearchForm>
        </OuterWrapper>
    )
}

export default SearchBox
