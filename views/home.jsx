const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg" alt="Man on the Beach"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@coopery?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mohamed Nohassi</a>
                        on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
            </main>
        </Def>
    )
}

module.exports = home
