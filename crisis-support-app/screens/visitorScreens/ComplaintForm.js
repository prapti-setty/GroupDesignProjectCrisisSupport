import React, {Component} from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import Form from '../../components/atoms/Form';
//import JsonFormData from './JsonFormData';

import form1 from  '../../assets/Json Files/Complaint Log.json';


import { Colors } from '_constants';

export default class JsonForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form1: form1,
    };
  }
    render() {
      return(
          <ScrollView style={styles.container}>
            <View style={styles.formContainer}>
              <Text style = {styles.formhHeader}>Feedback/Complaints Log</Text>
                <Form data = {this.state.form1} title = "Complaint Log"/>
            </View>
            <View style={{paddingBottom:35}}/>
          </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
    },
    formContainer:{
        borderWidth:2,
        borderRadius:5,
        borderColor:Colors.trocaireBlue,
    },
    border:{
        height:2,
        paddingTop:20,
        paddingBottom:20
    },
    formhHeader:{
        fontFamily: 'Univers-Condensed',
        textAlign:'center',
        padding:10,
        backgroundColor:Colors.trocaireBlue,
        color: 'white',
        fontSize: 21,
  }
});
