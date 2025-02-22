import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";

const StudStack = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("challenges");
          }}
        >
          <Text style={styles.buttonText}>Challenges</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("studying");
          }}
        >
          <Text style={styles.buttonText}>Words</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // You can change this background color if you want
  },
  buttonContainer: {
    flexDirection: "column", // Stack buttons vertically
    alignItems: "center",
  },
  button: {
    backgroundColor: "#CF3E3E",
    paddingVertical: 20,
    width: Dimensions.get("window").width * 0.7,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 100,
    margin: 30,
    borderRadius: 40,
    height: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StudStack;
