import { render } from './render.tsx'

const URI = {
  local: 'http://localhost:3333',
  staging: 'https://invent-jf9-staging.begin.app/',
  production: 'https://invent-jf9.begin.app/'
}

export async function handler() {

  const raw = await fetch("invent-jf9-staging.begin.app/todos")
  const props = await raw.json()
  const body = await render(props)
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: 'body'
  }
}