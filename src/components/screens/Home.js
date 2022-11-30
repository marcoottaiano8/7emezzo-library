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
import { Modal } from "react-native-web";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import commonStyle from "../style/commonStyle";
import useResponsive from "../utils/useResponsive";

export default function Home() {
  const [Mobile, Default, isDesktop] = useResponsive();

  const [state, setState] = useState({
    modal: false,
  });

  function setModal() {
    setState({
      ...state,
      modal: !state.modal,
    });
  }
  function goToRanking() {
    console.log("classifica");
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
          <CustomButton label={"Partita veloce"} callback={setModal} />
          <CustomButton label={"Crea lobby"} callback={setModal} />
          <CustomButton label={"Classifica"} callback={goToRanking} />
        </View>
        <CustomModal
          visible={state.modal}
          callbackClose={setModal}
        ></CustomModal>
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
});

const desktop = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
});
