import { useEffect, type FunctionComponent, type ReactElement } from 'react'
import { createPortal } from 'react-dom'

interface IPortal {
    rootElementName: string
    children: ReactElement
    className: string
}
export const Portal: FunctionComponent<IPortal> = ({ rootElementName, children, className }) => {
    /* select the first matched element from DOM */
    const rootElement = document.getElementsByTagName(rootElementName)[0]
    const portalElement = document.createElement('div')
    portalElement.setAttribute('class', className)
    portalElement.setAttribute('style', 'z-index: 2001')

    useEffect((): any => {
        rootElement.appendChild(portalElement)
        return () => rootElement.removeChild(portalElement)
    }, [portalElement, rootElement])

    const portalInstance = createPortal(children, portalElement)
    return portalInstance
}
