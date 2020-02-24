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

export default function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <PinEntry
            placeholder={'Enter PIN'}
            hideText={true}
            pinCode={'123'}
            submitFunction={'pin'}
            navigationOption={'Links'}
            navigateFunction={navigation.navigate}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>

            </TouchableOpacity>
          </View>

          <View style={styles.rectangularButton}>
          <NavigationButton title="Forms (Broken)" navigationOption={'Forms'} navigateFunction={navigation.navigate}/>
        </View>
        <View style={styles.rectangularButton}>
          <NavigationButton title="Links" navigationOption={'Links'} navigateFunction={navigation.navigate}/>
        </View>

        <View style={styles.rectangularButton}>
          <NavigationButton title="Settings" navigationOption={'Settings'} navigateFunction={navigation.navigate}/>
        </View>

        <View style={styles.rectangularButton}>
          <NavigationButton title="Complaints (Not done)" navigationOption={'Complaints'} navigateFunction={navigation.navigate}/>
        </View>

        <View style={styles.rectangularButton}>
          <NavigationButton title="General Information (Not done)" navigationOption={'General_Info'} navigateFunction={navigation.navigate}/>
        </View>

        <View style={styles.rectangularButton}>
          <NavigationButton title="Resources (Not done)" navigationOption={'Resources'} navigateFunction={navigation.navigate}/>
        </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
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
    backgroundColor: 'white',
  },
  developmentModeText: {
    marginBottom: 20,
    color: Colors.developmentModeTextColor,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: Colors.codeHighlightTextColor,
  },
  codeHighlightContainer: {
    backgroundColor: Colors.codeHighlightContainerColor,
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: Colors.infoTextColor,
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: Colors.bottomBarContainerColor,
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: Colors.infoTextColor,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: Colors.linkTextColor,
  },
  rectangularButton: {
    paddingLeft: '40%',
    paddingRight: '40%',
    paddingTop: '.5%',
    paddingBottom: '.5%',
    alignContent: 'center',
  },
});
