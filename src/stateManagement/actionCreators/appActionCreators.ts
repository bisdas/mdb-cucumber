import { APP_LOADING, APP_ERROR, APP_RESET, APP_RELOAD } from '../actions/appActions'

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

export const createAppReloadAction = (reload: boolean): any => {
    return {
        type: APP_RELOAD,
        value: reload,
    }
}

export const createAppResetAction = (): any => {
    return {
        type: APP_RESET,
    }
}
