export interface IAppState {
    isLoadingApp: boolean
    error: any
    freshLoad: boolean
}

export const appInitialState: IAppState = {
    isLoadingApp: true,
    error: null,
    freshLoad: true,
}
