import { useEffect, useState, useRef } from 'react'
import { debounce } from '../utils/utils'

const useSearchBox = (): any => {
    const [keyword, setKeyword] = useState('')
    const searchHookRef = useRef()

    const onSearch = debounce(
        searchHookRef,
        (): void => {
            console.log('useSearchBox received', keyword)
        },
        500
    )

    useEffect(() => {
        if (keyword.trim() !== '') {
            onSearch()
        }
    }, [keyword])

    const onChangeSearchInput = (enteredValue: string): void => {
        setKeyword(enteredValue)
    }

    return { onChangeSearchInput }
}

export default useSearchBox
