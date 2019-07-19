/**
 * @format
 */

// index.ios.js or index.android.js
// make sure you use `import` and not `require`!
import './shim.js'
// ...the rest of your code
import crypto from 'crypto'
// use crypto
console.log(crypto.randomBytes(32).toString('hex'))

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
