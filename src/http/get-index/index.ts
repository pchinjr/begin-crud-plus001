import { render } from './render.tsx'

export async function handler() {
    const raw = await fetch('https://shiny-1j9-staging.begin.app/api')
    const state = await raw.json()

  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: await render(state)
  }
}