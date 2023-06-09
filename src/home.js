import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>


    <View><Text>Hi There</Text></View>

      <View style={styles.folderrow}>
        <View style={styles.projectscard}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logoimage}
          />

          <View style= {styles.textbrief}>
          <Text style={{color:"#ADD8E6",flexWrap:"wrap",marginLeft:10,marginRight:6}}>
          This pain shows all projects</Text>
          </View>

          <TouchableOpacity
            style={styles.projectbutton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>{">"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.projectscard02}></View>


        
        
      </View>


      


      <View style={styles.projectscard02}></View>    
        <View style={styles.projectscard02}></View>


      {/* <Text>Home Screen</Text> */}
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  textbrief:{
  marginTop:5,
  alignContent: "center"

  },
  logoimage: {
    alignContent: "center",
    width: 100,
    height: 100,
    marginBottom: 2,
  },
  projectbutton: {
    backgroundColor:"white",
    borderRadius:50,
    color: "white",
    marginLeft:120,
    width: 25,
    height: 25,
    marginTop: 20,
  },

  buttonText: {
    color: "#ADD8E6",
    fontSize: 20,
   
    textAlign: "center",
  },
  folderrow: {
    flexDirection: "row",
  },

  projectscard: {
    marginTop: 20,
    backgroundColor: "black",

    shadowColor: "black",

    borderRadius: 20,
    borderColor: "white",
    marginLeft: 8,
    height: 194,
    width: 179,
    marginRight: 30,
    borderWidth: 1,
  },

  projectscard02: {
    marginTop: 20,
    backgroundColor: "#ADD8E6",

    shadowColor: "black",

    borderRadius: 20,
    borderColor: "white",
    marginLeft: 8,
    height: 194,
    width: 179,
    marginRight: 30,
    borderWidth: 1,
  },
});

export default HomeScreen;
