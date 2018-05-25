import {
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  editing: 'false',
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMPLOYEE_UPDATE: //called whenever text is modified on the form
      //note the [] brackets are for key interpolation
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE: //called before and after employee is created, clears form
      return { INITIAL_STATE };
    case EMPLOYEE_SAVE_SUCCESS: //called after employee is saved
      return { INITIAL_STATE };
    default:
      return state;
  }
};
