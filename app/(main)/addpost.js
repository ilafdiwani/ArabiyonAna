import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import { addPost } from "./home";
const AddPost = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    addPost((posts) => {
      posts.unshift({
        username: "fatima",
        id: 3,
        post: content,
        likes: 0,
        avatar:
          "https://th.bing.com/th/id/OIP.6GKR6HOb5KRlZ6YGDvxc9gAAAA?rs=1&pid=ImgDetMain",
        image,
        comments: [],
      });

      return posts;
    });
    if (!image || !content) {
      setError("Image and content are required.");
      return;
    }
    try {
      setLoading(true);
      setError("");
    } catch (err) {
      setError("Failed to add post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={{ ...Dimensions.get("window") }}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Add a New Post</Text>
      <Pressable style={styles.imageButton} onPress={handleImagePicker}>
        {image ? (
          <Image
            source={{ uri: image }}
            width={150}
            height={150}
            resizeMode="cover"
            style={styles.imagePreview}
          />
        ) : (
          <Entypo name="image" size={100} color="black" style={styles.image} />
        )}
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Post Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Post</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 23,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  input: {
    height: 100,
    borderColor: "#CF3E3E",
    borderWidth: 3,
    borderRadius: 9,
    marginBottom: 80,
    paddingLeft: 10,
    paddingTop: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 25,
  },
  imagePreview: {
    minWidth: 100,
    minHeight: 100,
    borderWidth: 1,
    resizeMode: "cover",
    // marginBottom: 15,
    alignSelf: "center",
  },
  imageButton: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    padding: -9,
    justifyContent: "center",
    marginVertical: 32,
    marginBottom: "120",
    marginTop: 25,
  },
  image: {
    borderRadius: 8,
    width: 100, // Set the image width
    height: 100, // Set the image height
  },
  button: {
    backgroundColor: "#CF3E3E", // Red background for the button
    paddingVertical: 12, // Vertical padding for the button
    paddingHorizontal: 40, // Horizontal padding for the button
    borderRadius: 25, // Rounded corners for the button
    alignItems: "center", // Horizontally center the text
    justifyContent: "center", // Vertically center the text
    marginTop: 2, // Add some space from the above element (image/input)
    marginHorizontal: 50, // Add some left-right spacing for the button
    marginBottom: 45,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddPost;
