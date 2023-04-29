import React, { type ReactElement } from 'react'
import ErrorFallbackUI from '../ErrorFallbackUI'

interface IErrorBoundaryProps {
    error: any
    onCatchError: any
    children: any
}
class ErrorBoundary extends React.Component<IErrorBoundaryProps> {
    componentDidCatch(error: any): void {
        this.props.onCatchError(error)
    }

    render(): ReactElement {
        if (this.props.error !== null) {
            return <ErrorFallbackUI />
        }

        return this.props.children
    }
}

export default ErrorBoundary
