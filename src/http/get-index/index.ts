import { render } from './render.tsx'

const URI = {
  local: 'http://localhost:3333',
  staging: 'https://invent-jf9-staging.begin.app/',
  production: 'https://invent-jf9.begin.app/'
}

export async function handler() {
  const body = await render()
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: body
  }
}