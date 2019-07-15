
import React, { Component } from 'react';
import {

  ScrollView,
  View,
  Text,

  Animated
} from 'react-native';


const Header_Max_Height = 140, Header_Min_Height = 60, Profile_Image_Max_height = 80, Profile_Image_Min_height = 40;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolly: new Animated.Value(0)
    }
  }

  render() {
    const headerHeight = this.state.scrolly.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp'
    });
    const profileHeight = this.state.scrolly.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: [Profile_Image_Max_height, Profile_Image_Min_height],
      extrapolate: 'clamp'
    });
    const profileViewMarginTop = this.state.scrolly.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: [Header_Max_Height - (Profile_Image_Max_height / 2), Profile_Image_Max_height + 8],
      extrapolate: 'clamp'
    });
    const HeaderZindex = this.state.scrolly.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const HeaderTitleBottom = this.state.scrolly.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height,
        Header_Max_Height - Header_Min_Height + 8 + Profile_Image_Min_height,
        Header_Max_Height - Header_Min_Height + 8 + Profile_Image_Min_height + 20],
      outputRange: [-20, -20, -20, 0],
      extrapolate: 'clamp'
    });
    return (
      // <Animated.View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Animated.View style={{
          alignItems: "center",
          position: "absolute",
          top: 0, left: 0, right: 0, height: headerHeight, backgroundColor: "lightskyblue",
          zIndex: HeaderZindex,

        }}>
          <Animated.View style={{ position: "absolute", bottom: HeaderTitleBottom }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              shant
            </Text>
          </Animated.View>

        </Animated.View>
        <ScrollView style={{ flex: 1 }} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrolly } } }])} scrollEventThrottle={16}>
          <Animated.View style={{
            height: profileHeight, width: profileHeight,
            borderRadius: (Profile_Image_Max_height / 2), borderWidth: 3,
            borderColor: "black", backgroundColor: "blue", marginTop: profileViewMarginTop, marginLeft: 10
          }}>

          </Animated.View>
          <View >
            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
              shant
            </Text>
          </View>
          <View style={{ height: 1000 }}>

          </View>
        </ScrollView>

      </View>
    );
  }
}



export default App;
