//@ts-check

import * as React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './css/TodoForm.css';

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todo-form container">
                <Form onSubmit={this.props.handleSubmit}>
                    <FormGroup>
                        <Input name="title" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="desc" placeholder="説明を入力" defaultValue="todoアプリを作っています！" />
                    </FormGroup>
                    <Button type="submit">todoを作成</Button>
                </Form>
            </div>
        );
    };
}

export default TodoForm;
