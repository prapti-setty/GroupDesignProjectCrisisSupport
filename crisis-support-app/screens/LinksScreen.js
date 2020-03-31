import React, {Component}from 'react';
import {Platform, Text,ScrollView, StyleSheet, Linking, Button, View, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors'

export default class ManualScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style = {styles.button} onPress={()=>Linking.openURL('https://www.trocaire.org')}>
                    <Text style = {styles.buttonText}>Trocaire Website</Text>
                </TouchableOpacity>
                <View style = {styles.border}/>
                <TouchableOpacity style = {styles.button} onPress={()=>Linking.openURL('https://www.trocaire.org/news')}>
                    <Text style = {styles.buttonText}>Trocaire Website News</Text>
                </TouchableOpacity>
                <View style = {styles.border}/>
                <TouchableOpacity style = {styles.button} onPress={()=>Linking.openURL('https://www.instagram.com/trocaireonline/')}>
                    <Text style = {styles.buttonText}>Trocaire Instagram</Text>
                </TouchableOpacity>
                <View style = {styles.border}/>
                <TouchableOpacity style = {styles.button} onPress={()=>Linking.openURL('https://www.facebook.com/trocaireireland/')}>
                    <Text style = {styles.buttonText}>Trocarire Facebook</Text>
                </TouchableOpacity>
                <View style = {styles.border}/>
                <TouchableOpacity style = {styles.button} onPress={()=>Linking.openURL('https://twitter.com/trocaire')}>
                    <Text style = {styles.buttonText}>Trocaire Twitter</Text>
                </TouchableOpacity>
                <View style = {styles.border}/>
                <TouchableOpacity style = {styles.button} onPress={()=>Linking.openURL('https://www.google.com/search?q=trocaire&tbm=nws')}>
                    <Text style = {styles.buttonText}>Google News</Text>
                </TouchableOpacity>
                <View style = {styles.border}/>
            </View>
      )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:Colors.trocaireBlue,
        padding:5,
        height:50,
        borderRadius:5,
        width:'85%',
        justifyContent:'center',
    },
    buttonText:{
        paddingLeft:5,
        paddingRight:5,
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },
    border:{
        height:15,
        color: 'white',
        width:'100%'
    },
})
