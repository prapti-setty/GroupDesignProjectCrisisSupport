import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function fontSizer(screenWidth) {
  if(screenWidth > 1000){
    return 30;
  }else if(screenWidth > 500){
    return 25;
  }else if(screenWidth < 500){
    return 20;
  }
}

export default class NavigationButton extends Component {
  constructor (props) {
    super(props);
    this.state = { title: '',  navigationOption: {defaultFunc}, navigateFunction: {}, width: 0};
  }

  componentDidMount() {
      this.setState({
          title: this.props.title,
          navigationOption: this.props.navigationOption,
          navigate: this.props.navigateFunction,
          width: fontSizer(Dimensions.get('window').width)
      });
  }

  render() {
    return (
          <TouchableOpacity onPress={() => this.state.navigate(this.state.navigationOption)}>
            <View style={styles.button}>
              <Text style={
                {fontFamily: 'Univers-Condensed',
                 fontSize: fontSizer(this.state.width),
                 color: 'white',
                 textAlign: 'center'}}>
                    {this.state.title}
              </Text>
            </View>
          </TouchableOpacity>
    );
  }
}

const defaultFunc = () => {
  console.log('Button pressed')
};


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0085ca',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
});
