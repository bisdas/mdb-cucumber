import { useEffect, type FunctionComponent, type ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
    rootElementId: string;
    children: ReactElement;
    className: string;
}
export const Portal: FunctionComponent<IPortal> = ({ rootElementId, children, className }) => {
    /* select the first matched element from DOM */
    const rootElement = document.getElementById(rootElementId) as HTMLElement;
    const portalElement = document.createElement('div');
    portalElement.setAttribute('class', className);
    portalElement.setAttribute('style', 'z-index: 102');

    useEffect((): any => {
        rootElement.appendChild(portalElement);
        return () => rootElement.removeChild(portalElement);
    }, [portalElement, rootElement]);

    const portalInstance = createPortal(children, portalElement);
    return portalInstance;
};
