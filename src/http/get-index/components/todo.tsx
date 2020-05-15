import React, { Component } from "https://unpkg.com/es-react";

type Props = {
  todos: object[];
  t: object;
};

export function Todo(todos: Props) {
      // Kick off the app
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
        //@ts-ignore
        let list = document.getElementById('js-todos')
        //@ts-ignore
        let completed = document.getElementById('js-completed')
        //@ts-ignore
        let message = document.getElementById('js-message')
        //@ts-ignore
        let current = todos.filter(t => !t.completed)
        //@ts-ignore
        let complete = todos.filter(t => t.completed)
        //@ts-ignore
        let doneTitle = document.getElementById('js-done-title')
        let done = complete.length && !current.length
        let none = !complete.length && !current.length

        if (complete.length) {
          doneTitle.classList.toggle('display-none')
        }

        list && current.length
        //@ts-ignore
          ? list.innerHTML = current.map(t => Todo(t)).join('')
          : ''

        completed && complete.length
        //@ts-ignore
          ? completed.innerHTML = complete.map(t => Todo(t)).join('')
          : ''
      }

      function Message (props: Props) {
        props = props || {}
        //@ts-ignore
        let text = props.text || ''
        return `
        <h3 class="font-size-1 font-weight-normal">${text}</h3>
        `
      }

      function Todo (props: Props) {
        //@ts-ignore
        let text = props.text || ''
        //@ts-ignore
        let id = props.key || ''
        //@ts-ignore
        let created = props.created
        //@ts-ignore
        let checked = props.completed
          ? 'checked="checked"'
          : ''

        return `
<li
  id="${id}"
  class="
    display-flex
    align-items-center
    border-bottom
  "
>
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

  return null
}
