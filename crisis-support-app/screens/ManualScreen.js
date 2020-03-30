import React ,{Component} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Accordian from '../components/atoms/Accordian';
import manual_data from '../assets/Json Files/manual_data.json';
import { SearchBar } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

export default class ManualScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Manual: manual_data,
      search: '',
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <ScrollView style = {styles.scrollView}>
        <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
          { this.renderAccordians(search) }
        </View>
      </ScrollView>
    );
  }

  renderAccordians=(search)=> {
    const items = [];
    for (let item of this.state.Manual) {
        var chapter = item.id + 1;
        var chapName = item.title;
        if((chapName.toLowerCase()).indexOf(search.toLowerCase()) > -1){
          items.push(
              <Accordian
                  key = {item.id}
                  title = {chapter + " : " + item.title}
                  data = {item.data}
              />
          );
        }
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
    backgroundColor: 'white',
  },
  ScrollView:{

  },
});
