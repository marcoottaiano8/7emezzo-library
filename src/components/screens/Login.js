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
import commonStyle from "../style/commonStyle";

let email, password;

export default function Login(props) {
  const [Mobile, Default, isDesktop] = useResponsive();
  const [state, setState] = useState({
    disable: true,
  });

  function log(e) {
    console.log("test");
  }

  function checkLogin() {
    console.log("login");
    props.goToGame();
  }

  function setEmail(e) {
    email = e;
    let disable = true;
    if (!!email && !!password) {
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
    if (!!email && !!password) {
      disable = false;
    }
    setState({
      ...state,
      disable: disable,
    });
  }

  function goToSignup() {
    if (!!props.goToSignup) {
      props.goToSignup();
    }
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
          <CustomInputBox placeholder={"Email..."} callbackChange={setEmail} />
          <CustomInputBox
            placeholder={"Password..."}
            callbackChange={setPassword}
          />
          <CustomButton
            label={"Accedi"}
            callback={checkLogin}
            disable={state.disable}
          />
          <TouchableOpacity style={mobile.subtitle} onPress={goToSignup}>
            <Text style={mobile.text}>Non hai un account? Registrati</Text>
          </TouchableOpacity>
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
  subtitle: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

const desktop = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
