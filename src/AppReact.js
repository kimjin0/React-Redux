import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './react-module/AddNumberRoot';
import DisplayNumberRoot from './react-module/DisplayNumberRoot';

export default class AppReact extends Component {
    state = { number: 0 };
    render() {
        return (
            <div className="App">
                <h1>Root</h1>
                <AddNumberRoot
                    onClick={function (size) {
                        this.setState({
                            number: this.state.number + size,
                        });
                    }.bind(this)}
                ></AddNumberRoot>
                <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
            </div>
        );
    }
}
