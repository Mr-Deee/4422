import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView ,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Signup=({ navigation }) =>{
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");

  const [password, setPassword] = useState("");

  return (
    
    <KeyboardAvoidingView behavior="padding" style={styles.keyboardcontainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent:"space-evenly" }}
        >
          {/* Logo */}
          <Text style={styles.txtlogo}>D|N</Text>
          <Text>SigUp Screen</Text>

          <View style={styles.containerstyle}>
            {/* fullname */}
            <TextInput
              style={styles.fullnametextinput}
              placeholder="Full Name"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(fullname) => setFullname(fullname)}
            ></TextInput>

            {/* Email */}
            <TextInput
              style={styles.emailtextinput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            ></TextInput>

            {/* Password */}
            <TextInput
              style={styles.passwordtextinput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            ></TextInput>

            <TextInput
              style={styles.phonetextinput}
              placeholder="Phone"
              placeholderTextColor="#003f5c"
              onChangeText={(phone) => setphone(phone)}
            ></TextInput>
             {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.textStyle}>Login</Text>
          </TouchableOpacity>
          </View>
         
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  
  );
}

const styles = StyleSheet.create({
  keyboardcontainer: {
    flex:1,
  },
  fullnametextinput: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "black",
    top: 30,
    width: 300,
    left: 20,
    paddingTop: 10,
    paddingLeft: 10,

    paddingBottom: 10,
  },

  emailtextinput: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "black",
    top: 60,
    width: 300,
    left: 20,
    paddingTop: 10,
    paddingLeft: 10,

    paddingBottom: 10,
  },

  phonetextinput: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "black",
    top: 120,
    width: 300,
    left: 20,
    paddingTop: 10,
    paddingLeft: 10,

    paddingBottom: 10,
  },

  passwordtextinput: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "black",
    top: 90,
    width: 300,
    left: 20,
    paddingTop: 10,
    paddingLeft: 10,

    paddingBottom: 10,
  },

  txtlogo: {
    fontSize: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    width:300,
    left:20,

    top: 130,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
  },

  containerstyle: {
    top: 30,

    paddingBottom: 40,
    height: 350,
    width: 350,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "back",
    borderWidth: 1,
  },
});

export default Signup;
