import React from "react"
import todoForm from "./todoForm"
import IconButton from "../template/iconButton"

export default props => {
    const renderRows = () => {
        const list = props.list || []

        return list.map(el =>
            <tr key={el._id}>
                <td className={el.done? "markedAsDone": ""}>{el.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={el.done} onClick={() => props.handleMarkAsDone(el)}/>
                    <IconButton style="warning" icon="undo" hide={!el.done} onClick={() => props.handleMarkAsPending(el)}/>
                    <IconButton style="danger" icon="trash-o" hide={!el.done} onClick={() => props.handleRemove(el)}/>
                </td>
            </tr>)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows(props.list)}
            </tbody>
        </table>
    )
}