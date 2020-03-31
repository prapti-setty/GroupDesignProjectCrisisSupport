import React, {Component} from 'react';
import { View,ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert,Picker, Platform} from "react-native";
import { Colors } from '_constants';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {Constants} from 'expo';
import { Asset } from 'expo-asset';
import * as MailComposer from 'expo-mail-composer';
export default class Form extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      output: [],
      _update:"",
    }
    this.subject = props.title;
    this.recipient ="figawaf815@mrisemail.com";
    this.updateAnswer = (answer,index) => {
      const newArray = [...this.state.output];
      newArray[index] = answer;
      this.setState({ output: newArray });
      //console.log(answer);
      //console.log(index);
    }
    this.formToEmail= ()=>{
      const body= [];
      for(let item of this.state.data){

        if(Platform.OS=='web'){
          body.push(
            item.id+" "+ this.state.output[item.id]+"\n"
          );
        }
        else{
          if(item.h1 !==undefined && item.h2 === undefined && this.state.output[item.id]===undefined){
            body.push(
              item.h1+ "\n"
            );
          }
          else if(item.h1 !==undefined && item.h2 === undefined){
            body.push(
              item.h1+" " + this.state.output[item.id] + "\n"
            );
          }
          else if (item.h1 ===undefined && item.h2 !== undefined){
            body.push(
              item.h2+" " + this.state.output[item.id] + "\n"
            );
          }
          else{
            body.push(
              item.h1 +" "+item.h2 +" "+ this.state.output[item.id] + "\n"
            );
          }
        }
      }

      this.handleEmail(" "," ",body);

    }
    this.handleEmail = (subject,recipient,body) => {
      const attachment1 = Asset.fromModule(require('../../assets/images/icon.png')).localUri;
      console.log(attachment1);
      // const to = recipient // string or array of email addresses
      // const answer = body.toString();
      // email(to, {
      //   subject: this.subject,
      //   body: body.toString()
      // }).catch(console.error)
      // console.log(body.toString())
      MailComposer.composeAsync({
        recipients: [recipient],
        subject: this.subject,
        body:body.toString(),
        attachments: [attachment1]
      });
    }

  }

  render() {
    return (
      //<ScrollView >
      <View>
      {this.renderform()}
      <TouchableOpacity onPress={() => this.formToEmail()}>
      <View style={styles.button}>
      <Text style={styles.textStyle}>
      Submit
      </Text>
      </View>
      </TouchableOpacity>
      {/*<Button*/}
      {/*  title="Submit"*/}
      {/*  titleStyle={{fontFamily:'Univers-Light-Normal'}}*/}
      {/*  onPress={() => this.formToEmail()}*/}
      {/*/>*/}
      </View>
      //</ScrollView>
    );
  }



  renderform() {
    Asset.fromModule(require('../../assets/images/icon.png')).downloadAsync();

    //console.log("re rendered");
    const items = [];
    for (let item of this.state.data) {
        //console.log(this.state.output[item.id]);
        if(item.input === "Yes/No entry")
          items.push(
            <View key = {item.id} style={styles.viewContainer}>
              <Text style ={styles.heading1}> {item.h1} </Text>
              <Text style ={styles.heading2}> {item.h2} </Text>
              <View style={styles.pickerStyle}>
                  <Picker prompt={"Select:"} selectedValue = {this.state.output[item.id]}
                onValueChange={(itemValue, itemIndex) => this.updateAnswer(itemValue,item.id)}>
                    <Picker.Item label = " " value = " "  />
                    <Picker.Item label = "Yes" value = "yes" />
                    <Picker.Item label = "No" value = "no" />
                    <Picker.Item label = "N/A" value = "n/a" />
                  </Picker>
              </View>
            </View>
          );
        else if (item.input ==="text entry")
          items.push(
            <View key = {item.id} style={styles.viewContainer}>
              <Text style ={styles.heading1}> {item.h1} </Text>
              <Text style ={styles.heading2}> {item.h2} </Text>
              <TextInput style={styles.input} value = {this.state.output[item.id]}
                onChangeText={text => this.updateAnswer(text,item.id)} placeholder={"Enter Text"}/>
            </View>
          );
          else if (item.input ==="date entry")
            items.push(
              <View key = {item.id} style={styles.viewContainer}>
                <Text style ={styles.heading1}> {item.h1} </Text>
                <Text style ={styles.heading2}> {item.h2} </Text>
                <TextInput style={styles.input} value = {this.state.output[item.id]} keyboardType ="number-pad"
                onChangeText={text => this.updateAnswer(text,item.id)} placeholder={"Enter Date"}/>
              </View>
            );
          else if (item.input ==="number entry")
              items.push(
                <View key = {item.id} style={styles.viewContainer}>
                  <Text style ={styles.heading1}> {item.h1} </Text>
                  <Text style ={styles.heading2}> {item.h2} </Text>
                  <TextInput style={styles.input} value = {this.state.output[item.id]} keyboardType ="number-pad"
                    onChangeText={text => this.updateAnswer(text,item.id)} placeholder={"Enter Number"}/>
                </View>
              );
          
        else
        items.push(
          <View key = {item.id} style={styles.viewContainer}>
            <Text style ={styles.heading1}> {item.h1} </Text>
            <Text style ={styles.heading2}> {item.h2} </Text>
          </View>
        );
       }
       return items
  }
}

const styles = StyleSheet.create({
    heading1:{
        fontSize: 14,
        fontWeight:'bold',
        fontFamily:'Univers-Light-Normal',
        flex:1,
    },
    heading2:{
        fontSize: 12,
        fontFamily:'Univers-Light-Normal',
        flex:1,
    },
    viewContainer:{
        paddingTop:'0.75%',
        width: '95%',
        alignSelf: 'center'
    },
    input:{
      height: 40,
      backgroundColor:Colors.formBackground,
      borderColor: Colors.trocaireBlue,
      borderRadius:5,
      paddingLeft:10,
      borderWidth: 1,
      width:'100%',
      alignSelf:'center'
    },
    pickerStyle:{
        width:'99%',
        alignSelf: 'center',
        ...Platform.select({
            android: {
                borderWidth: 1,
                borderColor: Colors.trocaireBlue,
                borderRadius:5,
                borderStyle: 'solid',
        },
    }),

    },
    button:{
        marginTop:10,
        height:40,
        width:'100%',
        backgroundColor: '#0085ca',
        alignItems:'center',
    },
    textStyle:{
        fontFamily: 'Univers-Condensed',
        color: 'white',
        fontSize: 21,
        textAlign: 'center',
        paddingTop: '0.45%',
        ...Platform.select({
        android: {
            paddingTop: '1.5%',
        }
    }),
  }
});
