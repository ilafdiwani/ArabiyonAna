import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image, Text, View } from "react-native";

export default function Home(props) {
  const router = useRouter();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    checkSignInStatus();
  }, []);

  const checkSignInStatus = async () => {
    console.log("111");
    try {
      const storedUser = await AsyncStorage.getItem("user");
      console.log("  sign-ined", storedUser);
      if (storedUser) {
        console.log("  sign-ined", storedUser);
        setTimeout(() => {
          router.replace("(main)/home");
          setloading(false);
        }, 500);
      } else {
        setloading(false);
      }
    } catch (error) {
      setloading(false);
    }
  };
  if (loading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItem: "center",
          backgroundColor: "white",
          ...Dimensions.get("window"),
        }}
      >
        <ActivityIndicator size={"large"} color="black" />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgb(255,255,255)",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 0.7,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          style={{ overflow: "hidden", width: "100%", height: "100%" }}
          resizeMode="cover"
          source={require("../../assets/images/logo.png")}
        />
      </View>

      <View
        style={{
          margin: 20,
          borderRadius: 30,
          overflow: "hidden",
          flex: 2,
          justifyContent: "center",
          width: "80%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
            margin: 20,
            justifyContent: "center",
            borderRadius: 20,
            width: "90%",
            backgroundColor: "#bdc3c7",
            alignItems: "center",
          }}
        >
          <Link
            href="/signin"
            style={{
              color: "#34495e",
              fontFamily: "Arial",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            تسجيل الدخول
          </Link>
        </View>
        <View
          style={{
            width: "90%",
            borderRadius: 20,
            padding: 20,
            margin: 20,
            backgroundColor: "#bdc3c7",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href="/signup"
            style={{
              color: "#34495e",
              fontFamily: "Arial",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            أنشاء حساب
          </Link>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
}
