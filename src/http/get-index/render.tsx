import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { React } from "https://unpkg.com/es-react";
import { App } from './app.tsx';

export async function render(props: object[]) {
//https://medium.com/innovation-and-technology/deciphering-typescripts-react-errors-8704cc9ef402
  let body = ReactDOMServer.renderToString(<App data = {props} />);
  console.log( 'render.tsx body is type of ' + typeof(body) )
  
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
          <input name="text" type="text" autofocus="autofocus"/>
        </form>
      </div>
      <ul id="js-todos"></ul>
    </div>
  
<div id=app>${body}</div>
<script type="module" src=/_static/browser.js></script>
</body>
</html>
`;
}