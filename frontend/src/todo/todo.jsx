import React, { Component } from "react"
import axios from "axios"

import PageHeader from "../template/pageHeader"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: "", list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: "", list: resp.data}))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description

        axios.post(URL, { description })
            .then(() => this.refresh())
    }

    handleRemove(element) {
        axios.delete(`${URL}/${element._id}`)
            .then(() => this.refresh())
    }

    handleMarkAsDone(element) {
        axios.put(`${URL}/${element._id}`, { ...element, done: true })
        .then(() => this.refresh())
    }

    handleMarkAsPending(element) {
        axios.put(`${URL}/${element._id}`, { ...element, done: false })
        .then(() => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name="Todos" small="Create"></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}></TodoForm>
                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}>
                </TodoList>
            </div>
        )
    }
}