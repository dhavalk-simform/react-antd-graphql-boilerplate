import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    /*
    Here you can call any thrid party monitor system API
    like sentry.io to log errors in third party service.
    */
    // eslint-disable-next-line
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      /*
      Here you can render any error component
      */
      return <h1>Sorry.. there was an error</h1>
    }

    return children
  }
}

export default ErrorBoundary
