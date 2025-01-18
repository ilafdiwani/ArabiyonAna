import { Dimensions, Image, FlatList, Text, View } from "react-native";

const posts = [
  {
    username: "عنؤ",
    post: "hello world",
  },
  {
    username: "omar",
    post: "hello world hello world hello world hello world hello world hello world hello world hello world",
  },
  {
    username: "omar",
    post: "hello world",
  },
];

export default function Home(props) {
  const Post = ({ post, username }) => {
    return (
      <View
        style={{
          // height: 100,
          width: Dimensions.get("window").width * 0.9,
          borderWidth: 1,
          borderColor: "#bdc3c7aa",
          borderRadius: 20,
          padding: 10,
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
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item, index }) => {
          return <Post {...item} />;
        }}
      />
    </View>
  );
}
