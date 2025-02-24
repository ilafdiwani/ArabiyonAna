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
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logo.png")} // Adjust path as needed
          resizeMode="contain"
        />
      </View>

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
    margin: 35,
    padding: 20,
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
    padding: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoContainer: {
    flex: 0.2, // You can adjust the height of the container as needed
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40, // Adjust the space between the logo and other elements
  },
  logo: {
    width: 380, // Set the desired width of the logo (adjust as necessary)
    height: 350, // Set the desired height of the logo (adjust as necessary)
    // You can also use percentages to make the logo responsive:
    // width: '80%', // For responsive resizing based on screen size
    // height: '80%', // For responsive resizing based on screen size
    marginBottom: 150,
  },
});

export default StudStack;
