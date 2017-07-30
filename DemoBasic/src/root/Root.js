import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from '../main/Main';
import SearchWorks from '../search/SearchWorks';

export default Root = StackNavigator({
	Main: { screen: Main },
	SearchWorks: { screen: SearchWorks }
}, {
	headerMode: 'none'
});