import React from "react"

export default props => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><i className="fa fa-calendar-check-o"></i>TodoApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#/todos">Todos</a>
                            </li>
                            <li className="nav-item">
                    <a className="nav-link" href="#/about">About</a>
                </li>
            </ul>
        </div>
    </nav>
)