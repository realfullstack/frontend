import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import '@styles/global.css'
import { createApiInstance } from '@core/utils/api'
import { ApiProvider } from '@components/Providers/ApiProvider'

const multiClientSharedApiInstance = createApiInstance()

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApiProvider client={multiClientSharedApiInstance}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApiProvider>
    </>
  )
}

export default MainApp
