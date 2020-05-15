import React, { Component } from "https://unpkg.com/es-react";


type Props = {
  todos: object[];
};

export function Todo(todos: Props){
      // fetch('http://localhost:3333/todos', {
      //   credentials: 'same-origin',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      // .then(res => res)
      // .then(body => body.json())
      // // Call update with fetched todos
      // .then(json => update(json.todos))    


      //Kick off the app
      init()

      // GET all todos
      function init () {
        fetch('http://localhost:3333/todos', {
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res)
        .then(body => body.json())
        // Call update with fetched todos
        .then(json => update(json.todos))
      }

      // Update the DOM with data
      //https://stackoverflow.com/a/59046041/5755373
      
      function update (todos: Props) {
        console.log('update todos')
        //@ts-ignore
        let list = document.getElementById('js-todos')
        //@ts-ignore
        let current = todos.filter(t => !t.completed)
        //@ts-ignore
        let doneTitle = document.getElementById('js-done-title')
        list && current.length
        //@ts-ignore
          ? list.innerHTML = current.map(t => Todo(t)).join('')
          : ''
      }


      function Todo (props: Props) {
        //@ts-ignore
        let text = props.text || 'add a todeno'
        //@ts-ignore
        let id = props.key || ''
        //@ts-ignore
        let created = props.created
        //@ts-ignore
        let checked = props.completed
          ? 'checked="checked"'
          : ''

        return `
<li  id="${id}">
  <form
    action="/todos"
    method="POST"
    class="
      min-width-0
      display-flex
      align-items-center
      flex-grow-1
    "
  >
    <input
      type="text"
      name="text"
      value="${text}"
      class="
        min-width-0
        flex-grow-1
        border-none
        line-height-64
        color-royal
        font-weight-normal
        font-size-1
        focus-outline-0
      "
    />
    <input type="hidden" name="key" value="${id}"/>
    <input type="hidden" name="created" value="${created}"/>
  </form>
  <form
    action="/todos/delete"
    method="POST"
  >
    <input type="hidden" name="key" value="${id}" />
    <button
      class="
        padding-1
        font-size-1
        background-white
        border-transparent
        cursor-pointer
        focus-border
        focus-outline-0
      "
    >
      Nevermind
    </button>
  </form>
</li>
        `
      }
    return update
}
