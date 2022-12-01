import React, { useEffect, useState } from "react";
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
  Platform,
} from "react-native";
import CustomButton from "../CustomButton";
import commonStyle from "../style/commonStyle";
import useResponsive from "../utils/useResponsive";
import { fetchData, getDataFromStorage } from "../utils/utils";
import { rankingApi } from "7emezzo-gs/dist/services/api/rankingApi";

export default function Ranking(props) {
  const [Mobile, Default, isDesktop] = useResponsive();
  const [state, setState] = useState({
    user: {
      userIndex: null,
      username: null,
      score: null,
    },
    ranking: [],
  });

  const icons = [
    require("../assets/images/cup/gold-cup.png"),
    require("../assets/images/cup/silver-cup.png"),
    require("../assets/images/cup/bronze-cup.png"),
  ];

  function goToHome() {
    if (!!props.goToHome) props.goToHome();
  }

  useEffect(() => {
    prepare();
  }, []);

  async function prepare() {
    let result = await fetchData(rankingApi);
    console.log("classifica", result);
    let user = await getDataFromStorage("user");
    user = JSON.parse(user);
    user.id = 15;
    let username = null,
      score = null,
      userIndex = null;
    result.data.users.forEach((el, index) => {
      if (user.id === el.id) {
        userIndex = index + 1;
        username = el.username;
        score = el.score;
        console.log(userIndex, username, score);
      }
    });
    setState({
      ...state,
      user: {
        userIndex: userIndex,
        username: username,
        score: score,
      },
      ranking: result.data.users,
    });
  }

  const renderItem = ({ item, index }) => (
    <View style={mobile.item}>
      <View style={mobile.rowView}>
        {index > 2 ? (
          <View
            style={[
              isDesktop ? desktop.iconCup : mobile.iconCup,
              mobile.centerView,
            ]}
          >
            <Text style={[mobile.text, isDesktop && desktop.text]}>
              {index + 1}
            </Text>
          </View>
        ) : (
          <Image
            source={icons[index]}
            style={isDesktop ? desktop.iconCup : mobile.iconCup}
          ></Image>
        )}
        <Text
          style={[mobile.text, mobile.username, isDesktop && desktop.username]}
        >
          {item.username}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={[mobile.text, isDesktop && desktop.text]}>
          {item.score}
        </Text>
        <Text style={[mobile.text, isDesktop && desktop.text]}>pts</Text>
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
        <View style={[mobile.table, isDesktop && desktop.table]}>
          <ImageBackground
            source={require("../assets/images/pokerTable.jpg")}
            resizeMode="cover"
            style={[mobile.tableImage, isDesktop && desktop.tableImage]}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={[mobile.title, isDesktop && desktop.title]}>
                Classifica
              </Text>
              <View style={isDesktop && mobile.centerView}>
                <View
                  style={[
                    mobile.line,
                    { marginTop: 20 },
                    isDesktop && desktop.line,
                  ]}
                />
              </View>
            </View>

            <View style={{ justifyContent: "space-between", flex: 5 }}>
              <View
                style={[mobile.scrollView, isDesktop && desktop.scrollView]}
              >
                {!!state.ranking && (
                  <FlatList
                    data={state.ranking}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                  />
                )}
              </View>
              {!!state.user.userIndex ? (
                <View style={isDesktop && mobile.centerView}>
                  <View
                    style={[
                      mobile.line,
                      { marginBottom: 10 },
                      isDesktop && desktop.line,
                    ]}
                  />
                  <View style={[mobile.item]}>
                    <View style={mobile.rowView}>
                      <View
                        style={[
                          isDesktop ? desktop.iconCup : mobile.iconCup,
                          mobile.centerView,
                        ]}
                      >
                        {state.user.userIndex > 3 ? (
                          <Text
                            style={[mobile.text, isDesktop && desktop.text]}
                          >
                            state.user.userIndex
                          </Text>
                        ) : (
                          <Image
                            source={icons[state.user.userIndex - 1]}
                            style={isDesktop ? desktop.iconCup : mobile.iconCup}
                          />
                        )}
                      </View>
                      <Text
                        style={[
                          mobile.text,
                          mobile.username,
                          isDesktop && desktop.username,
                        ]}
                      >
                        {state.user.username}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={[mobile.text, isDesktop && desktop.text]}>
                        {state.user.score}
                      </Text>
                      <Text style={[mobile.text, isDesktop && desktop.text]}>
                        pts
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={isDesktop && mobile.centerView}>
                  <View
                    style={[
                      mobile.line,
                      { marginBottom: 10 },
                      isDesktop && desktop.line,
                    ]}
                  />
                  <View style={[mobile.centerView, { marginBottom: 20 }]}>
                    <Text
                      style={[
                        mobile.text,
                        mobile.username,
                        isDesktop && desktop.username,
                      ]}
                    >
                      Non classificato
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <CustomButton label={"Home"} callback={goToHome} />
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
    marginTop: 30,
    marginBottom: 20,
    maxHeight: "70%",
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
    paddingHorizontal: 30,
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

const desktop = StyleSheet.create({
  tableImage: {
    width: "100%",
    height: "100%",
  },
  table: {
    width: "50%",
    height: "70%",
  },
  line: {
    width: "60%",
    margin: "auto",
  },
  scrollView: {
    marginHorizontal: "20%",
  },
  username: {
    fontSize: 30,
  },
  text: {
    fontSize: 25,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 55,
  },
  iconCup: {
    width: 33,
    height: 33,
  },
});
