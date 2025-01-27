/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext, useEffect } from 'react';

import { useSearchProducts } from './useSearchProducts';
import {
    StoreContext,
    createFilteredProductsDataAction,
    createFilteredProductsErrorAction,
    createFilteredProductsRequestAction,
} from '../stateManagement/storeState';

export const useSearchBox = (): any => {
    const [_, dispatchToStore] = useContext(StoreContext);
    const [keyword, setKeyword] = useState('');
    const { isLoading, products, error } = useSearchProducts(keyword);

    useEffect(() => {
        if (keyword.trim() === '') {
            dispatchToStore(createFilteredProductsDataAction([]));
        }

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (isLoading) {
            dispatchToStore(createFilteredProductsRequestAction());
        } else if (error !== null) {
            dispatchToStore(createFilteredProductsErrorAction(error));
        } else {
            dispatchToStore(createFilteredProductsDataAction(products));
        }
    }, [isLoading, products, error, keyword, dispatchToStore]);

    const onChangeInput = (enteredValue: string): void => {
        setKeyword(enteredValue);
    };

    return { onChangeInput };
};
