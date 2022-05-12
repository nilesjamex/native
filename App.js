import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home.js";
import Navigator from './routes/HomeStack';

export default function App() {
  return (
      <Navigator />
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 50
  },
  container: {
    backgroundColor: '#fff',
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
