import React, { useEffect } from "react";
import {View} from "react-native"
import {signinApi} from "./components/services/api/loginApi"
import {fetchData} from "./components/utils"

function App() {

  useEffect(()=>{
    prepare()
  })

  async function prepare(){
    let response = await fetchData(signinApi,{email:"luca@luca.it", password:"123456"});
    console.log(response)
  }
  return (
    <View>

    </View>
  );
}

export default App;
