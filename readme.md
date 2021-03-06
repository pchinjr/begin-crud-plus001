<img src="https://static.begin.app/node-crud/readme-banner.png" width="641">

[![Begin build status](https://buildstatus.begin.app/invent-jf9/status.svg)](https://begin.com)

A super simple Begin **c**reate **r**ead **u**pdate **d**elete app that exemplifies a basic todo app that uses one static html page and three API endpoints.

## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-crud)

Deploy your own clone of this app to Begin!

get-index function at / 
 - handler fetches data { "todos": [] } and passes todos as props into render()
render.tsx 
 - receives todos
 - renders App with stringified html, the body is App
 App.tsx
 - returns todos

browser.tsx 
 App + render are sent to the client wrapped by an event listener. Window is the global object because Deno is made to be browser capable, but TS doesn't know about it. 



SSR React app for frontend using fetch() to other Lambdas. 
get-index can hydrate the DOM with data with javascript disabled.
client side post requests can update data 


## Getting started

- Start the local dev server: `npm start`
- Lint your code: `npm run lint`
- Run your tests: `npm t`

## Reference

- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
