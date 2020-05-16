
import React, { Component, PropTypes } from "https://unpkg.com/es-react";

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

  JSON.stringify( Todos(props) )
    
  function Todos(props: Props) {
    
     //@ts-ignore
    let todoArray = props.data.todos
    
    //@ts-ignore
    todoArray.map( t => Todo(t)).join('')
    //each item in the array has to become a todo
    function Todo(todo: Props) {
      //@ts-ignore
      let text = todo.text
      //@ts-ignore
      let id = todo.key
      //@ts-ignore
      let created = todo.created
      return (
        <li id="${id}">
        <pre>${text} - ${created} - ${id}</pre>
        <form action="/todos/delete" method="POST">
        <input type="hidden" name="key" value="${id}" />
        <button>Nevermind</button>
        </form>
        </li>
      )
    }
    return Todos
  }

  return App
}