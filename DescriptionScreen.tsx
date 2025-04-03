import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

// Define route params type
type DescriptionScreenRouteParams = {
  appName: string;
};

// Mock Data (Replace this with real API data later)
const mockData = [
  {
    id: "1",
    title: "Whitney Houston - I Will Always Love You",
    category: "Music",
    views: "1.2M views",
  },
  {
    id: "2",
    title: "The Voice 2021 - Best of the Blind Auditions",
    category: "TV show",
    views: "3.5M views",
  },
  {
    id: "3",
    title: "Maroon 5 - Sugar - 6 days ago",
    category: "Music",
    views: "2.1M views",
  },
  {
    id: "4",
    title: "Taylor Swift - Blank Space - 1 week ago",
    category: "Music",
    views: "4.3M views",
   
  },
];

const DescriptionScreen = () => {
  const route = useRoute<RouteProp<{ params: DescriptionScreenRouteParams }, 'params'>>();
  const navigation = useNavigation();
  const appName = route.params?.appName || "App"; // Default title if not provided

  return (
    <View style={styles.container}>
      {/* Header with Title and Settings Icon */}
      <View style={styles.header}>
        <Text style={styles.title}>{appName}</Text>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>New</Text>

      {/* Video List */}
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.thumbnail} />
            <View style={styles.textContainer}>
              <Text style={styles.videoTitle} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.videoDetails}>{item.category} · {item.views}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#13131A", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold", color: "white" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "white", marginBottom: 10 },
  itemContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  thumbnail: { width: 50, height: 50, borderRadius: 8, marginRight: 15 },
  textContainer: { flex: 1 },
  videoTitle: { fontSize: 16, color: "white", fontWeight: "bold" },
  videoDetails: { fontSize: 14, color: "#7a7a7a" },
});

export default DescriptionScreen;
