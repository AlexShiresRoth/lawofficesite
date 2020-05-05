import { SET_CHECKED, CLEAR_CHECKBOXES, REMOVE_CHECKED } from '../actions/types';

const initialState = {
	checkboxes: [] as any,
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;
	console.log(type);
	switch (type) {
		case SET_CHECKED:
			return {
				...state,
				checkboxes: [payload, ...state.checkboxes]
					.filter((item) => item.surveyQuestion !== '')
					.sort((a, b) => a.number - b.number),
			};
		case REMOVE_CHECKED:
			return {
				...state,
				checkboxes: state.checkboxes.splice(payload.number, 1),
			};
		case CLEAR_CHECKBOXES:
			return {
				...state,
				checkboxes: [],
			};
		default:
			return state;
	}
};
