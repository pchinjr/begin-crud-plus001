import { body } from './index.js'

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(req: object) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: body()
  }
}