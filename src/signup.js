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
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
      <ScrollView>

      <View style={styles.logoview}><Text style={styles.txtlogo}>D|N</Text></View>

    
      <View style={styles.containerstyle}>
  
       
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            multiline
            autoFocus
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
           autoFocus
          />
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            multiline
            autoFocus
          />
          
        </View>
   
      
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            multiline
            autoFocus
          />
          
        </View>
         <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            multiline
            autoFocus
          />
          
        </View>
     
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.textStyle}>Login</Text>
          </TouchableOpacity>
   
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
  container: {
    flex: 1,
  
   
  },

  txtlogo: {
   
        fontSize: 80,
      
      },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    paddingTop:10,
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 30,
  },
  containerstyle: {
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "back",
    marginLeft:30,
    marginRight:30,
    borderWidth: 1,
  },


    button: {
    width:300,
    left:20,

    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
  },
});

// const styles = StyleSheet.create({
//   scrollcontainer: {
//     flexGrow:1,
//   },

//   contentContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullnametextinput: {
//     borderRadius: 14,
//     borderWidth: 1,
//     borderColor: "black",
//     top: 30,
//     width: 300,
//     left: 20,
//     paddingTop: 10,
//     paddingLeft: 10,

//     paddingBottom: 10,
//   },

//   emailtextinput: {
//     borderRadius: 14,
//     borderWidth: 1,
//     borderColor: "black",
//     top: 60,
//     width: 300,
//     left: 20,
//     paddingTop: 10,
//     paddingLeft: 10,

//     paddingBottom: 10,
//   },

//   phonetextinput: {
//     borderRadius: 14,
//     borderWidth: 1,
//     borderColor: "black",
//     top: 120,
//     width: 300,
//     left: 20,
//     paddingTop: 10,
//     paddingLeft: 10,

//     paddingBottom: 10,
//   },

//   passwordtextinput: {
//     borderRadius: 14,
//     borderWidth: 1,
//     borderColor: "black",
//     top: 90,
//     width: 300,
//     left: 20,
//     paddingTop: 10,
//     paddingLeft: 10,

//     paddingBottom: 10,
//   },

//   txtlogo: {
//     fontSize: 50,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   button: {
//     width:300,
//     left:20,

//     top: 130,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 10,
//     elevation: 3,
//     backgroundColor: "black",
//   },
//   textStyle: {
//     color: "white",
//   },

//   containerstyle: {
//     top: 30,

//     paddingBottom: 40,
//     height: 350,
//     width: 350,
//     backgroundColor: "white",
//     borderRadius: 30,
//     borderColor: "back",
//     borderWidth: 1,
//   },
// });

export default Signup;
