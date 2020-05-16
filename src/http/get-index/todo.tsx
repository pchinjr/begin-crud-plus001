type Props = {
  todos: object[];
};

export function Todo(todos: Props){
      
      
      // Kick off the app
      init()

      //GET all todos
      function init () {
        fetch('http://localhost:3333/todos', {
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res)
        .then(body => body.json())
      
        //Call update with fetched todos
        .then(json => update(json.todos))
      }
      
      // Update the DOM with data
      //https://stackoverflow.com/a/59046041/5755373
      
      function update (todos: Props) {
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
    <pre>${text} - ${created} - ${id}</pre>
  <form action="/todos/delete" method="POST">
    <input type="hidden" name="key" value="${id}" />
    <button>Nevermind</button>
  </form>
</li>`
      }
  return update
}
