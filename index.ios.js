// place code in here for IOS

// import a lib to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header.js';
import AlbumList from './src/components/albumList.js';

// Create a component
const App = () => (
	<View>
		<Header headerText={'Albums'} />
		<AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
