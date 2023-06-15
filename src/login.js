import { Input } from "native-base";
import { Button, View, TouchableOpacity, Text, StyleSheet,  ScrollView,  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
     

    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
     <ScrollView>

  

    <View style={styles.logoview}><Text style={styles.txtlogo}>D|N</Text></View>
    <View style={styles.content}>
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
        <Text style={styles.doyoutextStyle}>Do you have an Account? Register.</Text>
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

logoview:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
paddingTop: 49,
paddingBottom:40,
  },

  doyoutextStyle:{
    top:130,
    left: 70,
    color:"black"

  },
  gotosignup:{
    
backgroundColor:"transparent",


  },

  content: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
  },
  emailtextinput: {
    paddingTop:10,
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 30,
  },
 passwordtextinput: {
  paddingTop:10,
  borderRadius: 10,
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  paddingHorizontal: 30,
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
    marginLeft:30,
   marginRight:30,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default LoginScreen;
