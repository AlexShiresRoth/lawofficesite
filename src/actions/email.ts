import axios from 'axios';
import { SEND_CONFIRMATION } from './types';

interface Props {
	email: string;
	name: string;
}

export const handleConfirmationEmail = ({ email, name }: Props) => async (dispatch: any) => {
	try {
		const res = await axios({
			method: 'POST',
			url: `https://asrserver.herokuapp.com/api/lawoffice/send-email/confirm-email`,
			data: {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Access-Control-Allow-Origin': 'http://localhost:3000/',
				},
				email,
				name,
			},
		});

		dispatch({
			type: SEND_CONFIRMATION,
			payload: res.data,
		});
	} catch (error) {
		console.error(error);
		dispatch({
			type: SEND_CONFIRMATION,
			payload: error.response.data,
		});
	}
};
