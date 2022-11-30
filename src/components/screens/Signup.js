import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

//api
import { fetchData } from "../utils/utils";
import { postSignup } from "7emezzo-gs/dist/services/api/signupApi"

//components
import CustomInputBox from "../CustomInputBox";
import CustomButton from "../CustomButton";
import useResponsive from "../utils/useResponsive";
import commonstyle from "../style/commonStyle";
import CustomModal from "../CustomModal"

let username, email, password;

export default function Signup(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  //state
  const [state, setState] = useState({
    disable: true,
    modalVisible: false,
    modalTitle: null,
    modalBody: null
  });

  //registrazione
  async function checkSignUp() {
    const obj = {
      email: email,
      password: password,
      username: username
    }
    let res = await fetchData(postSignup, obj);
    let modalTitle = ""
    let modalBody = ""
    if (res.status === 406){
      modalTitle = "ERRORE"
      modalBody = "Email già presente nel DB"
    }
    else if(res.status === 400){
      modalTitle = "ERRORE"
      modalBody = "Errore nell'inserimento dell'email o della password"
    }
    else if (res.status === 500){
      modalTitle="ERRORE"
      modalBody = "Errore interno del server"
    }
    else if (res.status === 200) {
      modalTitle=""
      modalBody= "Registrazione avvenuta con successo"
      goToLogin()
    }
    setState({
      ...state,
      modalVisible: !state.modalVisible,
      modalTitle: modalTitle,
      modalBody: modalBody
    })
  }

  //funxione per chiudere il modale
  function closeModal (){
    setState({
      ...state,
      modalVisible: !state.modalVisible
    })
  }

  //setto lo username
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

  //etto l'email
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

  //setto la password
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

  //navigo alla pagina login
  function goToLogin() {
    if (!!props.goToLogin) {
      props.goToLogin();
    }
  }

  return (
    <View style={commonstyle.mainContainer}>
      <ImageBackground
        source={require("../assets/images/sfondo.jpg")}
        resizeMode="cover"
        style={commonstyle.backgroundImg}
      >
        <Text style={commonstyle.title}>7 e mezzo</Text>
        <View style={[mobile.container, isDesktop && desktop.container]}>
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

          <CustomModal
            visible={state.modalVisible}
            callbackClose={closeModal}
          >
            <Text style={commonstyle.modalTitle}>{state.modalTitle}</Text>
            <Text style={commonstyle.modalBody}>{state.modalBody}</Text>
          </CustomModal>
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
  }
});

const desktop = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
