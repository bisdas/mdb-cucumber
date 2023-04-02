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
