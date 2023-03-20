import { useEffect, useState } from 'react'
import { LONG_RUNNING_ACTIVITY } from '../configuration/constants'
import ProductService from '../services/ProductService'

const useSearchProducts = (keyword: string): void => {
    const [products, setProducts] = useState([])
    const [status, setStatus] = useState(LONG_RUNNING_ACTIVITY.IDLE)
    const [error, setError] = useState(null)

    useEffect((): any => {
        if (keyword === '') return null

        const fetchItems = async (): Promise<any> => {
            setStatus(LONG_RUNNING_ACTIVITY.RUNNING)

            try {
                const items = await ProductService.getByKeywords(keyword)
                setStatus(LONG_RUNNING_ACTIVITY.IDLE)
                setProducts(items)
            } catch (error: any) {
                setError(error)
            }
        }

        void fetchItems()
        return { status, products, error }
    }, [keyword])
}

export default useSearchProducts
