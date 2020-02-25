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
} from 'react-native';
import { MonoText, LightFontText, CondensedFontText, PinEntry, NavigationButton } from '_atoms';

export default function OpeningScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/trocaire.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
        </View>

        <View style={styles.rectangularButton}>
          <NavigationButton title="Trocaire Staff And Partners" navigationOption={'Admin'} navigateFunction={navigation.navigate}/>
        </View>
        <View style={styles.rectangularButton}>
          <NavigationButton title="Community Help and Feedback" navigationOption={'Visitor'} navigateFunction={navigation.navigate}/>
        </View>

      <View style={styles.bottomBarContainer}>
        <Text style={styles.bottomBarInfoText}>
          This is a bar that constantly stays at the bottom!
        </Text>
      </View>
    </View>
  );
}

OpeningScreen.navigationOptions = {
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
        Development mode is enabled. {learnMoreButton}
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
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
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
  welcomeImage: {
    width: '100%',
    height: '45%',
    resizeMode: 'contain',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  openingScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  bottomBarContainer: {
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
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  bottomBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
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
    color: '#2e78b7',
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
});
