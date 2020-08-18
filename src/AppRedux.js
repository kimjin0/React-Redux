import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './redux-module/AddNumberRoot';
import DisplayNumberRoot from './redux-module/DisplayNumberRoot';

export default class AppRedux extends Component {
    render() {
        return (
            <div>
                <h1>Root</h1>
                <AddNumberRoot></AddNumberRoot>
                <DisplayNumberRoot></DisplayNumberRoot>
            </div>
        );
    }
}
