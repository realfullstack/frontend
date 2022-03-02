import { AxiosInstance } from 'axios'
import React, { ReactNode, useContext, useMemo } from 'react'
import useSWR, { Key, SWRResponse } from 'swr'

export const ApiContext = React.createContext<null | AxiosInstance>(null)

type ApiProviderProps = {
  client: AxiosInstance | null
  children?: ReactNode
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ client, children }) => {
  return <ApiContext.Provider value={client}>{children}</ApiContext.Provider>
}

export type ApiProps = {
  api: AxiosInstance
}

export function useApi(): AxiosInstance {
  const client = useContext(ApiContext)
  if (client) return client
  else throw Error('API client not found in context')
}

export type ApiResolverType = (api: AxiosInstance) => any
export function useApiWithResolver(resolver: ApiResolverType): ApiResolverType {
  const api = useApi()
  return useMemo(() => resolver(api), [resolver])
}

export function useSWRApi<Data = unknown>(
  key: Key,
  fetcher: (client: AxiosInstance, ...args: any) => Data | Promise<Data>
): SWRResponse<Data, Error> {
  const client = useApi()
  return useSWR(key, (...args: any[]) => {
    return fetcher(client, ...args)
  })
}
