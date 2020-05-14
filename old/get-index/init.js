export function init() {
    fetch('/todos', {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res)
    .then(body => body.json())
    // Call update with fetched todos
    //.then(json => update(json.todos))
    .then(json => console.log(json))
  
}