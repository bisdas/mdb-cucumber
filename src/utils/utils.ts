import {
    CUCUMBER_CONTACT_EMAIL_SUBJECT,
    CUCUMBER_FEEDBACK_EMAIL_SUBJECT,
    DELISH_BOWL_EMAIL_ADDRESS,
} from '../configuration/constants'

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

export const openContactMailWriterWindow = (): void => {
    const emailAddress = DELISH_BOWL_EMAIL_ADDRESS
    const subject = CUCUMBER_CONTACT_EMAIL_SUBJECT
    // todo: check if encoding url is required
    window.open(`mailto:${emailAddress}?&subject=${subject}`)
}

export const openFeedbackMailWriterWindow = (): void => {
    const emailAddress = DELISH_BOWL_EMAIL_ADDRESS
    const subject = CUCUMBER_FEEDBACK_EMAIL_SUBJECT
    // todo: check if encoding url is required
    window.open(`mailto:${emailAddress}?&subject=${subject}`)
}
