import { useEffect, useContext } from 'react';
import StoreService from '../services/StoreService';
import {
    createCategorisedProductsDataAction,
    createCategorisedProductsErrorAction,
    createCategorisedProductsRequestAction,
    StoreContext,
} from '../stateManagement/storeState';

export const useCategorisedProducts = (): any => {
    const [state, dispatch] = useContext(StoreContext);
    const data = state.categorisedProducts?.data;
    const errors = state.categorisedProducts?.errors;
    const isLoading = state.categorisedProducts?.isLoading;

    useEffect(() => {
        void (async (): Promise<any> => {
            if (data?.length === 0) {
                dispatch(createCategorisedProductsRequestAction());

                try {
                    const products = await StoreService.getCategorisedProducts();
                    dispatch(createCategorisedProductsDataAction(products));
                } catch (error: any) {
                    dispatch(createCategorisedProductsErrorAction(error));
                }
            }
        })();
    }, [data?.length, dispatch]);

    return [data, errors, isLoading];
};
