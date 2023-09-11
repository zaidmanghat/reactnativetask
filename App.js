import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Model} from './components/screens/Models';
import {Profile} from './components/screens/Profile';
import {Details} from './components/screens/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaProvider as RNCSafeAreaProvider} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/AntDesign';
import Ic from 'react-native-vector-icons/MaterialIcons';
import {Detailed} from './components/card detail screens/detailedcard';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const Stacknav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Model}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detailed"
        component={Detailed}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Stacknav}
          options={{
            tabBarIcon: () => <Icon name="home" color={'gray'} size={30} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarIcon: () => <Ic name="details" color={'gray'} size={25} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Ico name="profile" color={'gray'} size={25} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <RNCSafeAreaProvider>
      <>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        <MyTabs />
      </>
    </RNCSafeAreaProvider>
  );
}
