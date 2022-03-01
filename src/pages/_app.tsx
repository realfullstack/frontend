import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import '@styles/global.css'

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MainApp
