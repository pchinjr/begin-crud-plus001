import { render } from './render.tsx'

export const handler = async (event: any = {}): Promise<any> => {

    //const response = JSON.stringify(event, null, 2);
    const raw = await fetch('http://localhost:3333/todos')
    const data:object[] = await raw.json()  // { "todos" : [] }
    
    return {
          headers: {
            'content-type': 'text/html; charset=utf8'
          },
          body: await render(data)
        };
}