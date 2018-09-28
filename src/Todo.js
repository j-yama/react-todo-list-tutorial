import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {

    render() {
        const className = this.props.done ? 'done' : 'undone';
        const link = this.props.done ? '元に戻す' : '完了';
        const buttonType = this.props.done ? 'btn btn-secondary' : 'btn btn-info';

        return (
            <li className={className + ' ' + 'list-group-item todo'}>
                <span className="todo-id">{this.props.id}</span>
                <span className="todo-title">:{this.props.title}</span>
                <a href="" className={buttonType} onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props);}}>{link}</a>
                <p className="todo-desc">{this.props.desc}</p>
            </li>
        );
    };
}

export default Todo;