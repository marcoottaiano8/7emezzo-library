import React, { useState } from "react";
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

let username, email, password;

export default function Signup(props) {
  const [Mobile, Default, isMobile] = useResponsive();
  const [state, setState] = useState({
    disable: true,
  });

  function log(e) {
    console.log("test");
  }

  function goToLogin() {
    if (!!props.goToLogin) {
      props.goToLogin();
    }
  }

  function checkSignUp() {
    console.log("registrato");
    goToLogin();
  }

  function setUsername(e) {
    username = e;
    let disable = true;
    if (!!username && !!email && !!password) {
      disable = false;
    }
    setState({
      ...state,
      disable: disable,
    });
  }

  function setEmail(e) {
    email = e;
    let disable = true;
    if (!!username && !!email && !!password) {
      disable = false;
    }
    setState({
      ...state,
      disable: disable,
    });
  }

  function setPassword(e) {
    password = e;
    let disable = true;
    if (!!username && !!email && !!password) {
      disable = false;
    }
    setState({
      ...state,
      disable: disable,
    });
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
          <CustomInputBox
            placeholder={"Username..."}
            callbackChange={setUsername}
          />
          <CustomInputBox placeholder={"Email..."} callbackChange={setEmail} />
          <CustomInputBox
            placeholder={"Password..."}
            callbackChange={setPassword}
          />
          <CustomButton
            label={"Registrati"}
            callback={checkSignUp}
            disable={state.disable}
          />
          <TouchableOpacity style={mobile.subtitle} onPress={goToLogin}>
            <Text style={mobile.text}>Hai giá un account? Accedi</Text>
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
    width: Dimensions.get("window").width / 1.5,
    textAlign: "center",
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
