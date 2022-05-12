import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Form({ navigation }) {
    const [user, setUser] = useState({
        name: "",
        password: ""
    });
    const {name, password} = user;
    // navigation
    const pressHandler = () => {
        navigation.push("Logins");
    }
    return (
        <View>
        <View >
            <Text style={styles.intro}> Login To Your Todo App</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Enter Email</Text>
            <TextInput style={styles.input} placeholder="enter email" defaulValue={name} onChangeText={(val) => {setUser({name: val}); console.log(val)}} />
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Enter Password</Text>
            <TextInput style={styles.input} placeholder="enter password" defaultValue={password} onChangeText={(val) => {setUser({password: val}); console.log(val)}} />
        </View>
        <View style={styles.cen}>
            <Text>Don't have an account? <Text onPress={pressHandler}>Sign Up Here</Text>
            </Text>
        </View>
        <View style={styles.button}>
            <Button onPress={pressHandler} title="Login" color="#2c2c2c" />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    intro: {
        marginTop: 20,
        fontSize: 32,
        textAlign: "center",
    },
    label: {
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: '90%'
    },
    form: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "flexStart"
      },
    cen: {
        textAlign: "center"
    },
    button: {
        marginTop: 10,
        // width: '90%',
        padding: 10,
        textAlign: "center"
    }
})