import { useState, Fragment } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider } from 'antd'
import { useQuery, gql } from '@apollo/client'
import { getAntTheme, getColor, getComponent } from './config/ThemeVariable'
import { Button } from './components/Ant'
import useColorConfig from './config/useColorConfig'
import GlobalStyle from './config/global.style'

import viteLogo from '/vite.svg'
import reactLogo from './assets/images/react.svg'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'
import { ThemeContextProvider } from './context/ThemeContext'

const USERS_QUERY = gql`
  {
    users(options: { paginate: { page: 0, limit: 5 } }) {
      data {
        id
        name
        username
        email
      }
    }
  }
`

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}
export interface Geo {
  lat: string
  lng: string
}
export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

function App() {
  const [count, setCount] = useState(0)
  const [themeColor, handleChange] = useColorConfig()

  const { data, loading, error } = useQuery(USERS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <pre>{error.message}</pre>

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          index: true,
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <ThemeContextProvider value={[themeColor, handleChange]}>
      <ConfigProvider
        theme={{
          token: getAntTheme(themeColor),
          components: getComponent(themeColor)
        }}
      >
        <ThemeProvider theme={getColor(themeColor)}>
          <GlobalStyle />
          <RouterProvider router={router} />

          {/*
            below code should not be part of App.tsx file
            for this boilerplate I've put all this code in this file.
            this file should have only route provide. theme provider
            and global features only.

            When you start working on project move/remove below code
            and related code to different file.
            */}
          <div style={{ display: 'flex' }}>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img
                style={{ width: 100, height: 100 }}
                src={viteLogo}
                className="logo"
                alt="Vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img
                style={{ width: 100, height: 100 }}
                src={reactLogo}
                className="logo react"
                alt="React logo"
              />
            </a>
          </div>
          <p style={{ fontWeight: 500, letterSpacing: '1px' }}>
            Vite + Ant Design + Styled Components + GraphQL
          </p>
          <div className="card">
            <Button
              type="primary"
              htmlType="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </Button>
          </div>
          <div style={{ display: 'flex' }}>
            {data?.users?.data.map((user: User) => {
              return (
                <Fragment key={user.id}>
                  <Button type="dashed"> {user.name}</Button>
                </Fragment>
              )
            })}
          </div>
        </ThemeProvider>
      </ConfigProvider>
    </ThemeContextProvider>
  )
}

export default App
