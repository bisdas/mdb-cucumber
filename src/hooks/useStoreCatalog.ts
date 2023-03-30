import { useEffect, useContext } from 'react'
import StoreService from '../services/StoreService'
import {
    StoreContext,
    createCategoriesRequestAction,
    createCategoriesDataAction,
    createCategoriesErrorAction,
    createBrandsRequestAction,
    createBrandsDataAction,
    createBrandsErrorAction,
    createTagsRequestAction,
    createTagsDataAction,
    createTagsErrorAction,
} from '../stateManagement/storeState'

export const useStoreCatalog = (): any => {
    const [state, dispatch] = useContext(StoreContext)
    const { categories, brands, tags } = state

    /** fetch categories */
    useEffect(() => {
        if (categories?.data?.length === 0) {
            dispatch(createCategoriesRequestAction())
            StoreService.getCategories()
                .then(categories => {
                    dispatch(createCategoriesDataAction(categories))
                })
                .catch(error => {
                    dispatch(createCategoriesErrorAction(error))
                })
        }
    }, [categories?.data?.length, dispatch])

    /** fetch brands */
    useEffect(() => {
        if (brands?.data?.length === 0) {
            dispatch(createBrandsRequestAction())
            StoreService.getBrands()
                .then(brands => {
                    dispatch(createBrandsDataAction(brands))
                })
                .catch(error => {
                    dispatch(createBrandsErrorAction(error))
                })
        }
    }, [brands?.data?.length, dispatch])

    /** fetch tags */
    useEffect(() => {
        if (tags?.data?.length === 0) {
            dispatch(createTagsRequestAction())
            StoreService.getTags()
                .then(tags => {
                    dispatch(createTagsDataAction(tags))
                })
                .catch(error => {
                    dispatch(createTagsErrorAction(error))
                })
        }
    }, [tags?.data?.length, dispatch])

    return [categories, brands, tags]
}
