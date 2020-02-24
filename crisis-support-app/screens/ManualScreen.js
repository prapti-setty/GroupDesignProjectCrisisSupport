import React ,{Component} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Accordian from '../components/atoms/Accordian';
import manual_data from '../assets/Json Files/manual_data.json';
import { ExpoLinksView } from '@expo/samples';

export default class ManualScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {Manual: manual_data};
  }

  render() {
    return (
      <ScrollView style = {styles.scrollView}>
        <View style={styles.container}>
          { this.renderAccordians() }
        </View>
      </ScrollView>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (let item of this.state.Manual) {
        var chapter = item.id + 1;
        items.push(
            <Accordian
                key = {item.id}
                title = {chapter + " : " + item.title}
                data = {item.data}
            />
        );
    }
    return items;
  }
}

ManualScreen.navigationOptions = {
  title: 'Kiosk Guidebook',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  ScrollView:{

  },
});
