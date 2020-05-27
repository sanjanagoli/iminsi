// sign up
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text,
} from 'react-native';

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Text style = {styles.header}> Create your Iminsi Account </Text>
                <TextInput style = {styles.input} placeholder = "Your Username" />
                <TextInput style = {styles.input} placeholder = "Password" secureTextEntry={true}/>
                {/* Alternatively, the onPress could read as "Next" and navigate to the onboarding survey and the real "Sign Up" happends after onboarding survey */}
                <TouchableOpacity>
                    <Text style={styles.buttonText} onPress= {() => { this.signUpUser(); }}> Sign Up </Text>
                 </TouchableOpacity>
            </View>
        );
    }

}

// to do: add more styles as we see fit
const styles = StyleSheet.create({
    container: {
      padding: 30,
    },
    
    header: {
        fontSize: 24,
    },

    input: {},

    buttonText: {},
  });