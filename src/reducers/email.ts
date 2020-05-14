import { SEND_CONFIRMATION } from '../actions/types';

const initialState = {
	confirmation: [] as any,
	loading: true,
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case SEND_CONFIRMATION:
			return {
				...state,
				confirmation: payload,
				loading: false,
			};
		default:
			return state;
	}
};
