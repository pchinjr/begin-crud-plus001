import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { React } from "https://unpkg.com/es-react";
import { App } from './app.tsx';

export async function render() {
//https://medium.com/innovation-and-technology/deciphering-typescripts-react-errors-8704cc9ef402
  
  // const env = Deno.env.toObject()
  // let stage
  // if (env.NODE_ENV === 'staging') stage = 'https://invent-jf9-staging.begin.app/'
  // if (env.NODE_ENV === 'production') stage = 'https://invent-jf9.begin.app/'
  // if (env.NODE_ENV === 'testing') stage = 'http://localhost:3333'
  // let url = `${stage}/todos`
  const raw = await fetch(`https://invent-jf9-staging.begin.app/todos`)
  const props = await raw.json()
  console.log(props)
  let body = ReactDOMServer.renderToString(<App data = {props} />);
  
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Todenow or Never</title>
  </head>
  <style> * { margin-left: 5px } </style>
  <body>
    <div>
      <div>
        <h1> Todeno </h1>
        <form action="/todos" method="POST">
          <input name="text" type="text" autofocus="autofocus" placeholder="praise cage"/>
        </form>
      </div>
      <ul id="js-todos"></ul>
      <div id=app>${body}</div>
    </div>
  

<script type="module" src=/_static/browser.js></script>
</body>
</html>
`;
}