import React from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import useResponsive from "../utils/useResponsive";
import commonstyle from "../style/commonStyle";
import CustomButton from "../CustomButton";

export default function Game() {
  const [Mobile, Default, isDesktop] = useResponsive();
  function log() {
    console.log("ciao");
  }

  return (
    <View style={mobile.mainContainer}>
      <ImageBackground
        source={require("../assets/images/pokerTable.jpg")}
        resizeMode="cover"
        style={mobile.backgroundImg}
      >
        <View
          style={[mobile.gameContainer, isDesktop && desktop.gameContainer]}
        >
          <View style={mobile.gameRow}>
            <View
              style={{
                flexDirection: "row-reverse",
              }}
            >
              <Image
                source={require("../assets/images/cards/venomK.jpg")}
                style={
                  isDesktop
                    ? [desktop.card, desktop.frontCard]
                    : [mobile.card, mobile.frontCard]
                }
                resizeMode={"contain"}
              />
              <Image
                source={require("../assets/images/cards/electro4.jpg")}
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
            </View>

            <Text style={mobile.score}>6</Text>
          </View>
          <View
            style={[mobile.gameRowCenter, isDesktop && desktop.gameRowCenter]}
          >
            {/* <Text>Nome utente</Text> */}
            <View style={mobile.cardContainer}>
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Image
                  source={require("../assets/images/cards/goblinQ.jpg")}
                  style={
                    isDesktop
                      ? [desktop.card, desktop.leftCard]
                      : [mobile.card, mobile.leftCard]
                  }
                  resizeMode={"contain"}
                />
                <Image
                  source={require("../assets/images/cards/carnage7.jpg")}
                  style={[
                    isDesktop
                      ? [desktop.card, desktop.leftCard]
                      : [mobile.card, mobile.leftCard],
                    {
                      marginTop: -80,
                    },
                  ]}
                  resizeMode={"contain"}
                />
              </View>

              <Text style={mobile.score}>6</Text>
            </View>
            <Image
              source={require("../assets/images/cards/back.jpg")}
              style={isDesktop ? desktop.card : mobile.card}
              resizeMode={"contain"}
            />
            <View style={mobile.cardContainer}>
              <Text style={mobile.score}>6</Text>
              <View
                style={{
                  flexDirection: "column-reverse",
                }}
              >
                <Image
                  source={require("../assets/images/cards/rhino3.jpg")}
                  style={
                    isDesktop
                      ? [desktop.card, desktop.rigthCard]
                      : [mobile.card, mobile.rigthCard]
                  }
                  resizeMode={"contain"}
                />
                <Image
                  source={require("../assets/images/cards/thanosA.jpg")}
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
              </View>
            </View>
            {/* <Text>Nome utente</Text> */}
          </View>
          <View style={mobile.gameRow}>
            <Text style={mobile.text}>Effettua la tua giocata:</Text>
            <Text style={mobile.score}>6</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../assets/images/cards/mysterio5.jpg")}
                style={
                  isDesktop
                    ? [desktop.card, desktop.myCard]
                    : [mobile.card, mobile.myCard]
                }
                resizeMode={"contain"}
              />
              <Image
                source={require("../assets/images/cards/octopusJ.jpg")}
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
            </View>
          </View>
        </View>
        <View
          style={[mobile.buttonContainer, isDesktop && desktop.buttonContainer]}
        >
          <CustomButton label={"Carta"} callback={log} />
          <CustomButton label={"Stai"} callback={log} />
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
    flexDirection: "row",
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
