export const debounce = (parentRef, func, timeout = 300) => {
    return (...args) => {
        clearTimeout(parentRef.debounceTimer)
        parentRef.debounceTimer = setTimeout(() => {
            func.apply(parentRef, args)
        }, timeout)
    }
}
