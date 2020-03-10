import React, {Component} from 'react';
import { View,ScrollView, Text, StyleSheet, TextInput, Button, Alert,Picker} from "react-native";
import { Colors } from '_constants';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import email from 'react-native-email'
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
          this.handleEmail(" "," ",body);

        }
        this.handleEmail = (subject,recipient,body) => {
          const to = recipient // string or array of email addresses
          const answer = body.toString();
          email(to, {
            subject: this.subject,
            body: body.toString()
          }).catch(console.error)
          console.log(body.toString());
        }

    }

  render() {
    return (
      //<ScrollView >
      <View>
        {this.renderform()}
        <Button
          title="Submit"
          onPress={() => this.formToEmail()}
        />
      </View>
      //</ScrollView>
   );
  }



  renderform() {

    //console.log("re rendered");
    const items = [];
    for (let item of this.state.data) {
        //console.log(this.state.output[item.id]);
        if(item.input === "Yes/No entry")
          items.push(
            <View key = {item.id}>
              <Text style ={styles.heading1}> {item.h1} </Text>
              <Text style ={styles.heading2}> {item.h2} </Text>
              <Picker selectedValue = {this.state.output[item.id]}
                onValueChange={(itemValue, itemIndex) => this.updateAnswer(itemValue,item.id)}>
                    <Picker.Item label = " " value = " "  />
                    <Picker.Item label = "Yes" value = "yes" />
                    <Picker.Item label = "No" value = "no" />
                    <Picker.Item label = "N/A" value = "n/a" />
                  </Picker>
            </View>
          );
        else if (item.input ==="text entry")
          items.push(
            <View key = {item.id}>
              <Text style ={styles.heading1}> {item.h1} </Text>
              <Text style ={styles.heading2}> {item.h2} </Text>
              <TextInput style={styles.input} value = {this.state.output[item.id]}
                onChangeText={text => this.updateAnswer(text,item.id) }/>
            </View>
          );
          else if (item.input ==="date entry")
            items.push(
              <View key = {item.id}>
                <Text style ={styles.heading1}> {item.h1} </Text>
                <Text style ={styles.heading2}> {item.h2} </Text>
                <TextInput style={styles.input} value = {this.state.output[item.id]} keyboardType ="number-pad"
                onChangeText={text => this.updateAnswer(text,item.id)}/>
              </View>
            );
          else if (item.input ==="number entry")
              items.push(
                <View key = {item.id}>
                  <Text style ={styles.heading1}> {item.h1} </Text>
                  <Text style ={styles.heading2}> {item.h2} </Text>
                  <TextInput style={styles.input} value = {this.state.output[item.id]} keyboardType ="number-pad"
                    onChangeText={text => this.updateAnswer(text,item.id)}/>
                </View>
              );
        else
        items.push(
          <View key = {item.id}>
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
        flex:1,
    },
    heading2:{
        fontSize: 12,
        flex:1,
    },
    input:{
      height: 40,
      backgroundColor:Colors.formBackground,
      borderColor: 'gray',
      borderWidth: 1,
    }
});
