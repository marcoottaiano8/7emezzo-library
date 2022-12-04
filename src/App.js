import React from "react";
import { View } from "react-native";
import { fetchData } from "./components/utils/utils";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Home from "./components/screens/Home";
import Game from "./components/screens/Game";
import Ranking from "./components/screens/Ranking";
import store from "./components/store";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <View>
        {/* <Game/> */}
        <Home/>
        {/* <Login /> */}
      </View>
    </Provider>
  );
}

export default App;
