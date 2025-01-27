import { APP_LOADING, APP_ERROR, APP_RESET, APP_RELOAD } from '../actions/appActions';
import { appInitialState } from '../defaults/appInitialState';

interface IAction {
    type: string;
    value: any;
}

export const appReducer = (state = appInitialState, action: IAction): any => {
    const { type, value } = action;
    switch (type) {
        case APP_LOADING:
            return {
                ...state,
                isLoadingApp: value,
            };

        case APP_ERROR:
            return {
                ...state,
                appError: value,
            };

        case APP_RELOAD:
            return {
                ...state,
                reload: value,
            };

        case APP_RESET:
            return appInitialState;

        default:
            return state;
    }
};

/** TODO: remove this doNothing() function.
 * This is temporarily done this way to prevent eslint from throwing the error
 * requiring prefer-default-export.
 */
export const doNothing = (): void => {};
