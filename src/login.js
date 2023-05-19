import * as React from 'react';
import { Button, View, TouchableOpacity,Text,StyleSheet } from 'react-native';

const HomeScreen=({ navigation })=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text  style={styles.txtlogo}>D|N</Text>
      <Text >LogIn Screen</Text>

      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Home')}

      >
     <Text style={styles.textStyle}>Login</Text>
     
    </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
txtlogo:{

    fontSize:50,
    paddingTop:20,
    paddingBottom:50
    
},
button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor:"black"
},
textStyle:{
    color:"white"


},

})

export default HomeScreen