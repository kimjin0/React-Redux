import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppRedux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    //Provier는 반드시 store를 받아야 한다.
    <App />,
    document.getElementById('root')
);

// import { Provider } from 'react-redux';
// import store from './store';
// ReactDOM.render(
//     //Provier는 반드시 store를 받아야 한다.
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
