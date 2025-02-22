import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
export default function SignUp(props) {
  //avatar
  // 4 text inputs
  // button
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");

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

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          flex: 2,
          borderWidth: 2,
          borderColor: "#CF3E3E",
          borderRadius: 20,
          width: "80%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={{
            backgroundColor: "#bdc3c7",
            padding: 10,
            width: "80%",
            textAlign: "right",
            borderRadius: 20,
          }}
          placeholderTextColor={"white"}
          placeholder="اسم المستخدم"
        />
        <TextInput
          value={Email}
          onChangeText={setEmail}
          style={{
            backgroundColor: "#bdc3c7",
            textAlign: "right",
            padding: 10,
            width: "80%",
            borderRadius: 20,
          }}
          placeholderTextColor={"white"}
          placeholder="البريد"
        />
        <TextInput
          value={password}
          style={{
            backgroundColor: "#bdc3c7",
            padding: 10,
            textAlign: "right",
            width: "80%",
            borderRadius: 20,
          }}
          onChangeText={setpassword}
          secureTextEntry={true}
          placeholderTextColor={"white"}
          placeholder="كلمة السر"
        />
        <TextInput
          value={confirm}
          onChangeText={setconfirm}
          style={{
            backgroundColor: "#bdc3c7",
            textAlign: "right",
            padding: 10,
            width: "80%",
            borderRadius: 20,
          }}
          secureTextEntry
          placeholder="كلمة السر"
          placeholderTextColor={"white"}
        />
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Pressable
          onPress={() => {}}
          style={{
            backgroundColor: "#CF3E3E",
            padding: 10,
            width: "60%",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            تسجيل
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
