import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {Platform} from "react-native"


//chiedo i dati al DB
export async function getDataFromStorage(key) {
  let data = []
  if (Platform.OS === 'web')
    data = JSON.parse(sessionStorage.getItem(key))
  else {
    try {
      data = await AsyncStorage.getItem(key)
      data = JSON.parse(data)
      if (data === null)
        data = []
    } catch (error) {
      console.log(error)
    }
  }
  if (data === null)
    data = []
  return data
}

//inserisco i dati nel DB
export async function setDataInStorage(key, data) {
  if (Platform.OS === 'web')
    sessionStorage.setItem(key, JSON.stringify(data));
  else {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.log(e)
    }
  }
}

//generic api function
export async function fetchData(apiFunc, params = null, body = null) {
  return await apiFunc(params, body);
};
