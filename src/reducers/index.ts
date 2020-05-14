import { combineReducers } from 'redux';
import refs from './refs';
import survey from './survey';
import email from './email';
export default combineReducers({ refs, survey, email });
