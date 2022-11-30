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
  const [Mobile, Default, isDesktop] = useResponsive();

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
        <View style={[mobile.container, isDesktop && desktop.container]}>
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
    justifyContent: "flex-end",
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
  },
});
