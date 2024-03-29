import * as React from "react";
import Github from "./components/Github";
import GitHubCalendar from 'react-github-calendar';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.folderrow}>
          <View style={styles.projectscard}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logoimage}
            />

            <View style={styles.textbrief}>
              <Text
                style={{
                  color: "#ADD8E6",
                  flexWrap: "wrap",
                  marginLeft: 10,
                  marginRight: 6,
                }}
              >
                This pain shows all projects
              </Text>
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

        <View style={styles.subsection}>    
          <View> 
      </View> 

  
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  textbrief: {
    marginTop: 5,
    alignContent: "center",
  },
  logoimage: {
    alignContent: "center",
    width: 100,
    height: 100,
    marginBottom: 2,
  },
  projectbutton: {
    backgroundColor: "white",
    borderRadius: 50,
    color: "white",
    marginLeft: 120,
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

  subsection: {
    marginLeft:2,
    marginRight:2,
    borderTopRightRadius: 50,
    borderColor: "black",
    backgroundColor: "black",
    borderBottomLeftRadius: 1,
    shadowColor: "black",
    borderBottomRightRadius: 1,
    borderTopLeftRadius: 50,
    marginTop: 20,

    padding: 180,
    
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
