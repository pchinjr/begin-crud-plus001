type Props = {
  todos: object[];
};

export function Todo(){
  //kick it off!
  init()

  // GET all todos
  async function init () {
    await fetch('https://invent-jf9-staging.begin.app/', {
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
    let current = todos.filter(t => !t.completed)
    list && current.length
    //@ts-ignore
    ? list.innerHTML = current.map(t => renderTodo(t)).join('')
    : ''
  }
  
  function renderTodo (props: Props) {
    //@ts-ignore
    let text = props.text 
    //@ts-ignore
    let id = props.key
    //@ts-ignore
    let created = props.created

    return `
      <li id="${id}">    
        <p>${text} - ${id} - ${created}</p> 
          <form action="/todos/delete" method="POST">
          <input type="hidden" name="key" value="${id}" />
          <button>Nevermind</button>
        </form>
      </li>`
  }

  return update
}
