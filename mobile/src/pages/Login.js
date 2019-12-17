import React from 'react';
import { View, Image,KeyboardAvoidingView, Platform, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';

export default function Login(){
    return ( <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={style.container}>
        <Image source={logo}></Image>
        <View style={style.form}>
            <Text style={style.label}>SEU E-MAIL *</Text>
             <TextInput 
                style={style.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={style.label}>TECNOLOGIAS *</Text>
            <TextInput 
                style={style.input}
                placeholder="Tecnologias de interesses"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Encontrar Spots</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>);
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    form : {
        alignSelf : 'stretch',
        paddingHorizontal : 30,
        marginTop:30,
    },
    label : {
        fontWeight : 'bold',
        color : '#444',
        marginBottom : 8,
    },
    input : {
        borderWidth : 1,
        borderColor : '#ddd',
        paddingHorizontal : 20,
        fontSize : 16,
        color : '#444',
        height : 44,
        marginBottom : 20,
        borderRadius : 2,
    },
    button : {
        height : 42,
        backgroundColor : '#f05a5b',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 2, 
    },
    buttonText : {
        color: '#FFF',
        fontWeight : 'bold',
        fontSize : 16,
    }
});