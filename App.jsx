import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import './global.css';
import ExpoDetails from './src/components/ExpoDetails';
import TabNavigator from './src/navigators/TabNavigator';
import Speakers from './src/components/Speakers';
import Agenda from './src/components/Agenda';
import FloorPlan from './src/components/FloorPlan';
import Sponsor from './src/components/Sponsor';
import Exhibitors from './src/components/Exhibitors';

// Drawer Navigator
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigator />
    </View>
  );
}

// Drawer Navigation Component
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ExpoDetails" component={ExpoDetails} />
      {/* <Drawer.Screen name="Speakers" component={Speakers} /> */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        {/* Main Drawer Navigator */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        {/* Additional Screens not in Drawer */}
        <Stack.Screen
          name="Agenda"
          component={Agenda}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="Exhibitors"
          component={Exhibitors}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="Speakers"
          component={Speakers}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="FloorPlan"
          component={FloorPlan}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="Sponsor"
          component={Sponsor}
          options={{ animation: 'slide_from_bottom' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
