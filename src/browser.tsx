import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'
import { App } from './http/get-index/app.tsx'

window.addEventListener('DOMContentLoaded', async () => {
    const raw = await fetch('https://shiny-1j9-staging.begin.app/api')
    const state = await raw.json()
  //@ts-ignore
  let el = window.document.getElementById('app')
  //@ts-ignore
  ReactDOM.hydrate(<App data={ state } />, el)
})