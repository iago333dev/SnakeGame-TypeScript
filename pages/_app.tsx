import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import GlobalStyles from '../components/Board/styles'

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => (

  <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
)

export default App;


