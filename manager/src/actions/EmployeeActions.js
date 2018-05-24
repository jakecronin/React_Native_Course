import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE,
  EMPLOYEES_FETCH, EMPLOYEE_FETCH_SUCCESS,
} from './types';

require('firebase/firestore');

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const employeeData = { name, phone, shift };
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.firestore().collection('users')
    .doc(currentUser.uid).collection('employees')
    .doc()
    .set(employeeData)
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.pop();
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: EMPLOYEES_FETCH }); // Begin Loading

    firebase.firestore().collection('users').doc(currentUser.uid).collection('employees')
    .onSnapshot((snapshot) => {
      const data = {};
      snapshot.forEach((doc) => {
        data[doc.id] = doc.data();
      });
      //dispatch new action to handle what to do with this data
      dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: data });
    });
  };
};
