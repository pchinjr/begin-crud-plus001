import React, { Component, PropTypes } from "https://unpkg.com/es-react";
import { Todo } from "./todo.tsx"

// type definition for react elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: string;
    }
  }
}

type Props = {
  data: object[];
};

//function component
export function App(props: Props) {
    console.log(props) 
    //@ts-ignore
     return <Todo data = { props.data.todos } /> ;
}