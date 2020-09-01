import { createStore } from 'redux';

export default createStore(function (state, action) {
    console.log(action);
    if (state === undefined) {
        return { number: 0, username: 'jin0' };
    }
    if ((action.type = 'INCREMENT')) {
        // return {number :state.number + action.size}
        return { ...state, number: state.number + action.size, username: action.username };
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
