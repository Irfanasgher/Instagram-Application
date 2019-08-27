import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import {
  Ionicons,
  EvilIcons,
  Feather,
  MaterialIcons
} from "@expo/vector-icons";
import { hide } from "expo/build/launch/SplashScreen";
import Axios from "axios";

 class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    data: []
  };
  componentDidMount() {
    Axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyB5woohTgRFgceCvQsi7kQkGIuf043tfRY&maxResults=20"
    )
      .then(resp => {
        this.setState({
          data: resp.data.items
        });
      })
      .catch(e => {
        console.log("error", e);
      });
  }
  render() {
    console.log(this.state.data);

    let res = this.state.data.map((res, index) => {
      // console.log(res);

      return (
        <View key={index} style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              height: 100,
              width: "100%"
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "red",
                margin: 10,
                overflow: "hidden",
                borderRadius: 100
              }}
            >
              <Image
                source={{ uri: res.snippet.thumbnails.high.url }}
                style={{ height: 50, width: 50 }}
              />
            </View>
            
            <Text style={{ width: "50%", margin: 10 }}  
            
            onPress={() => {
              console.log(this.props, "pressed")
              this.props.navigation.navigate('Details')
            }}>
        
              {res.snippet.title}
              
            </Text>
          </View>
          <View
            style={{
              height: 300,
              width: "100%",
              backgroundColor: "orange",
              overflow: "hidden"
            }}
          >
            <Image
              source={{ uri: res.snippet.thumbnails.high.url }}
              style={{ height: 300, width: "100%" }}
            />
          </View>
          <View
            style={{
              height: 50,
              width: "100%",
              flexDirection: "row",
              padding: 10
            }}
          >
            <TouchableOpacity style={{ width: "13%" }}>
              <EvilIcons name="heart" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "13%" }}>
              <EvilIcons name="comment" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "13%" }}>
              <Ionicons name="ios-send" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      );
    });

    return (
      <View>
        <View
          style={{
            height: 60,
            backgroundColor: "white",
            width: "100%",
            marginTop: 24,
            borderBottomColor: "#DDDDDD",
            borderBottomWidth: 0.5,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity style={{ width: "15%" }} onPress={()=>{this.props.navigation.navigate('Camera')}}>
            <EvilIcons
              name="camera"
              size={35}
              color="black"
              style={{ marginLeft: 5, marginTop: 20 }}
            />
          </TouchableOpacity>

          <Image
            source={require("../assets/insta-logo.png")}
            style={{ width: "28%", height: 30, marginLeft: -3, marginTop: 25 }}
          />
          <TouchableOpacity>
            <MaterialIcons
              name="live-tv"
              size={30}
              color="black"
              style={{ marginLeft: 130, marginTop: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="send"
              size={30}
              color="black"
              style={{ marginLeft: 10, marginTop: 20 }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              height: 100,
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              borderBottomColor: "#0F0D0A",
              borderBottomWidth: 1
            }}
          >
            {this.state.data.map((pic, key) => (
              <View key={key} style={styles.circle}>
                <Image
                  source={{ uri: pic.snippet.thumbnails.high.url }}
                  style={styles.pic}
                />
              </View>
            ))}
          </View>
        </ScrollView>
       
        <ScrollView>
          <View style={{ height: 50, backgroundColor: "white" }} />
          <View style={{ height: "2%", width: "100%", maxHeight: 0 }} />
          {res}
        </ScrollView>
        <View style={{ height: 50, zIndex:111 }}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    height: 65,
    width: 65,
    borderRadius: 100,
    borderColor: "#FFA608",
    borderWidth: 1,
    margin: 10,
    overflow: "hidden"
  },
  pic: {
    height: 65,
    width: 65
  }
});

export default HomeScreen;