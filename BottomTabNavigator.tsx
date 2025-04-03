import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import NotificationsScreen from '../screens/NotificationsScreen';
import SortingScreen from '../screens/SortingScreen';
import DescriptionScreen from '../screens/DescriptionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Placeholder Screens
const SearchScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Search Screen</Text>
  </View>
);
const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

// Stack Navigator for Notifications + Sorting Screen + Description Screen
const NotificationsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="SortingScreen" component={SortingScreen} />
      <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'circle';

          if (route.name === 'Apps') iconName = 'grid';
          else if (route.name === 'Search') iconName = 'search';
          else if (route.name === 'Settings') iconName = 'book';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#0d0d0d',
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#7a7a7a',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Apps" component={NotificationsStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default BottomTabsNavigator;
