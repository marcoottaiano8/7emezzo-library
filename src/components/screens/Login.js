import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CustomInputBox from "../CustomInputBox";
import CustomButton from "../CustomButton";
import useResponsive from "../utils/useResponsive";

export default function Login() {
  const [Mobile, Default, isMobile] = useResponsive();

  function log(e) {
    console.log("test");
  }

  return (
    <View style={mobile.mainContainer}>
      <ImageBackground
        source={require("../assets/images/sfondo2.jpg")}
        resizeMode="cover"
        style={mobile.backgroundImg}
      >
        <Text style={mobile.title}>7 e mezzo</Text>
        <View
          style={
            isMobile ? mobile.container : [mobile.container, desktop.container]
          }
        >
          <CustomInputBox placeholder={"Email..."} callbackChange={log} />
          <CustomInputBox placeholder={"Password..."} callbackChange={log} />
          <CustomButton label={"Accedi"} />
          <TouchableOpacity style={mobile.subtitle} onPress={log}>
            <Text style={mobile.text}>Non hai un account? Registrati</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const mobile = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: Dimensions.get("window").height,
  },
  backgroundImg: {
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    marginBottom: Dimensions.get("window").height / 4,
    marginHorizontal: 30,
    justifyContent: "flex-end",
  },
  title: {
    marginTop: 80,
    paddingTop: 40,
    color: "#3c5070",
    fontSize: 50,
    textAlign: "center",
    textShadowOffset: { width: 3, height: 1 },
    textShadowColor: "#ffe4e5",
    textShadowRadius: 1,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const desktop = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
    width: Dimensions.get("window").width / 3,
  },
});
