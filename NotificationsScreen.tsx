import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..//navigation/RootStackParamList";  // Import the type definition

// Define the navigation type for proper TypeScript support
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "NotificationsScreen">;

const notifications = [
  { id: "1", name: "YouTube", message: "You have 3 new videos", icon: require("../../assets/youtube.png") },
  { id: "2", name: "Telegram", message: "You have 5 new messages", icon: require("../../assets/telegram.png") },
  { id: "3", name: "WhatsApp", message: "You have 4 new messages", icon: require("../../assets/whatsapp.png") },
  { id: "4", name: "Instagram", message: "You have 2 new posts", icon: require("../../assets/instagram.png") },
  { id: "5", name: "Twitter", message: "You have 10 new tweets", icon: require("../../assets/twitter.png") },
];

const NotificationsScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleAppPress = (appName: string) => {
    navigation.navigate("SortingScreen", { appName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <Text style={styles.subHeader}>New</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationItem} onPress={() => handleAppPress(item.name)}>
            <Image source={item.icon} style={styles.icon} />
            <View>
              <Text style={styles.appName}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ccc",
    marginTop: 10,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  appName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  message: {
    fontSize: 14,
    color: "#888",
  },
});

export default NotificationsScreen;
