import { SET_CHECKED, REMOVE_CHECKED, CLEAR_CHECKBOXES } from './types';

export const setCheckBoxes = (value: any) => async (dispatch: any) => {
	dispatch({
		type: SET_CHECKED,
		payload: value,
	});
};

export const removeCheck = (value: any) => async (dispatch: any) => {
	dispatch({
		type: REMOVE_CHECKED,
		payload: value,
	});
};

export const clearCheckBoxes = () => async (dispatch: any) => {
	dispatch({
		type: CLEAR_CHECKBOXES,
		payload: null,
	});
};
