import React ,{useEffect, useState}from "react";
import { View,Text } from 'react-native';
import { SvgUri } from 'react-native-svg';
const Github = () => {
  

  return (
    <View style={{ flex: 1 }}>
      <SvgUri
        // uri={'https://api.github.com/users/Mr-Deee'} // Replace 'your-username' with your actual GitHub username
        width="100%"
        height="100%"
      />
    </View>
  );
};

export default Github;