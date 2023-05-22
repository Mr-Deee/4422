import { Input } from "native-base";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.txtlogo}>D|N</Text>
      <Text>LogIn Screen</Text>

      <View style={styles.containerstyle}>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
          <TextInput
          style={styles.textinput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textStyle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderRadius: 30,
    borderWidth: 2,
    top: 30,
    width: 300,
    left: 20,
    paddingTop: 10,
    paddingLeft: 10,

    paddingBottom: 10,
  },
  txtlogo: {
    fontSize: 50,
    paddingTop: 0,
    paddingBottom: 50,
  },
  button: {
    top: 40,
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

export default HomeScreen;
