import { render } from './render.tsx'

export async function handler() {
    //const raw = await fetch('http://localhost:3333/todos')
    //const state = await raw.json()
    
    const raw = await fetch('http://localhost:3333/todos', {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const state = await raw.json()
    
    console.log('state from index.ts' + state)
    
    // .then(res => res)
    // .then(body => body.json())
    // Call update with fetched todos
    //.then(json => update(json.todos))
  


  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: await render(state)
  }
}