import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, RouteProp, useNavigation, NavigationProp } from "@react-navigation/native";

// Define navigation types
type RootStackParamList = {
  SortingScreen: { appName?: string };
  DescriptionScreen: { appName: string };
};

// Define the expected type of route params
type SortingScreenRouteParams = RouteProp<{ params: { appName?: string } }, "params">;

const SortingScreen = () => {
  const route = useRoute<SortingScreenRouteParams>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // ✅ Correctly typed navigation
  const appName = route.params?.appName ?? "Notifications"; // Default to "Notifications" if undefined

  // State to track selected sorting option
  const [sortOption, setSortOption] = useState("Most recent first");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`Sort and manage ${appName}`}</Text>

      <Text style={styles.sectionTitle}>Sort by</Text>

      {/* Sort Option: Most Recent First */}
      <TouchableOpacity onPress={() => setSortOption("Most recent first")}>
        <Text style={[styles.option, sortOption === "Most recent first" && styles.selectedOption]}>
          Most recent first {sortOption === "Most recent first" ? "✔️" : ""}
        </Text>
      </TouchableOpacity>

      {/* Sort Option: Priority First */}
      <TouchableOpacity onPress={() => setSortOption("Priority first")}>
        <Text style={[styles.option, sortOption === "Priority first" && styles.selectedOption]}>
          Priority first {sortOption === "Priority first" ? "✔️" : ""}
        </Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Manage notifications from</Text>

      {/* Manage Notifications */}
      <TouchableOpacity>
        <Text style={styles.option}>All apps →</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.option}>Only show priority conversations →</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.option}>Turn off notifications →</Text>
      </TouchableOpacity>

      {/* Done Button */}
      <TouchableOpacity 
        style={styles.doneButton} 
        onPress={() => navigation.navigate("DescriptionScreen", { appName })}
      >
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#13131A", padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", color: "white", textAlign: "center", marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "white", marginTop: 15 },
  option: { fontSize: 16, color: "white", paddingVertical: 10 },
  selectedOption: { fontWeight: "bold", color: "#A569FF" },
  doneButton: { backgroundColor: "#A569FF", padding: 12, borderRadius: 10, marginTop: 20, alignItems: "center" },
  doneText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default SortingScreen;
