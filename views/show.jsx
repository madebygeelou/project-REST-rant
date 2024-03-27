const React = require('react')
const Def = require('../default')

function show (data) {
    let comments =  (
        <h3 className="inactive">
            No Comments Yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not Yet Rated!
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings= data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '*'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! -_-' : 'Rave! ^~^'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={'/places/${data.place.id}/comment/${c.id}?_method=DELETE'}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment"/>
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
            <div className='row'>
                <div className='col-sm-6'>
                    <img src={data.place.pic} alt={data.place.name}/>
                    <h3>
                        Located i {data.place.city}, {data.place.state}
                    </h3>
                </div>
            </div>
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
            <h2>
                Description
            </h2>
            <h3>
                {data.place.showEstablished()}
            </h3>
            <h4>
                Serving {data.place.cuisines}
            </h4>
            <h1>Comments</h1>
            {comments}
          </main>
        </Def>
    )
}

module.exports = show
