import React from 'react';


// 3rd party libraries
import {
  Actions,
  Router,
  Scene,
  // Reducer,
} from 'react-native-router-flux';
import Main from './src/views/main';
import UserRegister from './src/views/user_register';
import RetailerHome from './src/views/retailer_home';

console.ignoredYellowBox = [
  'Warning: In next release empty section headers will be rendered.',
  'Warning: setState(...): Can only update a mounted or mounting component.',
  'Warning: You are manually calling a React.PropTypes validation',

];

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key='main' component={Main} title='Main'/>
    <Scene key='user_register' component={UserRegister} title='Login'/>
    <Scene key='retailer_home' component={RetailerHome} title='RetailerHome'/>
  </Scene>
);

class FlowerStore extends React.Component {
  render() {
    return <Router scenes={scenes} />;
  }
}

export default FlowerStore;

