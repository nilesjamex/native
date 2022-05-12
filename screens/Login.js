import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header.js"
import Form from "../components/Login.js"

export default function App() {
    return (
        <View style={styles.container}>
      <View style={styles.nav}>
      <Header />
      </View>
      <View style={styles.form}>
        <Form />
      </View>
      <StatusBar style="auto" />
    </View>
    )
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