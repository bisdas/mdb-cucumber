import { PAGES } from '../../configuration/constants'

export interface IAppState {
    isLoadingApp: boolean
    activePage: string
    error: any
    freshLoad: boolean
}

export const appInitialState: IAppState = {
    isLoadingApp: true,
    activePage: PAGES.HOME,
    error: null,
    freshLoad: true,
}

/** TODO: remove this doNothing() function.
 * This is temporarily done this way to prevent eslint from throwing the error
 * requiring prefer-default-export.
 */
export const doNothing = (): void => {}
