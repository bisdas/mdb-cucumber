import { useEffect, useState, useRef, useCallback } from 'react'
import { LONG_RUN_ACTIVITY } from '../configuration/constants'
import StoreService from '../services/StoreService'
import { debounce } from '../utils/utils'

interface IUseSearchProducts {
    isLoading: boolean
    products: any[]
    error: any
}

export const useSearchProducts = (keyword: string): IUseSearchProducts => {
    console.log('keyword received from source', keyword)
    const [products, setProducts] = useState([])
    const [status, setStatus] = useState(LONG_RUN_ACTIVITY.IDLE)
    const [error, setError] = useState(null)
    const useSearchProductsRef = useRef()

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
                            const items = await StoreService.getByKeywords(keyword)
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
            500
        ),
        [debounce, keyword]
    )

    useEffect((): any => {
        fetchProducts()
    }, [keyword, fetchProducts])

    const isLoading: boolean = status === LONG_RUN_ACTIVITY.RUNNING
    return { isLoading, products, error }
}
