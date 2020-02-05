import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class PinEntry extends Component {
  constructor () {
    super();
    this.state = { result: '', ourText: '' }
  }

  render() {
    return (
        <View style={styles.textBox}>
          <TextInput
              placeholder="Enter PIN"
              underlineColorAndroid='transparent'
              keyboardType={'numeric'}
              secureTextEntry={true}
              onSubmitEditing={({ nativeEvent }) => {
                  this.setState({ result: nativeEvent.text })
                  if(nativeEvent.text.toString() == '50'){
                      this.setState({ourText: 'good'})
                  }
                  else{
                      this.setState({ourText: 'bad'})
                  }
                }
              }
              style={{borderWidth: 1, borderStyle: 'solid', height:30,}}
              returnKeyType={'done'}
          />

          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text>user input: {this.state.ourText}</Text>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});