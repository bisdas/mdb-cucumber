import { useState } from 'react'

import { useSearchProducts } from './useSearchProducts'

export const useSearchBox = (): any => {
    const [keyword, setKeyword] = useState('')
    const { status, products, error } = useSearchProducts(keyword)

    console.log('status', status, 'products', products, 'error', error)
    const onChangeInput = (enteredValue: string): void => {
        setKeyword(enteredValue)
    }

    return { onChangeInput }
}
