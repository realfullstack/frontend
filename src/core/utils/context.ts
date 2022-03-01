import { ParsedUrlQuery } from 'querystring'

export const getQueryParamFirstValue = (params: ParsedUrlQuery, key: string): string | undefined => {
  const param = params[key]
  if (Array.isArray(param)) {
    return param[0]
  }
  return param
}

export const isSSR = () => {
  return typeof window == 'undefined'
}

export const isBrowser = () => {
  return typeof window != 'undefined'
}
