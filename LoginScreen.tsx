import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  BottomTabs: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username === "admin" && password === "password") {
      await AsyncStorage.setItem("userToken", "loggedIn"); // Save login state
      navigation.replace("BottomTabs"); // Navigate to home
    } else {
      Alert.alert("Invalid Credentials", "Please enter the correct username and password.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#bbb"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#bbb"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Reset link sent!")}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert("Sign Up", "Sign-up process started!")}>
        <Text style={styles.signupText}>New user? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 10,
  },
  forgotPassword: {
    color: "#bbb",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#6a0dad",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    color: "#fff",
    marginTop: 20,
    fontSize: 16,
  },
});

export default LoginScreen;
