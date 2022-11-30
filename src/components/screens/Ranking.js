import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import CustomButton from "../CustomButton";
import commonStyle from "../style/commonStyle";
import useResponsive from "../utils/useResponsive";

const users = [
  {
    id: 0,
    username: "JustOtto",
    score: 70,
  },
  {
    id: 1,
    username: "Lotto",
    score: 65,
  },
  {
    id: 2,
    username: "Daniele",
    score: 50,
  },
  {
    id: 3,
    username: "Mattia",
    score: 7,
  },
  {
    id: 4,
    username: "Andrea",
    score: 2,
  },
  {
    id: 5,
    username: "Luca",
    score: 0,
  },
];

export default function Ranking(props) {
  const [Mobile, Default, isDesktop] = useResponsive();

  const icons = [
    require("../assets/images/cup/gold-cup.png"),
    require("../assets/images/cup/silver-cup.png"),
    require("../assets/images/cup/bronze-cup.png"),
  ];

  function goToHome() {
    if (!!props.goToHome) props.goToHome();
  }

  const renderItem = ({ item }) => (
    <View style={mobile.item}>
      <View style={mobile.rowView}>
        {item.id > 2 ? (
          <View style={[mobile.iconCup, mobile.centerView]}>
            <Text style={mobile.text}>{item.id}</Text>
          </View>
        ) : (
          <Image source={icons[item.id]} style={mobile.iconCup}></Image>
        )}
        <Text style={[mobile.text, mobile.username]}>{item.username}</Text>
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
        style={[commonStyle.backgroundImg, { justifyContent: "center" }]}
      >
        <View style={mobile.table}>
          <ImageBackground
            source={require("../assets/images/pokerTable.jpg")}
            resizeMode="cover"
            style={mobile.tableImage}
          >
            <Text style={mobile.title}>Classifica</Text>
            <View style={[mobile.line, { marginTop: 20 }]} />
            <ScrollView style={mobile.scrollView}>
              <View>
                <FlatList
                  data={users}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </ScrollView>
            <View style={[mobile.line, { marginBottom: 10 }]} />
            <View style={[mobile.item, { marginHorizontal: 30 }]}>
              <View style={mobile.rowView}>
                <View style={[mobile.iconCup, mobile.centerView]}>
                  <Text style={mobile.text}>5</Text>
                </View>
                <Text style={[mobile.text, mobile.username]}>Pippo</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={mobile.text}>3 </Text>
                <Text style={mobile.text}>pts</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <CustomButton label={"Home"} callback={goToHome} />
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
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
  },
  tableImage: {
    width: 301,
    height: 651,
    borderRadius: 20,
  },
  scrollView: {
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  line: {
    backgroundColor: "white",
    height: 1,
    marginHorizontal: 30,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 3,
  },
  title: {
    marginTop: 20,
    color: "white",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  iconCup: {
    width: 20,
    height: 20,
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
