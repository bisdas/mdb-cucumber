import { useEffect, useContext } from 'react'
import ProductService from '../services/ProductService'
import {
    createCategorisedProductsDataAction,
    createCategorisedProductsErrorAction,
    createCategorisedProductsRequestAction,
    ProductsContext,
} from '../stateManagement/productsState'

export const useCategorisedProducts = (): any => {
    const [state, dispatch] = useContext(ProductsContext)
    const data = state.categorisedProducts?.data
    const errors = state.categorisedProducts?.errors
    const isLoading = state.categorisedProducts?.isLoading

    console.log('data ', data, 'errors ', errors, 'isLoading', isLoading)

    useEffect(() => {
        if (data?.length === 0) {
            dispatch(createCategorisedProductsRequestAction())
            ProductService.getCategorisedProducts()
                .then(products => {
                    dispatch(createCategorisedProductsDataAction(products))
                })
                .catch(error => {
                    dispatch(createCategorisedProductsErrorAction(error))
                })
        }
    }, [data?.length, dispatch])

    return [data, errors, isLoading]
}
