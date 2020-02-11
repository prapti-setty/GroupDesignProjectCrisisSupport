import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class PinEntry extends Component {
  constructor (props) {
    super(props);
    this.state = { result: '', ourText: '', placeholder: "", pinCode: "", hideText: false, keyboardtype: 'default', submitFunction: '',}
  }

  componentDidMount() {
      this.setState({
          placeholder: this.props.placeholder,
          pinCode: this.props.pinCode,
          hideText: this.props.hideText,
          keyboardtype: this.props.keyboardtype,
          submitFunction: this.props.submitFunction,
      });
  }

  render(){
    return (
        <View style={styles.textBox}>
          <TextInput
              placeholder={this.state.placeholder}
              keyboardType={this.state.keyboardtype}
              secureTextEntry={this.state.hideText}
              onSubmitEditing={
              ({ nativeEvent }) => { this.setState({ result: nativeEvent.text });
                  if(nativeEvent.text.toString() == this.props.pinCode && this.state.submitFunction == 'pin')
                  {
                      this.setState({ourText: 'good'})
                  }
                  else if(this.state.submitFunction == 'pin')
                  {
                      this.setState({ourText: 'bad'})
                  }
                  else
                  {
                      this.setState({ourText: nativeEvent.text})
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