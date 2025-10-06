import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuProvider } from "./context/menucontext";
import HomeScreen from "./screens/HomeScreen";
import AddDishScreen from "./screens/AddDishScreen";
import MenuItemScreen from "./screens/MenuItemScreen";

// Menu Item type
export type MenuItem = {
  id: number;
  name: string;
  description: string;
  course: string;
  price: number;
};

// Stack params
export type RootStackParamList = {
  Home: undefined;
  "Add Dish": undefined;
  "Menu Item": { item: MenuItem };
};

// Colors defined here
export const Colors = {
  primary: "#B71C1C",
  background: "#FFF8F6",
  text: "#333",
  card: "#FFF",
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add Dish" component={AddDishScreen} />
          <Stack.Screen name="Menu Item" component={MenuItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
