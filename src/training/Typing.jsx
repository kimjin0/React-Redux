import React, { Component } from 'react';

export default class Typing extends Component {
    state = {
        keyWord: '',
    };
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
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
