import { SET_REF } from './types';

export const setRef = (ref: any) => async (dispatch: Function) => {
	dispatch({
		type: SET_REF,
		payload: ref,
	});
};
