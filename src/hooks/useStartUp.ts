/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useContext } from 'react'
import { AppContext } from '../stateManagement/contexts/appContext'
import { createAppReloadAction } from '../stateManagement/actionCreators/appActionCreators'
import { useCategorisedProducts } from './useCategorisedProducts'
import { useStoreCatalog } from './useStoreCatalog'

const useStartUp = (): any => {
    const [appState, dispatch] = useContext(AppContext)
    const { reload } = appState
    useStoreCatalog()
    useCategorisedProducts()

    useEffect(() => {
        if (reload === true) {
            dispatch(createAppReloadAction(false))
        }
    }, [reload, dispatch])
}

export default useStartUp
