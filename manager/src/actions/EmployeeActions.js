import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE,
  EMPLOYEES_FETCH, EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from './types';

require('firebase/firestore');

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeFormClear = () => {
  return {
    type: EMPLOYEE_CREATE,
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

export const employeeSave = ({ name, phone, shift, uid }) => {
  if (!uid) {
    return () => console.log('no valid uid in employeeSave');
  }
  const data = { name, phone, shift };
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.firestore().collection('users')
    .doc(currentUser.uid).collection('employees')
    .doc(uid)
    .update(data)
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
      Actions.pop();
      //clear the form
      //
    });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.firestore().collection('users')
    .doc(currentUser.uid).collection('employees')
    .doc(uid)
    .delete()
    .then(() => {
      console.log('deletion successful');
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS }); //clear form
      Actions.pop();
    })
    .catch(console.log('deletion failed'));
  };
};
