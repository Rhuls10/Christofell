import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { MenuContext, COURSES } from "../context/menucontext";
import { Colors, MenuItem, RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type AddDishNavProp = NativeStackNavigationProp<RootStackParamList, "Add Dish">;

export default function AddDishScreen() {
  const { addMenuItem, menu } = useContext(MenuContext);
  const navigation = useNavigation<AddDishNavProp>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState(COURSES[0]);
  const [priceText, setPriceText] = useState("");

  const handleSubmit = () => {
    const price = parseFloat(priceText);

    if (!name || !description || !course || isNaN(price)) {
      Alert.alert("Please fill all fields correctly");
      return;
    }

    const newDish: MenuItem = {
      id: menu.length + 1,
      name,
      description,
      course,
      price,
    };

    addMenuItem(newDish);

    // Clear inputs
    setName("");
    setDescription("");
    setPriceText("");
    setCourse(COURSES[0]);

    Alert.alert("Dish added!");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />

      <Text style={styles.label}>Course</Text>
      {COURSES.map((c) => (
        <Pressable
          key={c}
          style={[
            styles.courseButton,
            course === c && styles.courseButtonSelected,
          ]}
          onPress={() => setCourse(c)}
        >
          <Text
            style={[
              styles.courseButtonText,
              course === c && { color: "#fff", fontWeight: "bold" },
            ]}
          >
            {c}
          </Text>
        </Pressable>
      ))}

      <Text style={styles.label}>Price (ZAR)</Text>
      <TextInput
        style={styles.input}
        value={priceText}
        onChangeText={setPriceText}
        keyboardType="decimal-pad"
        placeholder="Enter price"
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Dish</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.background },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: Colors.card,
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  textArea: { height: 80 },
  courseButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    alignItems: "center",
  },
  courseButtonSelected: { backgroundColor: Colors.primary },
  courseButtonText: { color: Colors.primary },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
