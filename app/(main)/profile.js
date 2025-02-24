import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation
import AsyncStorage from "@react-native-async-storage/async-storage"; // For storing logout data
import { useRouter } from "expo-router";
import { POSTS } from "./home";
const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    avatar:
      "https://i.pinimg.com/originals/6f/dd/74/6fdd7491a9f5dddc332e5a955100097a.jpg",
    username: "fatima",
  });
  let posts = POSTS;
  posts = posts.filter((i) => i.username == user.username);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch user data and posts when the component is mounted
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError("");

      // Get user information from your API
      //   const userResponse = await axios.get(
      //     "https://your-api-endpoint.com/user"
      //   );
      //   setUser(userResponse.data);

      //   // Get user posts from your API
      //   const postsResponse = await axios.get(
      //     "https://your-api-endpoint.com/posts/user"
      //   );
      //   setPosts(postsResponse.data);
    } catch (err) {
      setError("Failed to load user data.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      console.log("logout");
      await AsyncStorage.removeItem("user");
      router.replace("(auth)");
      console.log("logout end");
    } catch (e) {
      console.log("errpr", e);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user?.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{user?.username}</Text>
      </View>

      <Text style={styles.postsTitle}>Posts</Text>

      {posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Text style={styles.postContent}>{item.post}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No posts yet</Text>
      )}

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  post: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postContent: {
    fontSize: 16,
    marginTop: 5,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 20,
    width: "50%",
    backgroundColor: "#CF3E3E",
    paddingVertical: 10,
    marginHorizontal: 80,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Profile;
