import {
  Dimensions,
  FlatList,
  Text,
  Pressable,
  View,
  StyleSheet,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Speech from "expo-speech";

const words = [
  { en: "Hello", ar: "مرحبا" },
  { ar: "تفاحة", en: "Apple" },
  { ar: "موز", en: "Banana" },
  { ar: "برتقال", en: "Orange" },
  { ar: "أناناس", en: "Pineapple" },
  { ar: "عنب", en: "Grapes" },
  { ar: "بطيخ", en: "Watermelon" },
];
const Studying = () => {
  const speak = (text) => {
    Speech.speak(text, { language: "ar", pitch: 1, rate: 0.8 });
  };
  return (
    <View>
      <FlatList
        data={words}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              ...styles.itemContainer,
              backgroundColor: index % 2 == 0 ? "#F3F3F3" : "#FFF",
            }}
          >
            <View style={styles.arabicContainer}>
              <Text style={styles.arabicText}>{item.ar}</Text>
              <AntDesign
                name="sound"
                size={24}
                color="black"
                onPress={() => speak(item.ar)}
              />
            </View>

            {/* English Text */}
            <Text style={styles.englishText}>{item.en}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get("window").width - 20, // Full width minus padding
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between", // Space out Arabic and English
    alignItems: "center", // Center content vertically
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#E0E0E0", // Light border color
    paddingHorizontal: 10, // Padding inside the item
  },
  arabicContainer: {
    flex: 1,
    borderLeftWidth: 1,
    flexDirection: "row",
    justifyContent: "center", // Align Arabic text and button horizontally
    alignItems: "center", // Align Arabic text and button horizontally
  },
  arabicText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333", // Text color for Arabic
    marginRight: 10, // Space between Arabic text and speech button
  },
  speechButton: {
    fontSize: 24,
    color: "#4CAF50", // Color of the speech button (microphone icon)
  },
  englishText: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    color: "#333", // Text color for English
  },
});
export default Studying;
