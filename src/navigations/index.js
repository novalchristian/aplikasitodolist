import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../pages/home.page';
import HomeDetailPage from '../pages/home-detail.page';
import ProfilePage from '../pages/profile.page';

const Stack = createStackNavigator();
function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetailPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{
            name: 'Home',
            headerTitle: 'Home',
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerTitle: 'Profile',
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
