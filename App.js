import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Button,
  ActivityIndicator,
  Pressable,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [showText, setShowText] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>WORK ON PROGRESS</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show status</Text>
      </Pressable>
      <View style={styles.load}>
        <ActivityIndicator size="large" color="rgb(236,64,122)" />
      </View>
      <Button style={styles.button} title="login" color="#841584" />
      <ImageBackground
        source={require("./assets/images/bg.jpg")}
        style={styles.image}
        resizeMode="contain"
      ></ImageBackground>
      <View style={styles.blink}>
        <Text style={[styles.text, { display: showText ? "none" : "flex" }]}>
          Coming Soon
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: "30px",
    maxWidth: "400px",
    maxHeight: "1000px",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: "1",
    justifyContent: "center",
  },
  blink: {
    width: "100%",
    position: "absolute",
    top: "125px",
    alignItems: "center",
    zIndex: "1",
  },
  text: {
    justifyContent: "center",
    color: "green",
    fontSize: "16px",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "rgb(19,181,222)",
  },
  load: {
    position: "relative",
    top: "110px",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
