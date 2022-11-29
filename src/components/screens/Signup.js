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
import commonstyle from "../style/commonStyle";

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
    <View style={commonstyle.mainContainer}>
      <ImageBackground
        source={require("../assets/images/sfondo.jpg")}
        resizeMode="cover"
        style={commonstyle.backgroundImg}
      >
        <Text style={commonstyle.title}>7 e mezzo</Text>
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
  container: {
    flex: 1,
    marginBottom: Dimensions.get("window").height / 4,
    marginHorizontal: "auto",
    justifyContent: "flex-end",
    minWidth: Dimensions.get("window").width / 1.5,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
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
