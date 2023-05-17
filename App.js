import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';


export default function App() {
  return (
    <Router>
    <Scene key="home" component={HomeScreen} title="Home" />
    <Scene key="about" component={AboutScreen} title="About" />
</Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
