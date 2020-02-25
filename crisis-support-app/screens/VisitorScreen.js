import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { MonoText, PinEntry, NavigationButton } from '_atoms';
import { Colors } from '_constants';

export default function VisitorScreen({ navigation }) {

  return (
    <View style={styles.container}>
        <View style = {styles.button}>
            <NavigationButton title="Kiosk Guidebook" navigationOption={'Manual'} navigateFunction={navigation.navigate}/>
        </View>
        <View style = {styles.button}>
            <NavigationButton title="Forms (Broken)" navigationOption={'Forms'} navigateFunction={navigation.navigate}/>
        </View>
        <View style = {styles.button}>
            <NavigationButton title="Links" navigationOption={'Links'} navigateFunction={navigation.navigate}/>
        </View>
        <View style = {styles.button}>
            <NavigationButton title="Settings" navigationOption={'Settings'} navigateFunction={navigation.navigate}/>
        </View>
        <View style = {styles.button}>
            <NavigationButton title="Complaints" navigationOption={'ComplaintForm'} navigateFunction={navigation.navigate}/>
        </View>
        <View style = {styles.button}>
            <NavigationButton title="General Information (Not done)" navigationOption={'General_Info'} navigateFunction={navigation.navigate}/>
        </View>
        <View style = {styles.button}>
            <NavigationButton title="Resources (Not done)" navigationOption={'Resources'} navigateFunction={navigation.navigate}/>
        </View>
    </View>

  );
}

VisitorScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        width:'75%',
        paddingTop:5,
    }

});
