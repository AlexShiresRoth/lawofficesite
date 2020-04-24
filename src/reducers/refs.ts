import { SET_REF } from '../actions/types';

const initialState = {
	ref: null,
};

export default (state = initialState, action: object) => {
	const { type, payload }: any = action;
	switch (type) {
		case SET_REF:
			return {
				...state,
				ref: payload,
			};
		default:
			return state;
	}
};
