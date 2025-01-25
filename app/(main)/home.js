import {
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useState } from "react";

const posts = [
  {
    username: "عنؤ",
    post: "hello world",
  },
  {
    username: "omar",
    post: "hello world hello world hello world hello world hello world hello world hello world hello world",
    image: "https://picsum.photos/300/300",
  },
  {
    username: "omar",
    post: "hello world",
    likes: 9,
  },
];

export default function Home(props) {
  const Post = ({ post, username, image }) => {
    const [likes, setLikes] = useState(0);
    return (
      <View
        style={{
          // height: 100,
          width: Dimensions.get("window").width * 0.9,
          borderWidth: 1,
          borderColor: "#bdc3c7aa",
          borderRadius: 20,
          padding: 10,
          paddingBottom: 20,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Image
            style={{
              overflow: "hidden",
              borderRadius: 100,
              width: 30,
              borderWidth: 1,
              height: 30,
            }}
            resizeMode="cover"
            source={require("../../assets/images/logo.png")}
          />
          <Text
            style={{
              flex: 1,
              textAlign: "left",
              paddingStart: 10,
              borderBottomWidth: 1,
              fontWeight: "bold",
            }}
          >
            {username}
          </Text>
        </View>
        <Text
          style={{
            textAlign: "left",
            backgroundColor: "#bdc3c744",
            borderRadius: 10,
            padding: 5,
          }}
        >
          {post}
        </Text>
        {image && (
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={{
              width: Dimensions.get("window").width * 0.9 - 20,
              height: Dimensions.get("window").width * 0.9 - 20,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        )}
        <TouchableOpacity
          onPress={() => {
            setLikes(likes + 1); // Increment the likes count by 1
          }}
          style={{
            backgroundColor: "rgba(207, 201, 201, 0.8)",
            flexDirection: "row",
            padding: 6,
            borderRadius: 100,
            position: "absolute",
            bottom: -15,
            right: 10,
          }}
        >
          <Text>{likes}</Text>
          <EvilIcons name="like" size={24} color="#fb5524" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(207, 201, 201, 0.8)",
            padding: 6,
            borderRadius: 100,
            position: "absolute",
            bottom: -15,
            right: 10 + 50,
          }}
        >
          <EvilIcons name="comment" size={24} color="#fb5524" />
        </TouchableOpacity>
      </View>
    );
  };
  //avatar
  // 2 text inputs
  // button
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{}}>
        <Image
          style={{
            overflow: "hidden",
            width: 150,
            height: 90,
            left: 20,
          }}
          resizeMode="cover"
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <FlatList
        data={posts}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item, index }) => {
          return <Post {...item} />;
        }}
      />
    </View>
  );
}
