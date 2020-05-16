import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'
import { App } from './http/get-index/app.tsx'

//entry point for deno.bundle() and client-side data call.
window.addEventListener('DOMContentLoaded', async () => {
  const raw:Response = await fetch('/todos')
  const props:object[] = await raw.json()
  //@ts-ignore
  let el = window.document.getElementById('app')
  ReactDOM.hydrate( <App data={ props } />, el)
})