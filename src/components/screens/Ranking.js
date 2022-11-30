import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-web";
import commonStyle from "../style/commonStyle";
import useResponsive from "../utils/useResponsive";

const users = [
  {
    id: 1,
    username: "JustOtto",
    score: 70,
  },
  {
    id: 2,
    username: "Lotto",
    score: 65,
  },
  {
    id: 3,
    username: "Daniele",
    score: 50,
  },
  {
    id: 4,
    username: "Mattia",
    score: 7,
  },
];

export default function Ranking() {
  const [Mobile, Default, isDesktop] = useResponsive();

  const renderItem = ({ item }) => (
    <View
      style={{
        marginVertical: 5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={mobile.text}>{item.id}</Text>
        <Text
          style={[
            mobile.text,
            {
              fontWeight: "bold",
              fontSize: 20,
            },
          ]}
        >
          {item.username}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={mobile.text}>{item.score} </Text>
        <Text style={mobile.text}>pts</Text>
      </View>
    </View>
  );

  return (
    <View style={commonStyle.mainContainer}>
      <ImageBackground
        source={require("../assets/images/sfondo.jpg")}
        resizeMode="cover"
        style={commonStyle.backgroundImg}
      >
        <View style={mobile.table}>
          <ImageBackground
            source={require("../assets/images/pokerTable.jpg")}
            resizeMode="cover"
            style={{
              width: 301,
              height: 651,
              borderRadius: 20,
            }}
          >
            <Text style={mobile.title}>Classifica</Text>
            <View
              style={{
                marginHorizontal: 30,
                marginTop: 50,
              }}
            >
              <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              ></FlatList>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

const mobile = StyleSheet.create({
  table: {
    alignItems: "center",
    backgroundColor: "white",
    width: 300,
    height: 650,
    marginTop: 40,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 17,
    marginHorizontal: 3,
  },
  title: {
    marginTop: 20,
    color: "white",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
});
