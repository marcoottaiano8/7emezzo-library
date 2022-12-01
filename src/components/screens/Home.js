import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
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
import CustomInputBox from "../CustomInputBox";

var ws = null;
var user = null;
let idLobby = null;

export default function Home(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  const [state, setState] = useState({
    fastGameModal: false,
    createLobbyModal: false,
    joinLobbyModal: false,
    modalMessage: "",
    startGameVisible: false,
    idLobby: null,
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
    };
    ws.onclose = () => {
      console.log("DISCONNESSO");
    };
  }

  //partita veloce
  async function setFastGameModal() {
    let startGameVisible = false;
    let message = "";
    let idLobby = null;
    let res = await fetchData(putLobby, -1);
    console.log(res);
    if (res.status !== 200) message = "Errore del server";
    else {
      message = "In attesa di altri giocatori...";
      idLobby = res.data.idLobby;
      if (res.data.users[0].id === user.id) startGameVisible = true;
      ws.send(JSON.stringify({ user_id: user.id, method: "connectLobby" }));
    }

    setState({
      ...state,
      fastGameModal: true,
      startGameVisible: startGameVisible,
      modalMessage: message,
      idLobby: idLobby,
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
    if (!!state.idLobby) {
      let res = await fetchData(deleteLobby);
      console.log("quit", res);
      ws.send(JSON.stringify({ method: "quitLobby", idLobby: state.idLobby }));
    }
    setState({
      ...state,
      fastGameModal: false,
      createLobbyModal: false,
      joinLobbyModal: false,
      idLobby: null,
      modalMessage: "",
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

  function setJoinLobbyModal() {
    setState({
      ...state,
      joinLobbyModal: !state.joinLobbyModal,
    });
  }

  function setIdLobby(e) {
    idLobby = e.replace(/[^0-9]/g, "");
    setState({
      ...state,
      idLobby: idLobby,
    });
  }

  async function searchLobby() {
    let startGameVisible = false;
    let message = "";
    let idLobby = null;
    let res = await fetchData(putLobby, state.idLobby);
    console.log(res);
    if (res.status !== 200) message = "Lobby non trovata";
    else {
      message = "In attesa di altri giocatori...";
      idLobby = res.data.idLobby;
      if (res.data.users[0].id === user.id) startGameVisible = true;
      ws.send(JSON.stringify({ user_id: user.id, method: "connectLobby" }));
    }

    setState({
      ...state,
      startGameVisible: startGameVisible,
      modalMessage: message,
      idLobby: idLobby,
    });
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
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              label={"Unisciti a lobby"}
              callback={setJoinLobbyModal}
            />
          </View>
          <CustomButton label={"Classifica"} callback={goToRanking} />
        </View>

        <CustomModal visible={state.fastGameModal} callbackClose={quitLobby}>
          <Text style={[mobile.text, mobile.title]}>Lobby</Text>
          <View style={mobile.modalContainer}>
            <Text style={mobile.text}>{state.modalMessage}</Text>
            {state.startGameVisible && (
              <View
                style={{
                  marginTop: 40,
                  marginBottom: -30,
                }}
              >
                <CustomButton label="Inizia partita" callback={startMatch} />
              </View>
            )}
          </View>
        </CustomModal>
        <CustomModal visible={state.createLobbyModal} callbackClose={quitLobby}>
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
        <CustomModal visible={state.joinLobbyModal} callbackClose={quitLobby}>
          <Text style={[mobile.text, mobile.title]}>Lobby {state.idLobby}</Text>
          <View style={mobile.modalContainer}>
            {state.modalMessage === "" ? (
              <View>
                <CustomInputBox
                  placeholder="Inserire id della lobby"
                  callbackChange={setIdLobby}
                  type="number"
                />
                <CustomButton label="Cerca lobby" callback={searchLobby} />
              </View>
            ) : (
              <View>
                <Text style={mobile.text}>{state.modalMessage}</Text>
                {state.startGameVisible && (
                  <View
                    style={{
                      marginTop: 40,
                      marginBottom: -30,
                    }}
                  >
                    <CustomButton
                      label="Inizia partita"
                      callback={startMatch}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        </CustomModal>
      </ImageBackground>
    </View>
  );
}

const mobile = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Dimensions.get("window").height / 8,
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
