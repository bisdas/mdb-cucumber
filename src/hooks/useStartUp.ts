import { useEffect, useContext } from 'react'
import { AppContext } from '../stateManagement/contexts/appContext'
import { createAppFreshLoadAction } from '../stateManagement/actionCreators/appActionCreators'
import { useCategorisedProducts } from './useProducts'

const useStartUp = (): any => {
    const [appState, dispatch] = useContext(AppContext)
    const { freshLoad } = appState
    const [data, errors, isLoading] = useCategorisedProducts()

    console.log('useStartUp ', freshLoad, data, errors, isLoading)

    useEffect(() => {
        if (freshLoad === true) {
            dispatch(createAppFreshLoadAction(false))
        }
    }, [freshLoad, dispatch])
}

export default useStartUp
