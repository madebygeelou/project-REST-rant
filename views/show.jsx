const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <a href={'/places/${data.id}/edit'} className="btn btn-warning"> 
  Edit
</a> 
<form method="POST" action={'/places/${data.id}?_method=DELETE'}>
    <button type="submit" className="btn btn-danger">
        Delete
    </button>
</form>
            <h1>{ data.place.name }</h1>
            <h1>Rating</h1>
            <h1>Comments</h1>
          </main>
        </Def>
    )
}

module.exports = show
