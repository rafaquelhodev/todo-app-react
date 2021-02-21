import React from "react"

export default props => {
    return (
        <div >
            Summary
            <li>Finished tasks: {props.nFinishedTasks}</li>
            <li>Unfinished tasks: {props.nUnFinishedTasks}</li>
        </div>
    )
}