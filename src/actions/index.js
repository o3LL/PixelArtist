export const CHANGE_SELECTED_COLOR = 'color.CHANGE_SELECTED_COLOR';
export const CHANGE_SIZE = 'matrix.CHANGE_SIZE';
export const RESET = 'all.RESET';

export const updateSelectedColor = selectedColor => ({
    type: CHANGE_SELECTED_COLOR,
    selectedColor
});

export const updateSize = size => ({
    type: CHANGE_SIZE,
    size
})

export const resetAll = () => ({
    type: RESET
});
