import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ip } from "../../ip";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import ModalView from "../../Components/Modal";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {children}
    </ScrollView>
  </TouchableWithoutFeedback>
);

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleRe, setModalVisibleRe] = useState(false);
  const [parcelId, setParcelId] = useState();

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const Login = () => {
  //     if (email === "admin" && password === "admin" || email === "Admin" && password === "Admin") {
  //       alert("Login Successful");
  //     } else {
  //       alert("Login Failed");
  //     }
  //   }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/log2.png")} />

        <TouchableOpacity
          style={styles.Option}
          onPress={() => navigation.navigate("RegisterParcel")}
        >
          <Text style={styles.text}>Register Parcel</Text>
        </TouchableOpacity>

        <ModalView />

        {/* <TouchableOpacity style={styles.Option} >
        <Text style={styles.text}>Receive Parcel</Text>
      </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.Option} >
        <Text style={styles.text}>Drop Parcel</Text>
      </TouchableOpacity> */}

        {/* create modal for drop parcel view */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            style={styles.modalView}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            {/* create view with text hello modal  */}
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Please enter Parcel ID</Text>
                <Text style={styles.modalText}>
                  Parcel ID: Receiver No.
                </Text>
                <TextInput
                  style={styles.inputView}
                  placeholder="Parcel ID"
                  placeholderTextColor="#003f5c"
                  keyboardType="numeric"
                  onChangeText={(parcelId) => setParcelId(parcelId)}
                />

                <Pressable
                  style={[
                    styles.button,
                    styles.buttonClose,
                    { marginBottom: 10, backgroundColor: "green" },
                  ]}
                  onPress={async () => {
                    var urlencoded = new URLSearchParams();

                    var requestOptions = {
                      method: "POST",
                      body: urlencoded,
                      redirect: "follow",
                    };

                    fetch(
                      `http://${ip}:3001/dropParcel?parcelId=${parcelId}`,
                      requestOptions
                    )
                      .then((response) => response.text())
                      .then((result) => {
                        console.log(result);
                        setModalVisible(!modalVisible);
                      })
                      .catch((error) => console.log("error", error));
                  }}
                >
                  <Text style={styles.textStyle}>Mark as Delivered</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          {/* <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>  */}
          <TouchableOpacity
            style={styles.Option}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.text}>Drop Parcel</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.Option}
            onPress={() => setModalVisibleRe(true)}
        
        >
          <Text style={styles.text}>Return Parcel</Text>
        </TouchableOpacity>

      



        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleRe}
            style={styles.modalView}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisibleRe(!modalVisibleRe);
            }}
          >
            {/* create view with text hello modal  */}
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Please enter Parcel ID</Text>
                <Text style={styles.modalText}>
                  Parcel ID: Receiver No.
                </Text>
                <TextInput
                  style={styles.inputView}
                  placeholder="Parcel ID"
                  placeholderTextColor="#003f5c"
                  keyboardType="numeric"
                  onChangeText={(parcelId) => setParcelId(parcelId)}
                />

                <Pressable
                  style={[
                    styles.button,
                    styles.buttonClose,
                    { marginBottom: 10, backgroundColor: "green" },
                  ]}
                  onPress={async () => {
                    var urlencoded = new URLSearchParams();

                    var requestOptions = {
                      method: "POST",
                      body: urlencoded,
                      redirect: "follow",
                    };

                    fetch(
                      `http://${ip}:3001/returnParcel?parcelId=${parcelId}`,
                      requestOptions
                    )
                      .then((response) => response.text())
                      .then((result) => {
                        console.log(result);
                        setModalVisibleRe(!modalVisibleRe);
                      })
                      .catch((error) => console.log("error", error));
                  }}
                >
                  <Text style={styles.textStyle}>Mark as Return</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisibleRe(!modalVisibleRe)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

         
        </View>

      
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "red",
    borderRadius: 20,
    // padding: '100%',
    // flex:1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },

  image: {
    // marginBottom: 40,
    marginTop: 100,
    width: "50%",
    height: "20%",
  },

  inputView: {
    backgroundColor: "#d6b046",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    textAlign: "center",
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#000",
  },
  loginText: {
    color: "white",
    fontSize: 18,
  },
  Option: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#000",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
