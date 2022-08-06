import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'
import type { NextPage } from 'next'
import {  ReactElement, ReactNode } from 'react'
import MainLayout from '../components/MainLayout'

export type NextPageWithLayout = NextPage & {
  getCustomLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getCustomLayout = Component.getCustomLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <MainLayout>
        { getCustomLayout(<Component {...pageProps} />)}
      </MainLayout>
    </Provider>
  )
}
