import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FoodContext } from "../context/FoodContext";

const AddFoodScreen = ({ navigation }) => {
  const [foodName, setFoodName] = useState("");
  const { addFoodItem } = useContext(FoodContext);

  const handleAddFood = () => {
    if (foodName.trim() !== "") {
      addFoodItem(foodName);
      navigation.goBack();
    } else {
      alert("Please enter a food name");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a New Food Item</Text>
      <TextInput
        style={styles.input}
        value={foodName}
        onChangeText={setFoodName}
        placeholder="Enter food name"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddFood}>
        <Text style={styles.addButtonText}>Add Food</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 100,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  addButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
});
