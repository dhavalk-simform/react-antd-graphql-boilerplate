import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import App from './App'
import ErrorBoundary from './pages/ErrorBoundary'
import './utils/i18'

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL || 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
