import { CHANGE_SELECTED_COLOR, CHANGE_SIZE, RESET } from '../actions';

export const INITIAL_STATE = { 
    size: { x: 10, y: 10 },
    art: []
};

const configReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_COLOR: {
        return {
                ...state, 
                selectedColor: action.selectedColor,
            }
        }
        case CHANGE_SIZE: {
            return {
                ...state,
                size: action.size
            }
        }
        case RESET: {
            localStorage.setItem('art_size', JSON.stringify(INITIAL_STATE.size));
            localStorage.setItem('art_matrix', JSON.stringify(INITIAL_STATE.art));
            return {
                ...state,
                ...INITIAL_STATE,
            }
        }
        default:
            return state;
    }
};

export default configReducer;