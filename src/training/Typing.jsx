import React, { Component } from 'react';
import store from '../training/store';
export default class Typing extends Component {
    state = {
        keyWord: '',
    };
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            store.dispatch({ type: 'PUSH', cmd: e.target.value });
            this.setState({
                keyWord: e.target.value,
            });
        }
    };

    render() {
        const basicStyle = {
            border: '1px solid red',
            margin: '30px',
            padding: '30px',
        };

        return (
            <div style={basicStyle}>
                <input type="text" name="command" onKeyPress={this.handleKeyPress}></input>
            </div>
        );
    }
}
