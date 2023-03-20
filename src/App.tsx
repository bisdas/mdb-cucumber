import React, { useContext } from 'react'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import { OuterWrapper } from './App.styled'
import { AppContext } from './stateManagement/contexts/appContext'
import { PAGES } from './configuration/constants'

const App: React.FunctionComponent<any> = props => {
    const [state] = useContext(AppContext)
    const { activePage } = state

    console.log('active page', activePage)
    return <OuterWrapper>{activePage === PAGES.HOME ? <HomePage /> : <SearchPage />}</OuterWrapper>
}
export default App
