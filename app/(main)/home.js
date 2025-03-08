import {
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
export let POSTS = [
  {
    username: "batoul",
    id: 7,
    post: "  تضيق و تضيق ثم تفرج ... تلك الحياة",
    likes: 79,
    avatar:
      "https://th.bing.com/th/id/OIP.5d6d_-wimEq_cyhahEKKNwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    image:
      "https://i.pinimg.com/736x/6a/5a/fb/6a5afb0ec8a2d7a4cfb9b926b37bb560.jpg",
    comments: [
      {
        username: "محمد",
        content: "  🫶🏼 ان الله على كل شيء قدير",
        date: Date.now(),
      },
      {
        username: "احمد",
        content: " 🙏🏼عندما يشاء الله ,يحول الظلمة الى نور ",
        date: Date.now(),
      },
      { username: "jad", content: "ان بعد العسر يسرا", date: Date.now() },
      { username: "lara", content: "🤍🤍", date: Date.now() },
    ],
  },
  {
    username: "mareine ",
    avatar:
      "https://th.bing.com/th/id/OIP.gwlydGCrlPtM1yeMHi66_wHaKd?w=155&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    id: 10,
    post: "❤️انت تستحق السعادة  ",
    image:
      "https://th.bing.com/th/id/OIP.gwlydGCrlPtM1yeMHi66_wHaKd?w=155&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    likes: 120,
    comments: [
      { username: "sara", content: " ❤️❤️", date: Date.now() },
      { username: "نارين ", content: " ✨​✨​ ", date: Date.now() },
    ],
  },
  {
    username: "lama",
    id: 5,
    post: " في رحلة العمر و الأيام مسرعة لا تنسى من انت و ما وجهة السفر",
    likes: 123,
    avatar:
      "https://i.pinimg.com/originals/00/c7/fa/00c7fad4e876f9ce8b30ea5b220fb21e.jpg",

    comments: [
      { username: "tia", content: "رائع", date: Date.now() },
      { username: "hala", content: "بيت جميل ,احببته ", date: Date.now() },
      { username: "حسام", content: "🤩🤩", date: Date.now() },
      { username: "سليم", content: "احسنت 🤩", date: Date.now() },
      { username: "rola", content: "😍", date: Date.now() },
      { username: "hassan", content: "استمري😍😍", date: Date.now() },
    ],
  },
  {
    username: "fatima",
    id: 2,
    avatar:
      "https://i.pinimg.com/originals/6f/dd/74/6fdd7491a9f5dddc332e5a955100097a.jpg",
    post: "  قهوة المساء ليست مجرد مشروب , بل هي لقاء مع النفس",
    likes: 20,
    image:
      "https://i.pinimg.com/originals/ca/65/6f/ca656f3acf77be50e0333136b1c13acc.jpg",
    comments: [
      {
        username: "chaymae",
        content: "انا استيقظ لأشرب القهوة ولا أشرب القهوة لأستيقظ",
        date: Date.now(),
      },
      { username: "youssef", content: " قهوة تنعش الروح", date: Date.now() },
    ],
  },
  {
    username: "مصطفى",
    id: 6,
    post: "   🫀 كل شيء سيأتيك في الوقت المناسب , كن صبورا ",
    likes: 133,
    avatar:
      "https://i.pinimg.com/736x/06/1f/e9/061fe9ef081914de663e78c0426a504d.jpg",
    comments: [
      {
        username: "اسماء",
        content: " 🙏 الله يؤخر الجميل ليجعله اجمل",
        date: Date.now(),
      },
      {
        username: "batoul",
        content: "💫💫الصبر علاج لكل شيء",
        date: Date.now(),
      },
      { username: "abed", content: "👍رائع", date: Date.now() },
      { username: "adam", content: "❤️❤️", date: Date.now() },
    ],
  },
  {
    username: "ella ",
    avatar: "",
    id: 9,
    post: " ليتنا كالمطر نسافر مع الغيوم أينما نريد و نسقط على نوافذ من نحب ",
    image:
      "https://saudia9.com/wp-content/uploads/2021/02/%D8%B5%D9%88%D8%B1-%D9%85%D8%B7%D8%B1-1.jpg",
    likes: 237,
    comments: [
      { username: "تمار", content: "ما شاء الله", date: Date.now() },
      { username: "ليلى ", content: " ✨​✨​ ", date: Date.now() },
    ],
  },

  {
    username: "fatima",
    id: 11,
    post: "  يا ايها الانسان ما هذا القلق ؟  أوليس ربك قد تكفل ما خلق؟  أوليس بعد العسر يسرا كما بعد الليالي يأتي الفلق ؟  ",
    likes: 109,
    avatar:
      "https://i.pinimg.com/originals/6f/dd/74/6fdd7491a9f5dddc332e5a955100097a.jpg",

    comments: [
      {
        username: "tala",
        content: " 🥹🥹 الراحة في هذا البيت",
        date: Date.now(),
      },
      {
        username: "souaad",
        content: "الله على كل شيء قدير🥹",
        date: Date.now(),
      },
      { username: "jawad", content: "🤲🤲", date: Date.now() },
      { username: "abir", content: " رائع🫀 ", date: Date.now() },
      {
        username: "sally",
        content: "  🙏اللهم الفرج بعد كل ضيق ",
        date: Date.now(),
      },
      {
        username: "youssef",
        content: " من اجمل ما قرأت اليوم ",
        date: Date.now(),
      },
    ],
  },
  {
    username: "mohammad",
    id: 3,
    post: "  اجمل حب هو الذي نعثر عليه أثناء بحثنا عن شيء آخر",
    likes: 9,
    avatar: "https://cdn-icons-png.flaticon.com/512/6858/6858485.png",

    comments: [
      { username: "tala", content: "رائع", date: Date.now() },
      { username: "samir", content: "لهذا الحب معنى حقيقي", date: Date.now() },
    ],
  },

  {
    username: "ilaf",
    id: 1,
    post: " وما كنت أهوى الدار الا بأهلها على الدار بعد الراحلين سلام ",
    likes: 50,
    comments: [
      {
        username: "aya",
        content: "وما أوحش الدار من دون أهلها ",
        date: Date.now(),
      },
      { username: "youssef", content: " الفراق صعب", date: Date.now() },
    ],
  },
  {
    username: "ahmad",
    avatar: "",
    id: 4,
    post: " عيناها بنية أيضا... ك الأرض ,ولكنها لاتنبت الزهور ,بل حب",
    image:
      "https://th.bing.com/th/id/OIP.6GKR6HOb5KRlZ6YGDvxc9gAAAA?rs=1&pid=ImgDetMain",
    likes: 200,
    comments: [
      { username: "sara", content: "ما شاء الله", date: Date.now() },
      { username: "oussama", content: " عيونها ك القهوة", date: Date.now() },
      { username: "jad", content: "ومن كعيونها", date: Date.now() },
    ],
  },
];
export let addPost = null;
export default function Home(props) {
  const myUsername = "fatima";
  const [posts, setPosts] = useState(POSTS);
  useEffect(() => {
    addPost = setPosts;
    POSTS = posts;
  }, []);
  const router = useRouter();
  const AddComment = (id, content) => {
    const postIndex = posts.findIndex((i) => i.id == id);
    if (postIndex > -1) {
      console.log("add 1");
      if (posts[postIndex].comments == null) {
        console.log("add 2");
        posts[postIndex].comments = [
          {
            username: myUsername,
            content,
            date: Date.now(),
          },
        ];
      } else {
        console.log("add 3");
        posts[postIndex].comments.push({
          username: myUsername,
          content,
          date: Date.now(),
        });
      }
    }
  };

  const Post = ({
    post,
    username,
    image,
    comments,
    id,
    likes: postLikes,
    avatar,
  }) => {
    const [likes, setLikes] = useState(postLikes || 0);
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState(null);
    const [showComments, setShowComments] = useState(null);
    const toggleComments = () => {
      setShowComments((show) => !show);
    };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            // height: 100,
            width: Dimensions.get("window").width * 0.9,
            borderWidth: 1,
            borderColor: "#bdc3c7aa",
            borderRadius: 20,
            padding: 10,
            paddingBottom: showComments ? 0 : 20,
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 9 }}>
            <Image
              style={{
                overflow: "hidden",
                borderRadius: 100,
                width: 30,
                borderWidth: 1,
                height: 30,
              }}
              resizeMode="cover"
              source={{
                uri: avatar
                  ? avatar.trim()
                  : "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
              }}
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
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              gap: 10,
              bottom: -15,
              right: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (liked) {
                  setLikes(likes - 1); // Increment the likes count by 1
                  setLiked(false); // Increment the likes count by 1
                } else {
                  setLikes(likes + 1); // Increment the likes count by 1
                  setLiked(true); // Increment the likes count by 1
                }
              }}
              style={{
                backgroundColor: "rgba(207, 201, 201, 0.8)",
                flexDirection: "row",
                padding: 6,
                borderRadius: 100,
              }}
            >
              <Text>{likes}</Text>
              <EvilIcons
                name="like"
                size={24}
                color={liked ? "rgba(249, 176, 5, 0.8)" : "#CF3E3E"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleComments}
              style={{
                backgroundColor: "rgba(207, 201, 201, 0.8)",
                padding: 6,
                borderRadius: 100,
              }}
            >
              <EvilIcons name="comment" size={24} color="#CF3E3E" />
            </TouchableOpacity>
          </View>
          {showComments ? (
            <View>
              <View
                style={{
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  onChangeText={setComment}
                  value={comment}
                  placeholder="Add a comment..."
                  placeholderTextColor={"grey"}
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    backgroundColor: "#f0f0f0",
                    marginRight: 10,
                  }}
                />
                <Ionicons
                  name="send"
                  size={25}
                  style={{
                    padding: 10,
                    transform: [{ scaleX: -1 }],
                    borderRadius: 50,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  color="white"
                  onPress={() => {
                    AddComment(id, comment);
                    setTimeout(() => {
                      setComment("");
                    }, 500);
                  }}
                />
              </View>

              <View style={{ padding: 10 }}>
                {comments && comments.length >= 1
                  ? comments.map((comment, index) => (
                      <View
                        key={index}
                        style={{
                          marginBottom: 15,
                          padding: 10,
                          borderRadius: 10,
                          backgroundColor: "#f9f9f9",
                          borderWidth: 1,
                          borderColor: "#grey",
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>
                          {comment.username}
                        </Text>
                        <Text style={{ marginTop: 5 }}>{comment.content}</Text>
                      </View>
                    ))
                  : null}
              </View>
            </View>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    );
  };
  //avatar
  // 2 text inputs
  // button
  const logout = async () => {
    try {
      console.log("logout");
      await AsyncStorage.removeItem("user");
      router.replace("(auth)");
      console.log("logout end");
    } catch (e) {
      console.log("errpr", e);
    }
  };
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{}}>
        <Image
          style={{
            overflow: "hidden",
            width: 160,
            height: 92,
            left: -30,
          }}
          resizeMode="cover"
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ gap: 20, paddingBottom: 50 }}
        renderItem={({ item, index }) => {
          return <Post {...item} />;
        }}
      />
    </View>
  );
}
