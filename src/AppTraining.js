import React, { Component } from 'react';
import Typing from './training/Typing';
import Display from './training/Display';

class App extends Component {
    render() {
        return (
            <div>
                <Display></Display>
                <hr></hr>
                <Typing></Typing>
            </div>
        );
    }
}
// function App() {
//     return <div className="App">hello world</div>;
// }

export default App;
