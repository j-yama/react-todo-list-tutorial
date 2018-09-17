import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {

    render() {
        const className = 'undone';
        const link = this.props.done ? '元に戻す' : '完了';
        return (
            <li className={className + ' ' + 'list-group-item todo'}>
                <span className="todo-id">{this.props.id}</span>
                <span className="todo-title">:{this.props.title}</span>
                <a href="" className="btn btn-info">{link}</a>
                <p className="todo-desc">{this.props.desc}</p>
            </li>
        );
    };
}

export default Todo;