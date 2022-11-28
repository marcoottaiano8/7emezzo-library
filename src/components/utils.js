import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {Platform} from "react-native"


//chiedo i dati al DB
export async function getDataFromStorage(key) {
  let users = []
  if (Platform.OS === 'web')
    users = JSON.parse(sessionStorage.getItem(key))
  else {
    try {
      users = await AsyncStorage.getItem(key)
      users = JSON.parse(users)
      if (users === null)
        users = []
    } catch (error) {
      console.log(error)
    }
  }
  if (users === null)
    users = []
  return users
}

//inserisco i dati nel DB
export async function setDataInStorage(users, key) {
  if (Platform.OS === 'web')
    sessionStorage.setItem(key, JSON.stringify(users));
  else {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(users))
    } catch (e) {
      console.log(e)
    }
  }
}

//generic api function
export async function fetchData(apiFunc, params = null, body = null) {
  return await apiFunc(params, body);
};
