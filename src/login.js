import { Input } from "native-base";
import { Button, View, TouchableOpacity, Text, StyleSheet,  ScrollView,SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>

    <ScrollView
              keyboardShouldPersistTaps="always"
              contentContainerStyle={styles.container}>

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>


      <Text style={styles.txtlogo}>D|N</Text>
      <Text>LogIn Screen</Text>

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


<TouchableOpacity
        
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.doyoutextStyle}>Do you hae an Account</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  doyoutextStyle:{
    top:130,
    left:148,
    color:"black"

  },
  gotosignup:{
    
backgroundColor:"transparent",


  },
  emailtextinput: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor:"black",
    top: 90,
    width: 250,
    left: 50,
    paddingTop: 10,
    paddingLeft: 10,

    paddingBottom: 10,
  },
 passwordtextinput: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor:"black",
    top:100,
    width: 250,
    left: 50,
    paddingTop: 10,
    paddingLeft: 10,

    paddingBottom: 10,
  },


  txtlogo: {
    fontSize: 50,
    paddingTop:80,
    paddingBottom: 50,
  },
  button: {
    alignItems: "center", 
    justifyContent: "center", 
    top: 180,
    left:20,
    right: 20,
    width:300,

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

export default LoginScreen;
