export interface IAppState {
    isLoadingApp: boolean
    error: any
    reload: boolean
}

export const appInitialState: IAppState = {
    isLoadingApp: true,
    error: null,
    reload: true,
}
