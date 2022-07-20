import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import ModalView from "../../Components/Modal";


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ScrollView style={{flex:1, backgroundColor:'#fff'}}>
        {children}
    </ScrollView>
  </TouchableWithoutFeedback>
);


 
export default function Home() {
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

        <ModalView/>

      {/* <TouchableOpacity style={styles.Option} >
        <Text style={styles.text}>Receive Parcel</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.Option} >
        <Text style={styles.text}>Drop Parcel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Option} >
        <Text style={styles.text}>Return Parcel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Option} >
        <Text style={styles.text}>Update Status</Text>
      </TouchableOpacity>
 















      {/* <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={Login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}

    </View>
    </DismissKeyboard>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
 
  image: {
    // marginBottom: 40,
    marginTop: 100,
    width:'50%',
    height:'20%',
  },
 
  inputView: {
    backgroundColor: "#d6b046",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
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
