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
        avatar: "https://cdn-icons-png.flaticon.com/512/6858/6858485.png",
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
            width={100}
            height={100}
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

      <Button
        title={loading ? "Adding..." : "Add Post"}
        onPress={handleSubmit}
        disabled={loading}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    height: 100,
    borderColor: "#CF3E3E",
    borderWidth: 3,
    borderRadius: 9,
    marginBottom: 15,
    paddingLeft: 10,
    paddingTop: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
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
    padding: 18,
    justifyContent: "center",
  },
  image: {
    borderRadius: 8,
    width: 100, // Set the image width
    height: 100, // Set the image height
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddPost;
