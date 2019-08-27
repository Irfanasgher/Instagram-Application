// import React, { Component } from "react";
// import { View, Text, Button } from "react-native";
// export default class PorfileScreen extends Component {
//   render() {
//     return (
//       <View >
//         <Text style={{ margin: 40 }}>Profile</Text>
//         <Button
//           title="Details"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.popToTop('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }













import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  EvilIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import Axios from "axios";

 class Feed extends React.Component {
  static navigationOptions = {
    title: 'Detail Component',
  };
  state = {
    data: []
  };
  componentDidMount = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({
        data: [...res.data]
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: "100%" }}>
          <View
            style={{
              height: 70,
              width: "100%",
              backgroundColor: "white",
              borderBottomColor: "grey",
              borderBottomWidth: 0.2,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 35
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: 5,
                alignItems: "center"
              }}
            >
              <TouchableOpacity style={{ marginBottom: 10 }}>
                <EvilIcons name="camera" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../assets/insta-logo.png")}
                  style={{
                    height: 32,
                    width: 109.714285714,
                    marginLeft: 10,
                    marginBottom: 2
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchableOpacity style={{ marginLeft: 5, marginBottom: 10 }}>
                <MaterialIcons name="live-tv" size={25} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 5, marginBottom: 10 }}>
                <Feather name="send" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Horizontal ScrollView */}
          {/*<ScrollView horizontal={true}>
             <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "white",
                borderBottomColor: "black",
                borderBottomWidth: 0.2,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View>
                <Image
                  source={require("../assets/person.png")}
                  style={{
                    width: 70,
                    height: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 100
                  }}
                />
              </View>
              <View>
                <Image
                  source={require("../assets/person.png")}
                  style={{
                    width: 70,
                    height: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 100
                  }}
                />
              </View>
              <View>
                <Image
                  source={require("../assets/person.png")}
                  style={{
                    width: 70,
                    height: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 100
                  }}
                />
              </View>
              <View>
                <Image
                  source={require("../assets/person.png")}
                  style={{
                    width: 70,
                    height: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 100
                  }}
                />
              </View>
              <View>
                <Image
                  source={require("../assets/person.png")}
                  style={{
                    width: 70,
                    height: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 100
                  }}
                />
              </View>
              <View>
                <Image
                  source={require("../assets/person.png")}
                  style={{
                    width: 70,
                    height: 70,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 100
                  }}
                />
              </View> 
            </View>
          </ScrollView>*/}
          {/* Horizontal ScrollView end */}
          
          <View>
            
            <View
              style={{
                height: "100%",
                width: "100%",
                maxHeight: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 4
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../assets/person.png")}
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 10,
                    borderRadius: 100
                  }}
                />
                <Text style={{ fontSize: 14, marginLeft: 5 }}>Irfan Asgher</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={32}
                  color="black"
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "purple",
                width: "100%",
                marginVertical: 3
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("../assets/im.jpg")}
                  style={{ height: 350, width: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 38,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.2,
                  padding: 4
                }}
              >
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <EvilIcons name="heart" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 1 }}>
                    <EvilIcons name="comment" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingHorizontal: 3 }}>
                    <Ionicons name="ios-send" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 1, marginTop: 1 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Feed;