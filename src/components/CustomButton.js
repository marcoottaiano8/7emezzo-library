import React from "react";
import useResponsive from "./utils/useResponsive";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

function CustomButton(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  const handleClick = () => {
    if (!!props.callback) {
      props.callback();
    }
  };

  return (
    <TouchableOpacity
      disabled={props.disable}
      style={[
        mobile.button,
        props.disable && mobile.disable,
        isDesktop && desktopStyle.button,
      ]}
      onPress={handleClick}
    >
      <View>
        <Text style={[mobile.text, isDesktop && desktopStyle.text]}>
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  label: "Click",
  disable: false,
};

const mobile = StyleSheet.create({
  button: {
    backgroundColor: "#F10D26",
    border: "none",
    borderRadius: 30,
    paddingHorizontal: 45,
    paddingVertical: 10,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  disable: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

const desktopStyle = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  button: {
    width: 400,
    marginHorizontal: 0,
  },
});

export default CustomButton;
