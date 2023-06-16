import { Input } from "native-base";
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={64}
    >
      <ScrollView>
        <View style={styles.logoview}>
          <Text style={styles.txtlogo}>D|N</Text>
        </View>
        <View style={styles.content}>
       

          <View style={styles.containerstyle}>
            <TextInput
              style={styles.emailtextinput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            ></TextInput>

            <TextInput
              style={styles.passwordtextinput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            ></TextInput>

            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.doyoutextStyle}>
                Do you have an Account? Register.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoview: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 39,
    paddingBottom: 10,
  },

  doyoutextStyle: {
    top: 80,
       color: "black",
       marginTop:0,
       marginLeft:30,
       marginRight:10,
  },
  gotosignup: {
    backgroundColor: "transparent",
  },

  content: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
  },
  emailtextinput: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    padding: 20,
    justifyContent: "center",

    borderRadius: 10,
    height: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
  passwordtextinput: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,

    borderRadius: 10,
    height: 20,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  txtlogo: {
    fontSize: 50,
    paddingTop: 80,
    paddingBottom: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    top: 100,
    marginLeft: 20,
    marginRight: 20,
  
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
 
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default LoginScreen;
