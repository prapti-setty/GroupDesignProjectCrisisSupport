import React ,{Component} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Accordian from '../components/atoms/Accordian';
import manual_data from '../assets/Json Files/manual_data.json';
import { SearchBar } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../constants/Colors'

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
      <ScrollView style = {styles.container}>
        <SearchBar
          placeholder="Type Here..."
          placeholderTextColor='white'
          searchIcon = {{color:'white'}}
          onChangeText={this.updateSearch}
          value={search}
          containerStyle = {styles.searchBarContainer}
          inputContainerStyle = {styles.searchBarInput}
          inputStyle = {styles.input}
        />
        <View style = {styles.border}/>
        { this.renderAccordians(search) }
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
              <View key = {item.id}>
                  <Accordian
                      title = {chapter + " : " + item.title}
                      data = {item.data}
                  />
                  <View style = {styles.border}/>
              </View>
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
      paddingLeft:10,
      paddingRight:10,
      backgroundColor: 'white',
    },
    border:{
        height:5,
        color: 'white',
        width:'100%'
    },
    searchBarContainer:{
        backgroundColor:'white',
        borderBottomColor: Colors.trocaireBlue,
        borderTopColor: Colors.trocaireBlue,
        borderTopWidth:4,
        borderWidth:4,
        borderBottomWidth:4,
        borderColor:Colors.trocaireBlue,
        borderRadius:5,
    },
    searchBarInput:{
        backgroundColor:Colors.trocaireBlue
    },
    input:{
        color:'white',
    }
});
