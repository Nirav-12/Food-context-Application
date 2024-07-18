import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import AddFoodScreen from "./src/screens/AddFoodScreen";
import { FoodProvider } from "./src/context/FoodContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <FoodProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddFood"
            component={AddFoodScreen}
            options={{ title: "Add Food Item" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FoodProvider>
  );
}
