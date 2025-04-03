import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomTabsNavigator from "./src/navigation/BottomTabNavigator";
import SortingScreen from "./src/screens/SortingScreen";
import DescriptionScreen from "./src/screens/DescriptionScreen";
import LoginScreen from ".//src/screens/LoginScreen"; // Import the Login Screen

// Define the navigation stack types
type RootStackParamList = {
  Login: undefined; // Login screen
  BottomTabs: undefined; // Main Bottom Tabs
  SortingScreen: { appName?: string }; // Sorting screen with optional appName
  DescriptionScreen: { appName: string }; // Description screen expects appName
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(userToken ? true : false);
    };
    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) return null; // Show nothing while checking

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            {/* Main Bottom Tab Navigator */}
            <Stack.Screen name="BottomTabs" component={BottomTabsNavigator} />
            {/* Sorting Screen */}
            <Stack.Screen name="SortingScreen" component={SortingScreen} />
            {/* Description Screen */}
            <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
