import axios, { AxiosInstance } from 'axios'
import getConfig from 'next/config'

type Token = string | null

const { publicRuntimeConfig } = getConfig()

export function createApiInstance(token: Token = null) {
  const headers: Record<string, string> = {}
  if (token) {
    headers['X-Authorization'] = `Bearer ${token}`
  }
  const instance = axios.create({
    baseURL: publicRuntimeConfig.API_BASEURL,
    headers,
  })
  // instance.token = token
  return instance
}
