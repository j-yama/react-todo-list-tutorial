import React, { Component } from 'react';
import Todo from './Todo';
import './css/TodoList.css'

class TodoList extends Component {

    render() {
        const todos = this.props.todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
            />
        );

        return (
            <div class="container todo-list">
                <ul class="list-group">
                    {todos}
                </ul>
            </div>
        );
    };
}

export default TodoList;
