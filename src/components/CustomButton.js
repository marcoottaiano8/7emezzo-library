import React from "react";

import {
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  View,
} from "react-native";

function CustomButton(props) {
  const handleClick = () => {
    if (!!props.callback) {
      props.callback();
    }
  };

  return (
    <TouchableOpacity
      disabled={props.disable}
      style={[mobile.button, props.disable && mobile.disable]}
      onPress={handleClick}
    >
      <View>
        <Text style={props.isDesktop ? [mobile.text, desktopStyle.text] : mobile.text}>{props.label}</Text>
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
    paddingHorizontal: 35,
    paddingVertical: 15,
  },
  disable: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textAlign: 'center'
  },
});

const desktopStyle = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default CustomButton;
