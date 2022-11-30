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
import { signinApi } from "../services/api/loginApi"

//components
import CustomInputBox from "../CustomInputBox";
import CustomButton from "../CustomButton";
import useResponsive from "../utils/useResponsive";
import commonStyle from "../style/commonStyle";
import CustomModal from "../CustomModal"

let email, password;

export default function Login(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  //state
  const [state, setState] = useState({
    disable: true,
    modalVisible: false,
    modalTitle: null,
    modalBody: null
  });

  //login
  async function checkLogin() {
    const obj = {
      email: email,
      password: password,
    }
    let res = await fetchData(signinApi, obj);
    let modalTitle = ""
    let modalBody = ""
    if (res.status === 401){
      modalTitle = "ERRORE"
      modalBody = "Email o password errati"
    }
    else if (res.status === 500){
      modalTitle="ERRORE"
      modalBody = "Errore interno del server"
    }
    else if (res.status === 200) {
      modalTitle=""
      modalBody= "Login avvenuto con successo"
      goToHome()
    }
    setState({
      ...state,
      modalVisible: !state.modalVisible,
      modalTitle: modalTitle,
      modalBody: modalBody
    })
  }

  //funzione per chiudere il modale
  function closeModal (){
    setState({
      ...state,
      modalVisible: !state.modalVisible
    })
  }

  //setto l'email
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

  //setto la password
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

  //navigo alla pagina signup
  function goToSignup() {
    if (!!props.goToSignup) {
      props.goToSignup();
    }
  }

  //navigo alla pagina home
  function goToHome(){
    if(!!props.goToHome)
      props.goToHome()
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

          <CustomModal
            visible={state.modalVisible}
            callbackClose={closeModal}
          >
            <Text style={commonStyle.modalTitle}>{state.modalTitle}</Text>
            <Text style={commonStyle.modalBody}>{state.modalBody}</Text>
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
  },
});

const desktop = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
