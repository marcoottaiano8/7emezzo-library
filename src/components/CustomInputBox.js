import React, { useState } from "react";

import { TextInput, StyleSheet, Dimensions } from "react-native";
import useResponsive from "./utils/useResponsive";

function CustomInputBox(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  const [state, setState] = useState({
    value: "",
  });

  function changeInput(e) {
    setState({
      value: e,
    });
    if (!!props.callbackChange) props.callbackChange(e);
  }

  return (
    <TextInput
      style={[style.inputbox, isDesktop && desktop.inputbox]}
      placeholder={props.placeholder}
      onChangeText={changeInput}
      value={state.value}
      placeholderTextColor={"grey"}
    />
  );
}

const style = StyleSheet.create({
  inputbox: {
    backgroundColor: "#ffffff",
    width: 250,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 30,
    fontSize: 20,
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
});

const desktop = StyleSheet.create({
  inputbox: {
    width: 400,
  },
});

export default CustomInputBox;
