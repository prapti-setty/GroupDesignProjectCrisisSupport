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
import { MonoText, PinEntry, NavigationButton } from '_atoms';
import { Colors } from '_constants';

export default function AdminPin({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.welcomeContainer} onPress={() => navigation.navigate('Opening')}>
       <Image
         source={
          __DEV__
          ? require('../assets/images/trocaire.png')
          : require('../assets/images/robot-prod.png')
        }
        style={styles.welcomeImage}
      />
     </TouchableOpacity>

        <View style={styles.notice}>
            <Text style={styles.lockedScreenText}>
                Area Locked. Please enter Admin PIN to access.
            </Text>
        </View>

        <PinEntry
            placeholder={'Enter PIN'}
            hideText={true}
            pinCode={'123'}
            submitFunction={'pin'}
            navigationOption={'Admin'}
            navigateFunction={navigation.navigate}
            keyboardType={'numeric'}
        />

      <View style={styles.bottomBarContainer}>
        <Text style={styles.bottomBarInfoText}>
          This is a bar that constantly stays at the bottom!
        </Text>
      </View>
    </View>
  );
}

AdminPin.navigationOptions = {
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
    backgroundColor: 'white',
  },
  developmentModeText: {
    marginBottom: 20,
    color: Colors.developmentModeTextColor,
    fontSize: 14,
    lineHeight: 19,
    alignItems: 'center',
    textAlign: 'center',
  },
  notice: {
    marginBottom: 20,
    alignItems: 'center',
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
    color: 'red',
  },
  lockedScreenText: {
    color: 'red',
    fontFamily: 'Univers-Light-Normal'
  },
  codeHighlightContainer: {
    backgroundColor: Colors.codeHighlightContainerColor,
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
    backgroundColor: Colors.bottomBarContainerColor,
    paddingVertical: 20,
  },
  bottomBarInfoText: {
    fontSize: 17,
    color: Colors.infoTextColor,
    textAlign: 'center',
    fontFamily: 'Univers-Light-Normal'
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
