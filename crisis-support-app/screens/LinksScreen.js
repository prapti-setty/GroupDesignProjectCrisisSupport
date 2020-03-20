import React from 'react';
import {Platform, ScrollView, StyleSheet, Linking, Button, View, TouchableOpacity, Image} from 'react-native';
import { NavigationButton } from '_atoms';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.rectangularButton}>
        <View>
         <NavigationButton
          title="Trocaire Home"
          navigationOption={'https://www.trocaire.org'}
          navigateFunction={Linking.openURL}/>
        </View>
      </View>
      <View style={styles.rectangularButton}>
        <View>
         <NavigationButton
          title="Trocaire News"
          navigationOption={'https://www.trocaire.org/news'}
          navigateFunction={Linking.openURL}/>
        </View>
      </View>
      <View style={styles.rectangularButton}>
        <View>
         <NavigationButton
          title="Reports about Trocaire"
          navigationOption={'https://www.google.com/search?q=trocaire&tbm=nws'}
          navigateFunction={Linking.openURL}/>
        </View>
      </View>
      <View style={styles.rectangularButton}>
        <View>
         <NavigationButton
          title="Twitter"
          navigationOption={'https://twitter.com/trocaire'}
          navigateFunction={Linking.openURL}/>
        </View>
      </View>
      <View style={styles.rectangularButton}>
        <View>
         <NavigationButton
          title="Facebook"
          navigationOption={'https://www.facebook.com/trocaireireland/'}
          navigateFunction={Linking.openURL}/>
        </View>
      </View>
      <View style={styles.rectangularButton}>
        <View>
         <NavigationButton
          title="Instagram"
          navigationOption={'https://www.instagram.com/trocaireonline/'}
          navigateFunction={Linking.openURL}/>
        </View>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '5%'
  },
  rectangularButton: {
    paddingLeft: '40%',
    paddingRight: '40%',
    paddingTop: '.5%',
    paddingBottom: '.5%',
    alignContent: 'center',

    ...Platform.select({
      android: {
        paddingLeft: '25%',
        paddingRight: '25%',
        paddingTop: '4%',
        paddingBottom: '4%',
      },
    }),
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingLeft: '20%',
    paddingRight: '20%',
    height: '30%',
    marginBottom: '-5%',
    marginTop: '5%',
    ...Platform.select({
      android: {
        paddingLeft: '20%',
        paddingRight: '20%',
        height: '30%',
        marginBottom: '-30%',
        marginTop: '25%',
      },
    }),
  },
});
