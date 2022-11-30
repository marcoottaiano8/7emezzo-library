import React, { useEffect } from "react";
import { View } from "react-native";
import { signinApi } from "./components/services/api/loginApi";
import { fetchData } from "./components/utils/utils";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Home from "./components/screens/Home";
import Game from "./components/screens/Game";
import Ranking from "./components/screens/Ranking";

function App() {
  
  return (
    <View>
      <Ranking />
    </View>
  );
}

export default App;
