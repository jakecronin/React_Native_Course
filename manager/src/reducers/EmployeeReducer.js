import {
  EMPLOYEES_FETCH, EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  loading: 'false',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH:
      return { ...state, loading: 'true' }; //will later return loading info
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
