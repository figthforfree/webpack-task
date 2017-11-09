import React, { Component } from 'react';
import './TodoInput.css'
export default class TodoInput extends Component {
    render() {
        return <input type="text" value={this.props.content}
            className="TodoInput"
            onChange={this.changeTitle.bind(this)}
            onKeyPress={this.submit.bind(this)} 
            placeholder="请输入待办事项"
            />
    }
    submit(e) {
        if (e.key === 'Enter') {
            this.props.onSubmit(e);
        }
    }
    changeTitle(e) {
        this.props.onChange(e)
    }
}