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

export default class NavigationButton extends Component {
  constructor (props) {
    super(props);
    this.state = { title: '',  onPress: {defaultFunc},};
  }

  componentDidMount() {
      this.setState({
          title: this.props.title,
          onPress: this.props.onPress,
      });
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title={this.state.title}
            onPress={() => this.state.onPress}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const defaultFunc = () => {
  console.log('Button pressed')
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
