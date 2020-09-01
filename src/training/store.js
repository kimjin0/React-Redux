import { createStore } from 'redux';

export default createStore(function (state, action) {
    if (state === undefined) {
        return { cmd: '' };
    }

    if (action.type === 'PUSH') {
        return { ...state, cmd: action.cmd };
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
