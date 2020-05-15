import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { React } from "https://unpkg.com/es-react";
import { App } from './app.tsx';

export async function render(props: object[]) {
  let body = ReactDOMServer.renderToString(<App data = {props} />);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Todos Never Die</title>
  </head>
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