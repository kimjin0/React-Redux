import React, { Component } from 'react';

export default class Typing extends Component {
    render() {
        const basicStyle = {
            border: '1px solid red',
            margin: '30px',
            padding: '30px',
        };
        return (
            <div style={basicStyle}>
                <form>
                    <input type="text" name="command"></input>
                </form>
            </div>
        );
    }
}
