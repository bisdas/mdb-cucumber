import { DELISH_BOWL_EMAIL_ADDRESS, MaxSupportedScreenWidth } from '../configuration/constants'
import { type ScreenDimension } from '../types/types'

export const debounce = (parentRef: any, func: any, timeout: number = 300): any => {
    return (...args: any[]) => {
        clearTimeout(parentRef.debounceTimer)
        parentRef.debounceTimer = setTimeout(() => {
            func.apply(parentRef, args)
        }, timeout)
    }
}

export const getRandomNumber = (minimum: number, maximum: number): number => {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

export const openEmailWriterWindow = (subject: string): void => {
    // todo: check if encoding url is required
    const url = `mailto:${DELISH_BOWL_EMAIL_ADDRESS}?&subject=${subject}`
    window.open(url)
}

export const openAnyLinkWindow = (link: string): void => {
    // todo: check if encoding url is required
    window.open(link)
}

export const getScreenDimension = (): ScreenDimension => {
    return {
        width: window.screen.width,
        height: window.screen.height,
    }
}

export const showUnderDevelopmentBanner = (): boolean => {
    const { width } = getScreenDimension()
    return width > MaxSupportedScreenWidth
}
