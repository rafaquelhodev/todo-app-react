import React from "react"

export default props => (

    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#"><i className="fa fa-calendar-check-o"></i>TodoApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="#/todos">Todos</a>
                <a className="nav-item nav-link" href="#/about">About</a>
            </div>
        </div>
    </nav>
)