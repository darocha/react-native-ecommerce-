import {
  AppRegistry,
  StatusBar,
} from 'react-native';

import FlowerStore from './flower_store';

// StatusBar.setBarStyle('light-content', true);
console.log(FlowerStore);

AppRegistry.registerComponent('flower_store', () => FlowerStore);
