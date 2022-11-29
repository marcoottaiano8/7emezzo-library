import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const commonstyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: Dimensions.get("window").height,
  },
  backgroundImg: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
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
