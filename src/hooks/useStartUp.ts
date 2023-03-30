/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useContext } from 'react'
import { AppContext } from '../stateManagement/contexts/appContext'
import { createAppReloadAction } from '../stateManagement/actionCreators/appActionCreators'
import { useCategorisedProducts } from './useProducts'
import { useStoreCatalog } from './useStoreCatalog'

const useStartUp = (): any => {
    const [appState, dispatch] = useContext(AppContext)
    const { reload } = appState
    const [catalogs, brands, tags] = useStoreCatalog()
    const [data, errors, isLoading] = useCategorisedProducts()

    useEffect(() => {
        if (reload === true) {
            dispatch(createAppReloadAction(false))
        }
    }, [reload, dispatch])
}

export default useStartUp
