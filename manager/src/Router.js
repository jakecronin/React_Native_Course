import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
      <Router>
        <Scene key='root' hideNavBar>
          <Scene key='auth'>
            <Scene key='loginRoot' title={'Please Login'} component={LoginForm} initial />
          </Scene>
          <Scene key='main' initial>
            <Scene
              key='employeeList'
              title={'Employees'}
              rightTitle="Add"
              onRight={() => Actions.employeeCreate()}
              component={EmployeeList}
              initial
            />
            <Scene key='employeeCreate' title={'Create Employee'} component={EmployeeCreate} />
            <Scene key='employeeDetail' title={'Name'} component={EmployeeList} />
          </Scene>
        </Scene>
      </Router>
  );
};

export default RouterComponent;
