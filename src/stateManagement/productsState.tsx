import React, { useReducer, type Dispatch } from 'react'
/*  types */
interface IAction {
    type: string
    value: any
}

export interface IProductsState {
    categorisedProducts: {
        isLoading: boolean
        data: any[]
        errors: any[]
    }
}

/* initial state */
export const productsInitialState: IProductsState = {
    categorisedProducts: {
        isLoading: false,
        data: [],
        errors: [],
    },
}

/* actions */
const CATEGORISED_PRODUCTS_REQUEST = 'CATEGORISED_PRODUCTS_REQUEST'
const CATEGORISED_PRODUCTS_DATA = 'CATEGORISED_PRODUCTS_DATA'
const CATEGORISED_PRODUCTS_ERROR = 'CATEGORISED_PRODUCTS_ERROR'

/* action creators */
export const createCategorisedProductsRequestAction = (): any => {
    return {
        type: CATEGORISED_PRODUCTS_REQUEST,
        value: true,
    }
}

export const createCategorisedProductsDataAction = (data: any): any => {
    return {
        type: CATEGORISED_PRODUCTS_DATA,
        value: data,
    }
}

export const createCategorisedProductsErrorAction = (error: any): any => {
    return {
        type: CATEGORISED_PRODUCTS_ERROR,
        value: error,
    }
}

/* reducers */
export const productsReducer = (state = productsInitialState, action: IAction): any => {
    const { type, value } = action
    switch (type) {
        case CATEGORISED_PRODUCTS_REQUEST:
            return {
                ...state,
                categorisedProducts: {
                    isLoading: true,
                    data: [],
                    errors: [],
                },
            }

        case CATEGORISED_PRODUCTS_DATA:
            return {
                ...state,
                categorisedProducts: {
                    isLoading: false,
                    data: value,
                    errors: [],
                },
            }

        case CATEGORISED_PRODUCTS_ERROR:
            return {
                ...state,
                categorisedProducts: {
                    isLoading: false,
                    data: [],
                    errors: value,
                },
            }
        default:
            return state
    }
}

/** context */
export const ProductsContext = React.createContext<[Partial<IProductsState>, Dispatch<any>]>([{}, () => {}])

/** context provider */
export const ProductsContextProvider = (props: any): any => {
    const [state, dispatch] = useReducer(productsReducer, productsInitialState)
    return <ProductsContext.Provider value={[state, dispatch]}>{props.children} </ProductsContext.Provider>
}
