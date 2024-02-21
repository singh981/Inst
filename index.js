/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Amplify} from 'aws-amplify';
import App from './src/App';
import {name as appName} from './app.json';

import amplifyconfig from './src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

AppRegistry.registerComponent(appName, () => App);
