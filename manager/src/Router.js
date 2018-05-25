import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
      <Router>
        <Scene key='root' hideNavBar initial>
          <Scene key='auth'>
            <Scene key='loginRoot' title={'Please Login'} component={LoginForm} initial />
          </Scene>
          <Scene key='main'>
            <Scene
              key='employeeList'
              title={'Employees'}
              rightTitle="Add"
              onRight={() => Actions.employeeCreate()}
              component={EmployeeList}
            />
            <Scene key='employeeCreate' title={'Create Employee'} component={EmployeeCreate} />
            <Scene key='employeeEdit' title={'Edit Employee'} component={EmployeeEdit} />
          </Scene>
        </Scene>
      </Router>
  );
};

export default RouterComponent;
