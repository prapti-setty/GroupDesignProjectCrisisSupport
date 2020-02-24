import React, {Component} from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import Form from '../components/atoms/Form';
//import JsonFormData from './JsonFormData';
import form0 from  '../assets/Json Files/Memorandum of understanding.json';
import form1 from  '../assets/Json Files/Implementation Checklist.json';
import form2 from  '../assets/Json Files/Information Sharing.json';
import { Colors } from '_constants';

export default class JsonForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form0: form0,
      form1: form1,
      form2: form2};
  }
    render() {
      return(
          <ScrollView >
          <View>
            <Text style = {styles.container}>Memorandum of understanding</Text>
              <Form data = {this.state.form0}/>
          </View>
            <View>
              <Text style = {styles.container}>Implementation Checklist</Text>
                <Form data = {this.state.form1}/>
            </View>
            <View>
               <Text style = {styles.container}>Information Sharing</Text>
                <Form data = {this.state.form2}/>
            </View>
          </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor:Colors.jsonFormBackgroundColor,
  },
});
