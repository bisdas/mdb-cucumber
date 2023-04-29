import React, { useContext } from 'react'
import ErrorBoundary from './components/ErrorBoundary'

import Routes from './router'
import { AppContext } from './stateManagement/contexts/appContext'
import { createAppErrorAction } from './stateManagement/actionCreators/appActionCreators'

const App: React.FunctionComponent<any> = (props) => {
    const [state, dispatch] = useContext(AppContext)

    return (
        <ErrorBoundary
            error={state.error}
            onCatchError={() => {
                dispatch(createAppErrorAction(state.error))
            }}
        >
            <Routes />
        </ErrorBoundary>
    )
}
export default App
