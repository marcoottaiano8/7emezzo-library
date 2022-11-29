import React, { useEffect } from "react";
import { View } from "react-native";
import { signinApi } from "./components/services/api/loginApi";
import { fetchData } from "./components/utils/utils";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import { useFonts } from "expo-font";
import Home from "./components/screens/Home";

function App() {
  // const [loaded] = useFonts({
  //   Montserrat: require("./components/assets/fonts/MarvelRegular-Dj83.otf"),
  // });

  // // useEffect(() => {
  // //   prepare();
  // // });

  // if (!loaded) {
  //   return null;
  // }

  async function prepare() {
    let response = await fetchData(signinApi, {
      email: "luca@luca.it",
      password: "123456",
    });
    console.log(response);
  }
  return (
    <View>
      <Home />
    </View>
  );
}

export default App;
