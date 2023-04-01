import React, { useReducer, type Dispatch } from 'react'
/*  types */
interface IAction {
    type: string
    value: any
}

export interface IStoreState {
    categories: {
        isLoading: boolean
        data: any[]
        errors: any[]
    }
    brands: {
        isLoading: boolean
        data: any[]
        errors: any[]
    }
    tags: {
        isLoading: boolean
        data: any[]
        errors: any[]
    }
    categorisedProducts: {
        isLoading: boolean
        data: any[]
        errors: any[]
    }
    filteredProducts: {
        isLoading: boolean
        data: any[]
        errors: any[]
    }
}

/* initial state */
export const productsInitialState: IStoreState = {
    categories: {
        isLoading: false,
        data: [],
        errors: [],
    },
    brands: {
        isLoading: false,
        data: [],
        errors: [],
    },
    tags: {
        isLoading: false,
        data: [],
        errors: [],
    },
    categorisedProducts: {
        isLoading: false,
        data: [],
        errors: [],
    },
    filteredProducts: {
        isLoading: false,
        data: [],
        errors: [],
    },
}

/* actions */
const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST'
const CATEGORIES_DATA = 'CATEGORIES_DATA'
const CATEGORIES_ERROR = 'CATEGORIES_ERROR'

const BRANDS_REQUEST = 'BRANDS_REQUEST'
const BRANDS_DATA = 'BRANDS_DATA'
const BRANDS_ERROR = 'BRANDS_ERROR'

const TAGS_REQUEST = 'TAGS_REQUEST'
const TAGS_DATA = 'TAGS_DATA'
const TAGS_ERROR = 'TAGS_ERROR'

const CATEGORISED_PRODUCTS_REQUEST = 'CATEGORISED_PRODUCTS_REQUEST'
const CATEGORISED_PRODUCTS_DATA = 'CATEGORISED_PRODUCTS_DATA'
const CATEGORISED_PRODUCTS_ERROR = 'CATEGORISED_PRODUCTS_ERROR'

const FILTERED_PRODUCTS_REQUEST = 'FILTERED_PRODUCTS_REQUEST'
const FILTERED_PRODUCTS_DATA = 'FILTERED_PRODUCTS_DATA'
const FILTERED_PRODUCTS_ERROR = 'FILTERED_PRODUCTS_ERROR'

/* action creators */
export const createCategoriesRequestAction = (): any => {
    return {
        type: CATEGORIES_REQUEST,
        value: true,
    }
}

export const createCategoriesDataAction = (data: any): any => {
    return {
        type: CATEGORIES_DATA,
        value: data,
    }
}

export const createCategoriesErrorAction = (error: any): any => {
    return {
        type: CATEGORIES_ERROR,
        value: error,
    }
}
export const createBrandsRequestAction = (): any => {
    return {
        type: BRANDS_REQUEST,
        value: true,
    }
}

export const createBrandsDataAction = (data: any): any => {
    return {
        type: BRANDS_DATA,
        value: data,
    }
}

export const createBrandsErrorAction = (error: any): any => {
    return {
        type: BRANDS_ERROR,
        value: error,
    }
}
export const createTagsRequestAction = (): any => {
    return {
        type: TAGS_REQUEST,
        value: true,
    }
}

export const createTagsDataAction = (data: any): any => {
    return {
        type: TAGS_DATA,
        value: data,
    }
}

export const createTagsErrorAction = (error: any): any => {
    return {
        type: TAGS_ERROR,
        value: error,
    }
}

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

export const createFilteredProductsRequestAction = (): any => {
    return {
        type: FILTERED_PRODUCTS_REQUEST,
        value: true,
    }
}

export const createFilteredProductsDataAction = (data: any): any => {
    return {
        type: FILTERED_PRODUCTS_DATA,
        value: data,
    }
}

export const createFilteredProductsErrorAction = (error: any): any => {
    return {
        type: FILTERED_PRODUCTS_ERROR,
        value: error,
    }
}

/* reducers */
export const productsReducer = (state = productsInitialState, action: IAction): any => {
    const { type, value } = action
    switch (type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                categories: {
                    isLoading: true,
                    data: [],
                    errors: [],
                },
            }

        case CATEGORIES_DATA:
            return {
                ...state,
                categories: {
                    isLoading: false,
                    data: value,
                    errors: [],
                },
            }

        case CATEGORIES_ERROR:
            return {
                ...state,
                categories: {
                    isLoading: false,
                    data: [],
                    errors: value,
                },
            }
        case BRANDS_REQUEST:
            return {
                ...state,
                brands: {
                    isLoading: true,
                    data: [],
                    errors: [],
                },
            }

        case BRANDS_DATA:
            return {
                ...state,
                brands: {
                    isLoading: false,
                    data: value,
                    errors: [],
                },
            }

        case BRANDS_ERROR:
            return {
                ...state,
                brands: {
                    isLoading: false,
                    data: [],
                    errors: value,
                },
            }
        case TAGS_REQUEST:
            return {
                ...state,
                tags: {
                    isLoading: true,
                    data: [],
                    errors: [],
                },
            }

        case TAGS_DATA:
            return {
                ...state,
                tags: {
                    isLoading: false,
                    data: value,
                    errors: [],
                },
            }

        case TAGS_ERROR:
            return {
                ...state,
                tags: {
                    isLoading: false,
                    data: [],
                    errors: value,
                },
            }
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
        case FILTERED_PRODUCTS_REQUEST:
            return {
                ...state,
                filteredProducts: {
                    isLoading: true,
                    data: [],
                    errors: [],
                },
            }

        case FILTERED_PRODUCTS_DATA:
            return {
                ...state,
                filteredProducts: {
                    isLoading: false,
                    data: value,
                    errors: [],
                },
            }

        case FILTERED_PRODUCTS_ERROR:
            return {
                ...state,
                filteredProducts: {
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
export const StoreContext = React.createContext<[Partial<IStoreState>, Dispatch<any>]>([{}, () => {}])

/** context provider */
export const StoreContextProvider = (props: any): any => {
    const [state, dispatch] = useReducer(productsReducer, productsInitialState)
    return <StoreContext.Provider value={[state, dispatch]}>{props.children} </StoreContext.Provider>
}
