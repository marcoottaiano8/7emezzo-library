import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import commonStyle from "../style/commonStyle";
import useResponsive from "../utils/useResponsive";

export default function Home(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  const [state, setState] = useState({
    fastGameModal: false,
    createLobbyModal: false,
  });

  function setFastGameModal() {
    setState({
      ...state,
      fastGameModal: !state.fastGameModal,
    });
  }

  function setCreateLobbyModal() {
    setState({
      ...state,
      createLobbyModal: !state.createLobbyModal,
    });
  }
  function goToRanking() {
    if (!!props.goToRanking) props.goToRanking();
  }

  return (
    <View style={commonStyle.mainContainer}>
      <ImageBackground
        source={require("../assets/images/sfondo.jpg")}
        resizeMode="cover"
        style={commonStyle.backgroundImg}
      >
        <Text style={commonStyle.title}>7 e ½</Text>
        <View style={[mobile.container, isDesktop && desktop.container]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/images/ironman.gif")}
              style={mobile.image}
            />
          </View>
          <CustomButton label={"Partita veloce"} callback={setFastGameModal} />
          <CustomButton label={"Crea lobby"} callback={setCreateLobbyModal} />
          <CustomButton label={"Classifica"} callback={goToRanking} />
        </View>
        <CustomModal
          visible={state.fastGameModal}
          callbackClose={setFastGameModal}
        >
          <Text style={[mobile.text, mobile.title]}>Lobby</Text>
          <View style={mobile.modalContainer}>
            <Text style={mobile.text}>In attesa di altri giocatori...</Text>
          </View>
        </CustomModal>
        <CustomModal
          visible={state.createLobbyModal}
          callbackClose={setCreateLobbyModal}
        >
          <Text style={[mobile.text, mobile.title]}>Lobby</Text>
          <View style={mobile.modalContainer}>
            <Text style={mobile.text}>In attesa di altri giocatori...</Text>
            <View
              style={{
                marginTop: 40,
                marginBottom: -30,
              }}
            >
              <CustomButton label="Inizia partita" />
            </View>
          </View>
        </CustomModal>
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
  },
  modalContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

const desktop = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
