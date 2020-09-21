import client from './httpClient'

export function compress(string) {
  return client.get('/compress', { params: string })
}

export function decompress(string) {
  return client.get('/decompress', { params: string })
}