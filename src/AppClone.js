import React, { Component } from 'react';
import './App.css';
import AddNumberClone from './component/AddNumberRootClone';

export default class AppClone extends Component {
    render() {
        return (
            <div className="App">
                <h1>Root</h1>
                <AddNumberClone></AddNumberClone>
            </div>
        );
    }
}
