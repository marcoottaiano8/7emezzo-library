import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const commonstyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  backgroundImg: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  title: {
    marginTop: 80,
    paddingTop: 40,
    color: "#F10D26",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default commonstyle;
