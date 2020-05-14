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

//function component
export function App(props: Props) {
     //@ts-ignore
     return <pre> { JSON.stringify(props.data) } </pre>;
}