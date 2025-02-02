import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import SplashScreen from './src/screens/SplashScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {Provider as AuthProvider} from './src/context/authContext';
import {setNavigator} from './src/navigationRef';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <MaterialCommunityIcons name='map-marker-distance' size={20}/>
};

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App 
            ref={(navigator) => {
              setNavigator(navigator) 
            }}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};