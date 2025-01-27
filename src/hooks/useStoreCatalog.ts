import { useEffect, useContext } from 'react';
import StoreService from '../services/StoreService';
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
} from '../stateManagement/storeState';

export const useStoreCatalog = (): any => {
    const [state, dispatch] = useContext(StoreContext);
    const { categories, brands, tags } = state;

    /** fetch categories */
    useEffect(() => {
        void (async (): Promise<any> => {
            if (categories?.data?.length === 0) {
                dispatch(createCategoriesRequestAction());
                try {
                    const categories = await StoreService.getAllCategories();
                    dispatch(createCategoriesDataAction(categories));
                } catch (error: any) {
                    dispatch(createCategoriesErrorAction(error));
                }
            }
        })();
    }, [categories?.data?.length, dispatch]);

    /** fetch brands */
    useEffect(() => {
        void (async (): Promise<any> => {
            if (brands?.data?.length === 0) {
                dispatch(createBrandsRequestAction());

                try {
                    const brands = await StoreService.getAllBrands();
                    dispatch(createBrandsDataAction(brands));
                } catch (error: any) {
                    dispatch(createBrandsErrorAction(error));
                }
            }
        })();
    }, [brands?.data?.length, dispatch]);

    /** fetch tags */
    useEffect(() => {
        void (async (): Promise<any> => {
            if (tags?.data?.length === 0) {
                dispatch(createTagsRequestAction());

                try {
                    const tags = await StoreService.getAllTags();
                    dispatch(createTagsDataAction(tags));
                } catch (error: any) {
                    dispatch(createTagsErrorAction(error));
                }
            }
        })();
    }, [tags?.data?.length, dispatch]);

    return [categories, brands, tags];
};
