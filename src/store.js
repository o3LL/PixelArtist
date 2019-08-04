import { createStore } from "redux";
import rootReducer from "./reducers";

let art = JSON.parse(localStorage.getItem('art_matrix'));
let sizes = JSON.parse(localStorage.getItem('art_size'));
const initialState = { 
    size: sizes || { x: 10, y: 10 },
    art: art || []
};

export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());