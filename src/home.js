import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text ,Image} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.folderrow}>
        <View style={styles.projectscard}>


        <Image
        source={require('../assets/logo.png')}
        style={styles.logoimage}      />
      
          <TouchableOpacity
            style={styles.projectbutton}
            
            onPress={() => navigation.navigate("Home")}>

            
          
       <Text style={styles.buttonText}>PROJECTS</Text>
              
              </TouchableOpacity>
                 </View>

        <View style={styles.projectscard}></View>
      </View>

      <Text>Home Screen</Text>
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
  logoimage:{
    alignContent:"center",
    width:100,
    height:100,
    marginBottom:2
    
    



  },
projectbutton:{
  color:"white",
  width: 180,
  height: 100,
  marginTop:10,

  


},

buttonText: {

  color: 'white',
  fontSize: 20,
 textAlign:"center"

},
  folderrow: {
    flexDirection: "row",
  },

  projectscard: {
   marginTop:20,
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


});

export default HomeScreen;
