import React from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomModal(props) {
  function closeModal() {
    if (!!props.callbackClose) props.callbackClose();
  }
  return (
    <View style={mobile.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={closeModal}
      >
        <View style={mobile.centeredViewInner}>
          <View style={mobile.modalView}>
            <TouchableOpacity onPress={closeModal}>
              <View style={mobile.closeButton}>
                <Text style={mobile.closeButtonText}>x</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const mobile = StyleSheet.create({
  centeredView: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  centeredViewInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F10D26",
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: -30,
    right: -35,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    // backgroundColor: "black",
    height: 35,
    width: 35,
    backgroundColor: "#F10D26",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginTop: -5,
  },
});
