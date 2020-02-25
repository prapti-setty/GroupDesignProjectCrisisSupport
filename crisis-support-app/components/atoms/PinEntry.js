import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class PinEntry extends Component {
  constructor (props) {
    super(props);
    this.state = {
        result: '',
        text: '',
        ourText: '',
        placeholder: "",
        pinCode: "",
        hideText: false,
        keyboardtype: 'default',
        submitFunction: '',
        navigationOption: {},
        navigationFunction: {}}
  }

  componentDidMount() {
      this.setState({
          placeholder: this.props.placeholder,
          pinCode: this.props.pinCode,
          hideText: this.props.hideText,
          keyboardtype: this.props.keyboardtype,
          submitFunction: this.props.submitFunction,
          navigationOption: this.props.navigationOption,
          navigate: this.props.navigateFunction,
      });
  }

  clearText(){
    this.setState({text:''})
  }


  render(){
    return (
        <View style={styles.textBox}>
          <TextInput
              placeholder={this.state.placeholder}
              keyboardType={this.state.keyboardtype}
              secureTextEntry={this.state.hideText}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              onSubmitEditing={
              ({ nativeEvent }) => { this.setState({ result: nativeEvent.text });
                  if(this.state.text == this.props.pinCode && this.state.submitFunction == 'pin')
                  {
                      this.state.navigate(this.state.navigationOption);
                      this.setState({ourText: 'good'});
                      this.clearText();
                  }
                  else if(this.state.submitFunction == 'pin')
                  {
                      this.setState({ourText: 'bad'});
                      this.clearText();
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
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginVertical:50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
