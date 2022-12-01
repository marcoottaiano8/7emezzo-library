import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

//api
import { fetchData, getDataFromStorage } from "../utils/utils";
import {
  postLobby,
  putLobby,
  deleteLobby,
} from "7emezzo-gs/dist/services/api/lobbyApi";

//components
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import commonStyle from "../style/commonStyle";
import useResponsive from "../utils/useResponsive";

var ws = null;
var user = null;
var idLobby = null;

export default function Home(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  const [state, setState] = useState({
    fastGameModal: false,
    createLobbyModal: false,
    modalMessage: "",
  });

  // if (ws !== null) {
  //   ws.onmessage = (e) => {
  //     console.log(JSON.parse(e.data));
  //   };
  // }

  //component did mount
  useEffect(() => {
    prepare();
  }, []);

  async function prepare() {
    user = JSON.parse(await getDataFromStorage("user"));
    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );
    ws.onopen = () => {
      console.log("WS connesso");
    };
    ws.onmessage = (e) => {
      console.log("ONMESSAGE", JSON.parse(e.data));
      idLobby = JSON.parse(e.data).idLobby;
      console.log(idLobby);
    };
    ws.onclose = () => {
      console.log("DISCONNESSO");
      ws = new WebSocket(
        "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
      );
    };
  }

  //partita veloce
  async function setFastGameModal() {
    let message = "";
    let res = await fetchData(postLobby);
    if (res.status !== 200) message = "Errore del server";
    else {
      message = "In attesa di altri giocatori...";
      console.log(res);
      ws.send(JSON.stringify({ user_id: user.id, method: "connectLobby" }));
    }

    setState({
      ...state,
      fastGameModal: !state.fastGameModal,
      modalMessage: message,
    });
  }

  //crea lobby
  function setCreateLobbyModal() {
    setState({
      ...state,
      createLobbyModal: !state.createLobbyModal,
    });
  }

  //esci dalla lobby
  async function quitLobby() {
    let res = await fetchData(deleteLobby);
    console.log(res);
    ws.send(JSON.stringify({ method: "quitLobby", idLobby: idLobby }));

    setState({
      ...state,
      fastGameModal: !state.fastGameModal,
    });
  }

  //vai alla classifica
  function goToRanking() {
    if (!!props.goToRanking) props.goToRanking();
  }

  //inizia la partita
  function startMatch() {
    ws.send(JSON.stringify({ user_id: user.id, method: "startMatch" }));
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

        <CustomModal visible={state.fastGameModal} callbackClose={quitLobby}>
          <Text style={[mobile.text, mobile.title]}>Lobby</Text>
          <View style={mobile.modalContainer}>
            <Text style={mobile.text}>{state.modalMessage}</Text>
            <View
              style={{
                marginTop: 40,
                marginBottom: -30,
              }}
            >
              <CustomButton label="Inizia partita" callback={startMatch} />
            </View>
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
