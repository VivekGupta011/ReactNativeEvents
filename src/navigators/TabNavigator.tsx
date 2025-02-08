import {BlurView} from '@react-native-community/blur';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import CustomIcon from '../components/CustomIcon';
import {COLORS} from '../theme/theme';
import HomeTabScreen from '../screen/HomeTabScreen';
import right from 'react-native-vector-icons/AntDesign';
import Home from '../assets/icons/Home';
import BookStand from '../assets/icons/BookStand';
import GetTicket from '../assets/icons/GetTicket';
import ExpoDetails from '../components/ExpoDetails';

function CartScreen() {
  return (
    <View style={styles.screenContainer}>
      <Button title="Cart Content" onPress={() => {}} />
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text className="text-red-900">Vivek Gupta</Text>
      <Button title="Favorites Content" onPress={() => {}} />
    </View>
  );
}

function OrderHistoryScreen() {
  return (
    <View style={styles.screenContainer}>
      <Button title="Order History Content" onPress={() => {}} />
    </View>
  );
}

// Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarStyle: styles.tabBarStyle,
      tabBarBackground: () => (
        <BlurView
          overlayColor=""
          blurAmount={15}
          // style={styles.BlurViewStyles}
        />
      ),
    }}>
    <Tab.Screen
  name="Get Ticket"
  component={HomeTabScreen}
  options={{
    headerShown: false,
    tabBarIcon: ({focused}) => (
      <GetTicket
        width={45}
        height={45}
        fillColor="#ff0000"
        strokeColor="#fff"
      />
    ),
    tabBarLabelStyle: {
      fontSize: 10, // Text size
      color: 'black', // Text color
      fontWeight: 'bold',
      
    },
    tabBarItemStyle: {
      marginTop: -10, // Lift icon and label up
    },
  }}
/>


    <Tab.Screen
      name="Home"
      component={FavoritesScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Home
            width={70}
            height={70}
            // fillColor={focused ? "#ff0000" : "#cccccc"}
            // strokeColor={focused ? "#000" : "#666"}
          />
        ),
        tabBarLabelStyle: {
          fontSize: 10, // Increase text size
          color: 'black', // Change text color
          fontWeight:'bold',
        },
        
      }}
    />

    <Tab.Screen
      name="Book A Stand"
      component={CartScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <BookStand
            width={45}
            height={45}
            fillColor="#ff0000"
            strokeColor="#fff"
          />
        ),
        tabBarLabelStyle: {
          fontSize: 10, // Increase text size
          color: 'black', // Change text color
          fontWeight:'bold',
        },
         tabBarItemStyle: {
      marginTop: -10, // Lift icon and label up
    },
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    height: 85,
    paddingHorizontal:50,
    position: 'absolute',
    // backgroundColor: COLORS.primaryBlackRGBA,
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

export default TabNavigator;
