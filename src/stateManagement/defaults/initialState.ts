import { PAGES } from '../../configuration/constants'

export const initialAppState = {
    isLoadingApp: true,
    activePage: PAGES.HOME,
    error: null,
    freshLoad: true,
    notification: null,
}

/** TODO: remove this doNothing() function.
 * This is temporarily done this way to prevent eslint from throwing the error
 * requiring prefer-default-export.
 */
export const doNothing = (): void => {}
