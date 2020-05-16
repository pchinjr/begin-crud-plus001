import React, { Component, PropTypes } from "https://unpkg.com/es-react";
import { Todo } from "./todo.tsx"

// type definition for react elements
//https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking
declare global {
  namespace JSX {
    interface IntrinsicElements {
      pre: any;
      div: any;
      li: any;
      form: any;
      input: any;
      button: any;
      todos: any;
    }
  }
}

type Props = {
  data: object[];
};

//function component
export function App(props: Props) {

  let body = <Todo todos = { props.data }> </Todo>
  
  return body
}