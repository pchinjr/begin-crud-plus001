type Props = {
  todos: object[];
};

export function Todo(todos: Props){
     init()

      // GET all todos
      function init () {
        fetch('/todos', {
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
        list && current.length
        //@ts-ignore
        ? list.innerHTML = current.map(t => Todo(t)).join(''): ''          
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
<li  id="${id}">
  <form
    action="/todos"
    method="POST"
    "
  >
    <input
      type="text"
      name="text"
      value="${text}"
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
    >
      Nevermind
    </button>
  </form>
</li>
        `
      }
    return update
}
