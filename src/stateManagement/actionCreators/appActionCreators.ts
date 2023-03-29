import { APP_LOADING, APP_ERROR, APP_RESET, APP_FRESH_LOAD } from '../actions/appActions'

export const createAppLoadingAction = (isLoading: boolean): any => {
    return {
        type: APP_LOADING,
        value: isLoading,
    }
}

export const createAppErrorAction = (error: any): any => {
    return {
        type: APP_ERROR,
        value: error,
    }
}

export const createAppFreshLoadAction = (freshLoad: boolean): any => {
    return {
        type: APP_FRESH_LOAD,
        value: freshLoad,
    }
}

export const createAppResetAction = (): any => {
    return {
        type: APP_RESET,
    }
}
