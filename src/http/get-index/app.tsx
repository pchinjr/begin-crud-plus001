import React, { Component } from "https://unpkg.com/es-react";

// type definition for react elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      pre: any;
    }
  }
}

type Props = {
  data: object[];
};


//export class App extends Component<Props, {}> {
//function component
export function App(props: Props) {
     //@ts-ignore
     return <pre> { JSON.stringify(props.data) } </pre>;
}
  // tok() {
  //   fetch('https://shiny-1j9-staging.begin.app/api')
  //   .then(response => response.json())
  //   .then(response => console.log(response.data))
  //   .catch(error => {
  //     console.error('There has been a problem with your fetch operation:', error);
  //   });
  // }