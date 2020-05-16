import { render } from './render.tsx'

export async function handler() {

  const raw = await fetch('http://localhost:3333/todos')
  const props = await raw.json()  // { "todos" : [] }
  console.log('index.ts props is type of ' + typeof(props))
  const body = await render(props)
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: body
  }
}