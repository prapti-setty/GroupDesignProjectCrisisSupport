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
          <View>
              <Form data = {this.state.form1} title = "Complaint Log"/>
          </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor:Colors.trocaireBlue,
    color: '#FFFFFF',
    fontSize: 16,
  },

});
