import DisplayNumber from '../component/DisplayNumber';
import { connect } from 'react-redux';
function mapReduxStateToReactProps(state) {
    //>> redux의 state
    return {
        number: state.number,
        username: state.username,
    };
}
function mapReduxDispatchToReactProps() {
    return {};
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);
// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//     state = { number: store.getState().number };
//     constructor(props) {
//         super(props);
//         store.subscribe(
//             function () {
//                 this.setState({
//                     number: store.getState().number,
//                 });
//             }.bind(this)
//         );
//     }
//     render() {
//         return <DisplayNumber number={this.state.number}></DisplayNumber>;
//     }
// }
