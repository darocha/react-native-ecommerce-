import React from 'react';


// 3rd party libraries
import {
  Actions,
  Router,
  Scene,
  // Reducer,
} from 'react-native-router-flux';
import Main from './src/views/main';


console.ignoredYellowBox = [
  'Warning: In next release empty section headers will be rendered.',
  'Warning: setState(...): Can only update a mounted or mounting component.',
  'Warning: You are manually calling a React.PropTypes validation',

];

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key='Main' component={Main} title='Main'/>
  </Scene>
);

class FlowerStore extends React.Component {
  render() {
    return <Router scenes={scenes} />;
  }
}

export default FlowerStore;

