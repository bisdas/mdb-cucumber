/* eslint-disable no-debugger */
import { useEffect, useState, useRef, useCallback } from 'react'
import { LONG_RUN_ACTIVITY, KEYWORD_MIN_LENGTH } from '../configuration/constants'
import StoreService from '../services/StoreService'
import { debounce } from '../utils/utils'

interface IUseSearchProducts {
    isLoading: boolean
    products: any[]
    error: any
}

export const useSearchProducts = (keyword: string): IUseSearchProducts => {
    const [products, setProducts] = useState([])
    const [status, setStatus] = useState(LONG_RUN_ACTIVITY.IDLE)
    const [error, setError] = useState(null)
    const useSearchProductsRef = useRef()

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    const fetchProducts = useCallback(
        debounce(
            useSearchProductsRef,
            (): void => {
                setError(null)
                setProducts([])

                if (keyword.trim() === '') {
                    setStatus(LONG_RUN_ACTIVITY.IDLE)
                } else {
                    const fetchItems = async (): Promise<any> => {
                        setStatus(LONG_RUN_ACTIVITY.RUNNING)

                        try {
                            const items = await StoreService.getProductsByKeyword(keyword)
                            setProducts(items)
                            setError(null)
                        } catch (error: any) {
                            setProducts([])
                            setError(error)
                        } finally {
                            setStatus(LONG_RUN_ACTIVITY.IDLE)
                        }
                    }

                    void fetchItems()
                }
            },
            300
        ),
        [debounce, keyword]
    )

    useEffect((): any => {
        /* if the keyword length is less than minimum, clear results
         * else, fetch new results.
         */
        if (keyword.trim().length < KEYWORD_MIN_LENGTH) {
            setProducts([])
            setError(null)
        } else {
            fetchProducts()
        }
    }, [keyword, fetchProducts])

    const isLoading: boolean = status === LONG_RUN_ACTIVITY.RUNNING
    return { isLoading, products, error }
}
