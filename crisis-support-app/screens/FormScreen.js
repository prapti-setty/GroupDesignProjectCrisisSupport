import React, {Component} from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import Form from '../components/atoms/Form';
//import JsonFormData from './JsonFormData';

import form1 from  '../assets/Json Files/Memorandum of understanding.json';
import form2 from  '../assets/Json Files/Implementation Checklist.json';
import form3 from  '../assets/Json Files/Information Needs Assessment.json';
import form4 from  '../assets/Json Files/Identifying The Location.json';
import form5 from  '../assets/Json Files/KioskOutreach Plan.json';
import form7 from  '../assets/Json Files/Code of Conduct Guidance.json';
import form16 from  '../assets/Json Files/Safe Recruitment Checklist.json';


import { Colors } from '_constants';

export default class JsonForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form1: form1,
      form2: form2,
      form3: form3,
      form4: form4,
      form5: form5,
      form7: form7,
      form16:form16
    };
  }
    render() {
      return(
          <ScrollView >
          <View>
            <Text style = {styles.container}>1. Memorandum of understanding</Text>
              <Form data = {this.state.form1} title = "Memorandum of understanding"/>
          </View>
            <View>
              <Text style = {styles.container}>2. Implementation Checklist</Text>
                <Form data = {this.state.form2} title = "Implementation Checklist"/>
            </View>
            <View>
               <Text style = {styles.container}>3. Information Needs Assessment</Text>
                <Form data = {this.state.form3} title = "Information Needs Assessment"/>
            </View>
            <View>
               <Text style = {styles.container}>4. Identifying the Location</Text>
                <Form data = {this.state.form4} title = "Identifying the Location"/>
            </View>
            <View>
               <Text style = {styles.container}>5. Kiosk/Outreach Plan</Text>
                <Form data = {this.state.form5}/>
            </View>
            <View>
               <Text style = {styles.container}>7. Code of Conduct Guidance</Text>
                <Form data = {this.state.form7}/>
            </View>
            <View>
               <Text style = {styles.container}>16. Safe Recruitment Checklist</Text>
                <Form data = {this.state.form16}/>
            </View>
          </ScrollView>
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
