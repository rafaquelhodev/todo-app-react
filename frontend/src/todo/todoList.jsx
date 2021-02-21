import React from "react"
import todoForm from "./todoForm"
import IconButton from "../template/iconButton"

export default props => {
    const renderRows = () => {
        const list = props.list || []

        return list.map(el =>
            <tr key={el._id}>
                <td>{el.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(el)}/>
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