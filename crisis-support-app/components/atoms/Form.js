import React, {Component} from 'react';
import { View,ScrollView, Text, StyleSheet, TextInput, Button,Picker} from "react-native";
import { Colors } from '_constants';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
          data: props.data,
          output: [],
          _update:"",
        }
        this.updateAnswer = (answer,index) => {
          const newArray = [...this.state.output];
          newArray[index] = answer;
          this.setState({ output: newArray });
          console.log(answer);
          console.log(index);
        }
    }

  render() {
    return (
      //<ScrollView >
        <View>
          {this.renderform()}
       </View>
      //</ScrollView>
   );
  }



  renderform() {

    console.log("re rendered");
    const items = [];
    for (let item of this.state.data) {
        console.log(this.state.output[item.id]);
        if(item.input === "Yes/No entry")
          items.push(
            <View key = {item.id}>
              <Text style ={styles.heading1}> {item.h1} </Text>
              <Text style ={styles.heading2}> {item.h2} </Text>
              <Picker selectedValue = {this.state[item.id]}
                onValueChange={(itemValue, itemIndex) => this.updateAnswer(itemValue,item.id)}>
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
