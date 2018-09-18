//@ts-check

import * as React from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import './css/TodoForm.css';

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todo-form container">
                <Form onSubmit={this.props.handleSubmit}>
                    <FormGroup>
                        <Label for="title">タスク</Label>
                        <Input name="title" type="text" placeholder="例：reactの勉強" />
                        <FormText color="muted">
                            Todoリストに追加したいタスクを記載してください。
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">備考</Label>
                        <Input type="textarea" name="desc" placeholder="例：todoアプリを作っています！" />
                        <FormText color="muted">
                            タスクについて補足したい説明などがあれば記載してください。
                        </FormText>
                    </FormGroup>
                    <Button type="submit">todoを作成</Button>
                </Form>
            </div>
        );
    };
}

export default TodoForm;
