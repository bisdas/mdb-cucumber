import { useNavigate } from 'react-router-dom'
import { ROUTES } from '.'

export const useRouter = (): any => {
    const navigate = useNavigate()

    const navigateHome = (): void => {
        navigate(ROUTES.HOME)
    }

    const navigateSearch = (): void => {
        navigate(ROUTES.SEARCH)
    }

    const navigateCategory = (id: string): void => {
        navigate(ROUTES.CATEGORY)
    }

    const navigateAbout = (id: string): void => {
        navigate(ROUTES.ABOUT)
    }

    const navigateBack = (): void => {
        navigate(-1)
    }

    return { navigateHome, navigateCategory, navigateSearch, navigateAbout, navigateBack }
}
