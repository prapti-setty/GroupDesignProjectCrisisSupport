import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class NavigationButton extends Component {
  constructor (props) {
    super(props);
    this.state = { title: '',  navigationOption: {defaultFunc}, navigateFunction: {}};
  }

  componentDidMount() {
      this.setState({
          title: this.props.title,
          navigationOption: this.props.navigationOption,
          navigate: this.props.navigateFunction,
      });
  }

  render() {
    return (
          <Button
            title={this.state.title}
            textStyle={{fontFamily:'univers-condensed'}}
            onPress={() => this.state.navigate(this.state.navigationOption)}
            color={'rgba(0, 133, 202, 1)'}
          />
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
});
