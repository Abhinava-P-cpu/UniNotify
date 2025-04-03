import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import NotificationsScreen from '../screens/NotificationsScreen';

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(userToken ? true : false);
    };
    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) return null; // Show nothing while checking

  return (
    <NavigationContainer>
      {isLoggedIn ? <NotificationsScreen /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
