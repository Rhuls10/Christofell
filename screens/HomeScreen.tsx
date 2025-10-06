import React, { useContext } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { MenuContext } from "../context/menucontext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, MenuItem, Colors } from "../App";

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const { menu } = useContext(MenuContext);
  const navigation = useNavigation<HomeNavProp>();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate("Menu Item", { item })}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.course}</Text>
      <Text>ZAR {item.price.toFixed(2)}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Christoffel's Menu</Text>
      <Text style={styles.subtitle}>Total Dishes: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No items yet — add some!
          </Text>
        }
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Add Dish")}
      >
        <Text style={styles.buttonText}>Add New Dish</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.background },
  title: { fontSize: 24, fontWeight: "bold", color: Colors.primary },
  subtitle: { fontSize: 16, marginBottom: 10, color: Colors.text },
  item: {
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  itemName: { fontSize: 18, fontWeight: "bold", color: Colors.primary },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
