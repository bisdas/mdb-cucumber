import { useEffect } from 'react'

export const useScrollLock = (locked: boolean): void => {
    useEffect(() => {
        if (locked) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [locked])
}
