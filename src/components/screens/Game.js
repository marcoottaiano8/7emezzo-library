import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
} from "react-native";

import {
  fetchData,
  getDataFromStorage,
} from "../utils/utils";

import {
  deleteLobby,
} from "7emezzo-gs/dist/services/api/lobbyApi";

//components
import useResponsive from "../utils/useResponsive";
import commonstyle from "../style/commonStyle";
import CustomButton from "../CustomButton";

var ws;
var user;

const cards = [
  require("../assets/images/cards/thanosA.jpg"),
  require("../assets/images/cards/sandman2.jpg"),
  require("../assets/images/cards/rhino3.jpg"),
  require("../assets/images/cards/electro4.jpg"),
  require("../assets/images/cards/mysterio5.jpg"),
  require("../assets/images/cards/taskmaster6.jpg"),
  require("../assets/images/cards/carnage7.jpg"),
  require("../assets/images/cards/octopusJ.jpg"),
  require("../assets/images/cards/goblinQ.jpg"),
  require("../assets/images/cards/venomK.jpg"),
]

// let playerIndex = null

export default function Game(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  const [state, setState] = useState({
    match: null,
    endGame: false
  });

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    console.log("STATE", state);
  }, [state])

  useEffect(() => {
    if (state.endGame) {
      quitMatch()
    }
  }, [state.endGame]);

  //connessione
  async function connect() {
    user = JSON.parse(await getDataFromStorage("user"));

    ws = new WebSocket(
      "ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"
    );

    ws.onopen = () => {
      console.log("WS connesso");
      ws.send(JSON.stringify({ user_id: user.id, method: "connectLobby" }));
    };

    ws.onmessage = (e) => {
      let msg = JSON.parse(e.data)

      if (!!msg.hands) {
        console.log("ONMESSAGE", msg);
        // if (msg.ended) {
        //   //la partita è finita
        // }
        // else {
        //   storeGameData(msg)
        // }

        setState({
          ...state,
          match: msg,
          endGame: msg.ended
        })
      }

    };

    ws.onclose = () => {
      // console.log("DISCONNESSO");
      // console.log("Riconnessione in corso");
      connect();
    };

    setTimeout(() => {
      ws.send(JSON.stringify({ user_id: user.id, method: "requestCard" }));
    }, 1000)
  }

  //ritorna l'inidice del mio player nell'array degli users
  function getPlayerIndex() {
    let tempPlayerIndex = null
    state?.match?.users?.forEach((element, index) => {
      if (element.id === user.id)
        tempPlayerIndex = index
    })
    return tempPlayerIndex
  }

  //ritorna la mia mano
  function getMyHand() {
    let playerIndex = getPlayerIndex()
    let myHand = state?.match?.hands[playerIndex]
    return myHand
  }

  //ritorna tutte le hands senza la mia
  function getHands() {
    let tempHands = state?.match?.hands?.filter((el) => el.user.id !== user.id)
    return tempHands
  }

  //ritorna le mie carte
  function getMyCards() {
    return getMyHand()?.cards
  }

  function getMyTurn() {
    return getMyHand()?.turn
  }

  //ritorna tutti i players
  function getPlayers() {
    let tempPlayers = state.match.users
    return tempPlayers
  }

  function requestCard() {
    setTimeout(() => {
      ws.send(JSON.stringify({ user_id: user.id, method: "requestCard" }));
      ws.send(JSON.stringify({ user_id: user.id, method: "checkEndMatch" }));
    }, 1000)
  }

  function stopPlaying() {
    setTimeout(() => {
      ws.send(JSON.stringify({ user_id: user.id, method: "stopPlaying" }));
      ws.send(JSON.stringify({ user_id: user.id, method: "checkEndMatch" }));
    }, 1000)

  }

  async function quitMatch() {
    ws.send(JSON.stringify({ user_id: user.id, method: "quitMatch" }));
    console.log('PARTITA FINITA');
    // let res = await fetchData(deleteLobby)
    if (!!props.callbackQuit) props.callbackQuit()
  }

  function getValueFromCard(card) {
    let value = 0
    switch (card.figure) {
      case 'NUMBER':
        value = card.value
        break;
      case 'FANTE':
        value = 8
        break;
      case 'CAVALLO':
        value = 9
        break;
      case 'RE':
        value = 10
        break;
    }
    return value - 1
  }

  return (
    <View style={mobile.mainContainer}>
      <ImageBackground
        source={require("../assets/images/pokerTable.jpg")}
        resizeMode="cover"
        style={mobile.backgroundImg}
      >
        {!!state.match && <View
          style={[mobile.gameContainer, isDesktop && desktop.gameContainer]}
        >
          <View style={mobile.gameRow}>
            {!!getHands()[1] ?
              <View>
                <View
                  style={{
                    flexDirection: "row-reverse",
                  }}
                >
                  {getHands()[1].cards.map((el, key) => {
                    return (
                      <View key={key}>
                        {key === 0 ?
                          <Image
                            source={cards[getValueFromCard(el)]}
                            style={
                              isDesktop
                                ? [desktop.card, desktop.frontCard]
                                : [mobile.card, mobile.frontCard]
                            }
                            resizeMode={"contain"}
                          />
                          :
                          <Image
                            source={require("../assets/images/cards/back.jpg")}
                            style={[
                              isDesktop
                                ? [desktop.card, desktop.frontCard]
                                : [mobile.card, mobile.frontCard],
                              {
                                marginRight: -45,
                              },
                            ]}
                            resizeMode={"contain"}
                          />
                        }
                      </View>
                    )
                  })}


                </View>
                <Text style={mobile.score}>{getHands()[1]?.cards[0]?.value}</Text>
              </View> :
              <Image
                source={require("../assets/images/cards/back.jpg")}
                style={
                  isDesktop
                    ? [desktop.card, desktop.frontCard]
                    : [mobile.card, mobile.frontCard]
                }
                resizeMode={"contain"}
              />
            }
          </View>
          <View
            style={[mobile.gameRowCenter, isDesktop && desktop.gameRowCenter]}
          >
            {/* <Text>Nome utente</Text> */}
            {!!getHands()[2] ?
              <View style={mobile.cardContainer}>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  {getHands()[2].cards.map((el, key) => {
                    return (
                      <View key={key}>
                        {key === 0 ?
                          <Image
                            source={cards[getValueFromCard(el)]}
                            style={
                              isDesktop
                                ? [desktop.card, desktop.leftCard]
                                : [mobile.card, mobile.leftCard]
                            }
                            resizeMode={"contain"}
                          />
                          :
                          <Image
                            source={require("../assets/images/cards/back.jpg")}
                            style={[
                              isDesktop
                                ? [desktop.card, desktop.leftCard]
                                : [mobile.card, mobile.leftCard],
                              {
                                marginTop: -80,
                              },
                            ]}
                            resizeMode={"contain"}
                          />}
                      </View>
                    )
                  })}

                </View>
                <Text style={mobile.score}>{getHands()[2]?.cards[0]?.value}</Text>
              </View>
              :
              <Image
                source={require("../assets/images/cards/back.jpg")}
                style={
                  isDesktop
                    ? [desktop.card, desktop.leftCard]
                    : [mobile.card, mobile.leftCard]
                }
                resizeMode={"contain"}
              />
            }
            <Image
              source={require("../assets/images/cards/back.jpg")}
              style={isDesktop ? desktop.card : mobile.card}
              resizeMode={"contain"}
            />
            {!!getHands()[0] ?
              <View style={mobile.cardContainer}>
                <Text style={mobile.score}>{getHands()[0]?.cards[0]?.value}</Text>
                <View
                  style={{
                    flexDirection: "column-reverse",
                  }}
                >
                  {getHands()[0].cards.map((el, key) => {
                    return (
                      <View key={key}>
                        {key === 0 ? <Image
                          source={cards[getValueFromCard(el)]}
                          style={
                            isDesktop
                              ? [desktop.card, desktop.rigthCard]
                              : [mobile.card, mobile.rigthCard]
                          }
                          resizeMode={"contain"}
                        />
                          :
                          <Image
                            source={require("../assets/images/cards/back.jpg")}
                            style={[
                              isDesktop
                                ? [desktop.card, desktop.rigthCard]
                                : [mobile.card, mobile.rigthCard],
                              {
                                marginBottom: -80,
                              },
                            ]}
                            resizeMode={"contain"}
                          />
                        }
                      </View>
                    )
                  })}


                </View>
              </View> :
              <Image
                source={require("../assets/images/cards/back.jpg")}
                style={
                  isDesktop
                    ? [desktop.card, desktop.rigthCard]
                    : [mobile.card, mobile.rigthCard]
                }
                resizeMode={"contain"}
              />}
            {/* <Text>Nome utente</Text> */}
          </View>
          <View style={mobile.gameRow}>
            <Text style={mobile.text}>Effettua la tua giocata:</Text>
            <Text style={mobile.score}>{getMyHand().cardValue}</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {getMyCards().map((el, key) => {
                return (
                  <View key={key}>
                    {key === 0 ?
                      <Image
                        source={cards[getValueFromCard(el)]}
                        style={
                          isDesktop
                            ? [desktop.card, desktop.myCard]
                            : [mobile.card, mobile.myCard]
                        }
                        resizeMode={"contain"}
                      /> : <Image
                        source={cards[getValueFromCard(el)]}
                        style={[
                          isDesktop
                            ? [desktop.card, desktop.myCard]
                            : [mobile.card, mobile.myCard],
                          {
                            marginLeft: -45,
                          },
                        ]}
                        resizeMode={"contain"}
                      />
                    }
                  </View>
                )
              })}


            </View>
          </View>
        </View>}
        <View
          style={[mobile.buttonContainer, isDesktop && desktop.buttonContainer]}
        >
          <View style={{ flexDirection: 'row' }}>
            <CustomButton label={"Carta"} disable={!getMyTurn()} callback={requestCard} />
            <CustomButton label={"Stai"} disable={!getMyTurn()} callback={stopPlaying} />
          </View>
          <CustomButton label={"Esci"} callback={quitMatch} />
        </View>
      </ImageBackground>
    </View>
  );
}
const mobile = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  backgroundImg: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  gameRow: {
    alignItems: "center",
    justifyContent: "center",
  },
  gameRowCenter: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: -50,
  },
  card: {
    height: 131,
    width: 94,
  },
  frontCard: {
    marginTop: -50,
    marginBottom: 20,
  },
  leftCard: {
    transform: [{ rotate: "-90deg" }],
    marginLeft: -30,
    marginRight: 30,
  },
  rigthCard: {
    transform: [{ rotate: "90deg" }],
    marginRight: -30,
    marginLeft: 30,
  },
  myCard: {
    marginTop: 10,
  },
  score: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    // paddingBottom: 1,
  },
  gameContainer: {
    overflow: "hidden",
    flex: 5,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
});

const desktop = StyleSheet.create({
  card: {
    height: 175,
    width: 125,
  },
  frontCard: {
    marginTop: 30,
    marginBottom: 20,
  },
  gameContainer: {
    paddingBottom: 10,
  },
  leftCard: {
    transform: [{ rotate: "-90deg" }],
    marginRight: 70,
  },
  rigthCard: {
    transform: [{ rotate: "90deg" }],
    marginLeft: 70,
  },
  myCard: {
    marginTop: 20,
  },
  gameRowCenter: {
    justifyContent: "space-around",
    marginBottom: -20,
  },
  buttonContainer: {
    justifyContent: "space-around",
  },
});
