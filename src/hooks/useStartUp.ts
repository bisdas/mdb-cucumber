import { useEffect, useContext } from 'react'
import { AppContext } from '../stateManagement/contexts/appContext'
import { createAppReloadAction } from '../stateManagement/actionCreators/appActionCreators'
import { useCategorisedProducts } from './useProducts'

const useStartUp = (): any => {
    const [appState, dispatch] = useContext(AppContext)
    const { reload } = appState
    const [data, errors, isLoading] = useCategorisedProducts()

    console.log('useStartUp ', reload, data, errors, isLoading)

    useEffect(() => {
        if (reload === true) {
            dispatch(createAppReloadAction(false))
        }
    }, [reload, dispatch])
}

export default useStartUp
