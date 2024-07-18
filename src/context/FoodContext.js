import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedItems = await AsyncStorage.getItem("foodItems");
      if (storedItems) setFoodItems(JSON.parse(storedItems));
    };
    fetchData();
  }, []);

  const saveFoodItems = async (items) => {
    await AsyncStorage.setItem("foodItems", JSON.stringify(items));
    setFoodItems(items);
  };

  const addFoodItem = async (name) => {
    const newItems = [...foodItems, { name, available: true }];
    saveFoodItems(newItems);
  };

  const deleteFoodItem = async (index) => {
    const updatedItems = foodItems.filter((_, i) => i !== index);
    saveFoodItems(updatedItems);
  };

  const toggleAvailability = async (index) => {
    const updatedItems = foodItems.map((item, i) =>
      i === index ? { ...item, available: !item.available } : item
    );
    saveFoodItems(updatedItems);
  };

  return (
    <FoodContext.Provider
      value={{
        foodItems,
        addFoodItem,
        deleteFoodItem,
        toggleAvailability,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
