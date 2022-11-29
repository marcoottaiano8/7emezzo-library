import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from "react-native";
import CustomButton from "../CustomButton";
import commonStyle from "../style/commonStyle";
import useResponsive from "../utils/useResponsive";

export default function Home() {
  const [Mobile, Default, isMobile] = useResponsive();

  function log(e) {
    console.log("test");
  }

  return (
    <View style={commonStyle.mainContainer}>
      <ImageBackground
        source={require("../assets/images/sfondo.jpg")}
        resizeMode="cover"
        style={commonStyle.backgroundImg}
      >
        <Text style={commonStyle.title}>7 e mezzo</Text>
        <View
          style={
            isMobile ? mobile.container : [mobile.container, desktop.container]
          }
        >
          <Image
            source={require("../assets/images/ironman.gif")}
            style={mobile.image}
          />
          <CustomButton label={"Gioca"} callback={log} />
          <CustomButton label={"Classifica"} callback={log} />
        </View>
      </ImageBackground>
    </View>
  );
}

const mobile = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Dimensions.get("window").height / 4,
    marginHorizontal: "auto",
    justifyContent: "flex-end",
    minWidth: Dimensions.get("window").width / 1.5,
    gap: 30,
  },
  image: {
    height: 200,
    width: 200,
    marginHorizontal: "auto",
  },
});

const desktop = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
    width: Dimensions.get("window").width / 3,
    minWidth: 0,
  },
});
