import React from "https://unpkg.com/es-react";
import { Todo } from "./todo.tsx"
import { List } from "./list.tsx"

// type definition for react elements
// https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking
declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any
      pre: any;
      div: any;
      li: any;
      form: any;
      input: any;
      button: any;
      h1: any;
      ul: any;
    }
  }
}

type Props = {
  data: object[];
};

//function component
export function App(todos: Props) {
  console.log('from app.tsx ', todos.data)



  return (
  <div>
    <h1>todeno</h1>
      <form action="/todos" method="POST">
        <input name="text" type="text" placeholder="praise cage"/>
      </form>
    <List todos = { todos.data } />
  </div>
  )
}