import React, { type Dispatch, useReducer } from 'react';
import { appReducer } from '../reducers/appReducer';
import { appInitialState, type IAppState } from '../defaults/appInitialState';

export const AppContext = React.createContext<[Partial<IAppState>, Dispatch<any>]>([{}, () => {}]);

export const AppContextProvider = (props: any): any => {
    const [state, dispatch] = useReducer(appReducer, appInitialState);

    return <AppContext.Provider value={[state, dispatch]}> {props.children}</AppContext.Provider>;
};
