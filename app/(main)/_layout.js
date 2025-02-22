import { Stack, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Main() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "#CF3E3E" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name="book-open"
              size={24}
              color={focused ? "#CF3E3E" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addpost"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name="add"
              color={focused ? "#CF3E3E" : color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="profile"
              color={focused ? "#CF3E3E" : color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
