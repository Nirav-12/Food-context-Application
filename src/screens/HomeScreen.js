import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FoodContext } from "../context/FoodContext";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  const { foodItems, deleteFoodItem, toggleAvailability } =
    useContext(FoodContext);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Food Name</Text>
      <Text style={[styles.headerText, { flex: 3 }]}>Change Availability</Text>
      <Text style={[styles.headerText, { flex: 2 }]}>Delete</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.heading}>Food Item</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={foodItems.length ? renderHeader : <></>}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.item,
              {
                backgroundColor: item.available ? "#ECFFDC" : "lightgray",
                borderColor: item.available ? "green" : "gray",
              },
            ]}
          >
            <Text
              style={{
                ...styles.itemText,
                textDecorationLine: item.available ? "none" : "line-through",
              }}
            >
              {item.name}
            </Text>
            <TouchableOpacity
              onPress={() => toggleAvailability(index)}
              style={{
                flex: 3,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: item.available ? "green" : "red" }}>
                {item.available ? "Deativate" : "Reactivate"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => deleteFoodItem(index)}
              style={{ flex: 2, alignItems: "center" }}
            >
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddFood")}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    flex: 8,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    flex: 8,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#007bff",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HomeScreen;
