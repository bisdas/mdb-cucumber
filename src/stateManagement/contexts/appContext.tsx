import React, { useReducer } from 'react'
import { appReducer } from '../reducers/appReducer'
import { appInitialState } from '../defaults/appInitialState'

interface IAppContext {
    state: any
    dispatch: React.Dispatch<any>
}
export const AppContext = React.createContext<IAppContext[] | null>(null)

export const AppContextProvider = (props: any): any => {
    const [state, dispatch] = useReducer(appReducer, appInitialState)

    return <AppContext.Provider value={[state, dispatch]}> {props.children}</AppContext.Provider>
}
