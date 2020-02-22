import React, {Component} from 'react';
import { View,ScrollView, Text, StyleSheet, TextInput, Button,Picker} from "react-native";
import { Colors } from '../../constants/Colors';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
          data: props.data,
          output: "",
          _update:"",
        }
        this.updateAnswer = (answer, index) => {
          const newArray = [...this.state.output];
          newArray[index].value = answer;
          this.setState({ output: newArray });
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


    const items = [];
    for (let item of this.state.data) {
        if(item.input === "Yes/No entry")
          items.push(
            <View key = {item.id}>
              <Text style ={styles.heading1}> {item.h1} </Text>
              <Text style ={styles.heading2}> {item.h2} </Text>
                  <Picker selectedValue = {this.state.output} onChange = {(value) => this.updateAnswer(value,item.id)}>
                    <Picker.Item label = "Yes" value = "yes" />
                    <Picker.Item label = "No" value = "no" />
                    </Picker>
            </View>
          );
        else if (item.input ==="text entry")
          items.push(
            <View key = {item.id}>
              <Text style ={styles.heading1}> {item.h1} </Text>
              <Text style ={styles.heading2}> {item.h2} </Text>
              <TextInput style={styles.input} value = {this.state.output[item.id]}/>
            </View>
          );
          else if (item.input ==="date entry")
            items.push(
              <View key = {item.id}>
                <Text style ={styles.heading1}> {item.h1} </Text>
                <Text style ={styles.heading2}> {item.h2} </Text>
                <TextInput style={styles.input} value = {this.state.output[item.id]} keyboardType ="number-pad"/>
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
      backgroundColor:'#EEEEFF',
      borderColor: 'gray',
      borderWidth: 1,
    }
});
