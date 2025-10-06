import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Menu Item">;

export default function MenuItemScreen({ route }: Props) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>ZAR {item.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.background },
  name: { fontSize: 24, fontWeight: "bold", color: Colors.primary },
  course: { fontSize: 18, marginTop: 5, color: Colors.text },
  description: { fontSize: 16, marginTop: 10, color: Colors.text },
  price: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: Colors.primary },
});
