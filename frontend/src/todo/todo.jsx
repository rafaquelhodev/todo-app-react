import React, { Component } from "react"
import axios from "axios"

import PageHeader from "../template/pageHeader"
import TodoForm from "./todoForm"
import TodoList from "./todoList"
import TodoSummary from "./todoSummary"

const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: "", list: [], nFinishedTasks: 0, nUnfinishedTasks: 0 }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleSummary = this.handleSummary.bind(this)

        this.refresh()
    }

    refresh(description = "") {
        const search = description ? `&description__regex=/${description}/` : ""
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                let todoStatus = this.handleSummary(resp.data)
                this.setState({...this.state, description, list: resp.data, nFinishedTasks: todoStatus.nFinishedTasks, nUnfinishedTasks: todoStatus.unFinishedTasks})
            })
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description

        axios.post(URL, { description })
            .then(() => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(() => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(() => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleSummary(todoList) {
        let nFinishedTasks = 0;
        let unFinishedTasks = 0;

        for (let index = 0; index < todoList.length; index++) {
            const todo = todoList[index];
            console.log(todo)
            if (todo.done)
                nFinishedTasks += 1
            else
                unFinishedTasks += 1
        }

        let taskStatus = new Object()
        taskStatus.nFinishedTasks = nFinishedTasks
        taskStatus.unFinishedTasks = unFinishedTasks
        return taskStatus
    }

    render() {
        return (
            <div>
                <PageHeader name="Todos" small="Create"></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}>
                </TodoForm>
                <TodoSummary nFinishedTasks={this.state.nFinishedTasks}
                    nUnFinishedTasks={this.state.nUnfinishedTasks}>
                </TodoSummary>
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