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
    <style>
      :root {
        --grey: #D8D8D8;
        --royal: #132865;
      }
      * {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      }
      .focus-outline-0:focus {
        outline: 0;
      }
      .focus-border:focus {
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 2px;
      }
      .width-100 {
        width: 100%;
      }
      html,
      .height-100 {
        height: 100%;
      }
      .height-100vh {
        height: 100vh;
      }
      .min-width-0 {
        min-width: 0;
      }
      .max-width-100 {
        max-width: 100%;
      }
      .margin-top-60vw {
        margin-top: 60vw;
      }
      .margin-bottom-16 {
        margin-bottom: 1rem;
      }
      .margin-bottom-32 {
        margin-bottom: 2rem;
      }
      .margin-bottom-64 {
        margin-bottom: 4rem;
      }
      .padding-1 {
        padding: 1rem;
      }
      .padding-top-8 {
        padding-top: 0.5rem;
      }
      .padding-right-24 {
        padding-right: 1.5rem;
      }
      .padding-bottom-8 {
        padding-bottom: 0.5rem;
      }
      .padding-bottom-16 {
        padding-bottom: 1rem;
      }
      .padding-bottom-64 {
        padding-bottom: 4rem;
      }
      .padding-left-24 {
        padding-left: 1.5rem;
      }
      .top-0 {
        top: 0;
      }
      .top-16 {
        top: 1rem;
      }
      .left-16 {
        left: 1rem;
      }
      .list-style-none {
        list-style: none;
      }
      .position-absolute {
        position: absolute;
      }
      .position-sticky {
        position: sticky;
      }
      .border-transparent {
        border: 1px solid transparent;
      }
      .border-radius-pill {
        border-radius:9999px;
      }
      .display-flex {
        display: flex;
      }
      .display-inline-flex {
        display: inline-flex;
      }
      .flex-grow-1 {
        flex-grow: 1;
      }
      .align-items-center {
        align-items: center;
      }
      .margin-auto {
        margin: 0 auto;
      }
      .margin-right-1 {
        margin-right: 1rem;
      }
      .padding-top-80 {
        padding-top: 5rem;
      }
      .font-size-1 {
        font-size: 1.5rem;
      }
      .font-size-3 {
        font-size: 3rem;
      }
      .font-weight-normal {
        font-weight: 300;
      }
      .line-height-64 {
        line-height: 4rem;
      }
      .text-align-center {
        text-align: center;
      }
      .border-none {
        border: 0;
      }
      .border-bottom {
        border-bottom: 1px solid #D8D8D8;
      }
      .color-royal {
        color: var(--royal);
      }
      .color-grey {
        color: var(--grey);
      }
      .background-grey {
        background-color: var(--grey);
      }
      .background-royal {
        background-color: var(--royal);
      }
      .fill-royal {
        fill: var(--royal);
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .height-1 {
        height: 1px;
      }
      html,
      .overflow-hidden {
        overflow: hidden;
      }
      .overflow-x-hidden {
        overflow-x: hidden;
      }
      .overflow-y-scroll {
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
      }
      .overflow-y-hidden {
        overflow-y: hidden;
      }
      .max-width-192 {
        max-width: 12rem;
      }
      .display-none {
        display: none;
      }
      .min-height-100vh {
        min-height: 100vh;
      }
      .width-16 {
        width: 1rem;
      }
      .height-16 {
        height: 1rem;
      }
  
  @media screen and (min-width: 40em) {
    .max-width-tablet {
      max-width: 30rem;
    }
    .margin-top-0-tablet {
      margin-top: 0;
    }
    .margin-left-auto-tablet {
      margin-left: auto;
    }
    .background,
    .background-positon-tablet {
      background-position: center right;
    }
    .padding-top-128-tablet {
      padding-top: 8rem;
    }
    .padding-right-72-tablet {
      padding-right: 4.5rem;
    }
    .padding-left-72-tablet {
      padding-left: 4.5rem;
    }
    .font-size-4-tablet {
      font-size: 4rem;
    }
  }
  </style>
  </head>
<body class="height-100">
  <div
    class="
      min-height-100vh
      max-width-tablet
      margin-top-60vw
      margin-top-0-tablet
      margin-left-auto-tablet
      padding-right-24
      padding-left-24
      padding-right-72-tablet
      padding-left-72-tablet
      padding-bottom-16
      background-white
    "
  >
    <div
      class="
        position-sticky
        top-0
        margin-bottom-64
        padding-top-80
        padding-top-128-tablet
        background-white
      "
    >
      <div
        class="
          display-flex
          align-items-center
        "
      >
        <h1
          class="
            color-grey
            font-size-3
            font-size-4-tablet
          "
        >
          Todos
        </h1>
      </div>
      <form
        action="/todos"
        method="POST"
        class="
          display-flex
          align-items-center
          background-white
        "
      >
        <h2
          class="
            margin-right-1
            font-weight-normal
            color-grey
          "
        >
          +
        </h2>
        <input
          name="text"
          type="text"
          autofocus="autofocus"
          class="
            flex-grow-1
            font-size-1
            color-royal
            border-none
            line-height-64
            focus-outline-0
          "
        />
      </form>
      <hr class="height-1 background-grey border-none"/>
    </div>
    <div
      id="js-message"
      class="
        max-width-192
        margin-auto
        text-align-center
        color-grey
      "
    >
    </div>
    <ul
      class="margin-bottom-32 list-style-none"
      id="js-todos"
    >
    </ul>
    <h2
      id="js-done-title"
      class="
        margin-bottom-16
        color-grey
        display-none
      "
    >
      Done
    </h2>
    <ul
      class="list-style-none"
      id="js-completed"
    >
    </ul>
  </div>
  <div
    class="
      position-absolute
      top-16
      left-16
      display-flex
      align-items-center
      background-royal
      border-radius-pill
      cursor-pointer
    "
  >
  </div>
<div id=app>${body}</div>
<script type="module" src=/_static/browser.js></script>
</body>
</html>
`;
}