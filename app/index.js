import { Button, FlatList, Text, View } from "react-native";

const posts = [
  {
    title: "Test",
    content: "Test test test",
    date: new Date(),
    user: "omar",
  },
  {
    title: "Test",
    content: "Test test test",
    date: new Date(),
    user: "omar",
  },
  {
    title: "Test",
    content: "Test test test",
    date: new Date(),
    user: "omar",
  },
  {
    title: "Test",
    content: "Test test test",
    date: new Date(),
    user: "omar",
  },
];

export default function Index() {
  return (
    <>
      <FlatList
        data={posts}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              height: 200,
              justifyContent: "space-evenly",
              backgroundColor: "#95a5a6",
              padding: 10,
              margin: 10,
              borderRadius: 10,
              borderWidth: 1,
              alignItems: "center",
            }}
          >
            <Avatar size="md">
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              />
              <AvatarBadge />
            </Avatar>
            <Text style={{ color: "#2c3e50" }}>{item.title}</Text>
            <Text style={{ color: "#2c3e50" }}>{item.content}</Text>
            <Text style={{ color: "#2c3e50" }}>{item.user}</Text>
            <Text style={{ color: "#2c3e50" }}>
              {item.date.toLocaleDateString()}
            </Text>
            <Button title="press me" onPress={() => {}} />
          </View>
        )}
      />
    </>
  );
}
