import { UPDATE_VIEW } from '../actions';
import initialState from './initialState';

export default (state = initialState.view, { type, payload }) => {
  switch (type) {
    case UPDATE_VIEW:
      return payload.view;
    default:
      return initialState.view;
  }
};
