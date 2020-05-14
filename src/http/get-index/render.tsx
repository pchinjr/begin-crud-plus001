import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { React } from "https://unpkg.com/es-react";
import { App } from './app.tsx';

export async function render(state: object[]) {
  let body = ReactDOMServer.renderToString(<App data = {state} />);
  return `<!DOCTYPE html>
<html>
<body>
<div id=app>${body}</div>
<script>

</script>
<script type="module" src=/_static/browser.js></script>
<script>
console.log('yo')
</script>
</body>
</html>
`;
}