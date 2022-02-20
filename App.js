import React, { Component } from 'react';
import {Alert, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class loginScreen extends Component {

    clicoulogin = () => {
        Alert.alert("GApp", "Você fez login no app!");
    }

    clicousignup = () => {
      Alert.alert("GApp", "Você criará uma conta no app!");
    }

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.fraseapp}>
                Você mais longe!
                </Text>

                <Image
                source={{ uri:'https://www.cursoemvideo.com/wp-content/uploads/2019/08/guana6.png' }}
                style={styles.logo}
                />

                <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                />

                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Digite sua senha'
                />

                <TouchableOpacity
                style={styles.botao}
                onPress={ () => {this.clicoulogin()} }
                >
                <Text style={styles.botaotext}>Login!</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.signupbtn}
                onPress={ () => {this.clicousignup()} }
                >
                <Text style={styles.signupbtntext}>Ainda não tem conta? Sing up!</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },
    logo: {
        width: 150, 
        height: 150, 
        borderRadius: 100 
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: "white",
        fontSize: 16, 
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao: {
        width: 150,
        height: 42, 
        backgroundColor: "blue",
        marginTop: 30, 
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    botaotext: {
        fontSize: 16, 
        fontWeight: "bold",
        color: "white"
    },
    fraseapp: {                  
      fontSize: 32,
      fontWeight: "bold",
      color: "black"
    },
    signupbtn: {
      width: 230, 
      height: 42, 
      backgroundColor: "blue",
      marginTop: 10,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center"
    },
    signupbtntext: {
      fontSize: 14,
      fontWeight: "bold",
      color: "white"
    }
})
