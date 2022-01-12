import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Alert.alert('ErrorSetData ' + error)
  }
};

retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      Alert.alert(value);
    }
  } catch (error) {
    Alert.alert('ErrorFetchingData')
  }
};


