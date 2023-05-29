import * as React from 'react';
import { Button,StyleSheet, View, Text } from 'react-native';
import { AppBar } from "@react-native-material/core";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white' }}>
 <View  style={styles.projectscard}>




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
    backgroundColor: 'white'        
},
  projectscard:{
    
    backgroundColor: "",
    shadowRadius: 30,
    shadowColor:"black",
    borderRadius: 10,
    borderColor: "black",
    marginLeft:30,
    height:94,
    width:109,
    marginRight:30,
    borderWidth: 1,
  }
})

export default HomeScreen