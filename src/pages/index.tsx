import { PageMeta } from '@components/Pages/Index'
import { useSWRApi } from '@components/Providers/ApiProvider'
import type { NextPage } from 'next'
import { AxiosInstance } from 'axios'

const IndexPage: NextPage = () => {
  const { data, error } = useSWRApi<boolean>('/auth/login', (client: AxiosInstance, url: string): Promise<boolean> => {
    return client.post(url, { params: { code: 'code' } }).then((res) => res.data)
  })
  return (
    <>
      <PageMeta />
      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">200</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page found</h1>
                <p className="mt-1 text-base text-gray-500">This is the homepage!</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <pre>{JSON.stringify({ data, error })}</pre>
    </>
  )
}

export default IndexPage
