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
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { MonoText, PinEntry } from '_atoms';

export default function FormTest() {
  const [[value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13], onChangeText] = React.useState('');
  state = {
      tableHead: ['','Question','Yes/No' ],
      widthArr: [20,400, 60]
    }

    const tableData = [
	['1.','Have you or any other agency carried out a rapid needs assessment to determine the information needs for the particular emergency?', <TextInput onChangeText={text => onChangeText(text)} value1={value1}/>],
	['2.','Are you and your partner organisations the best actors to deliver this intervention, and are you sure that no other actor, such as local government, has the capacity to deliver such an intervention or is better placed to do so?',<TextInput onChangeText={text => onChangeText(text)} value2={value2}/>],
	['3.','Do you or partner organisations have previous experience working in the local context?',<TextInput onChangeText={text => onChangeText(text)} value3={value3}/>],
	['4.','Do you or partner organisations have previous experience implementing information kiosks or similar information interventions (such as complaint handling and feedback mechanisms)?',<TextInput onChangeText={text => onChangeText(text)} value4={value4}/>],
	['5.','Do you or partner organisations have a proven record of strong co-ordination and communication skills that is recognised by other stakeholders?', <TextInput onChangeText={text => onChangeText(text)} value5={value5}/>],
	['6.','Do you or partner organisations have a pre-existing MOU with government co-ordination agencies and/or referral agencies for implementing information interventions during emergencies?', <TextInput onChangeText={text => onChangeText(text)} value6={value6}/>],
	['7.','Do you or partner organisations form part of a communications or information pillar/cluster group/platform?', <TextInput onChangeText={text => onChangeText(text)} value7={value7}/>],
	['8.','Have you or partner organisations engaged other actors, including government, international aid agencies, and local civil society organisations, to learn their opinions regarding the delivery of the information kiosk model?', <TextInput onChangeText={text => onChangeText(text)} value8={value8}/>],
	['9.','Have these actors expressed their approval of your organisation/partners to implement the information kiosk moel?', <TextInput onChangeText={text => onChangeText(text)} value9={value9}/>],
	['10.','Do you or your partner organisations have access to the contact information of humanitarian actors linked to the response?', <TextInput onChangeText={text => onChangeText(text)} value10={value10}/>],
	['11.','Are your staff and partners available for training, as well as the development, implementation, and management of the kiosks, or will you be able to recruit a team in a timely manner?', <TextInput onChangeText={text => onChangeText(text)} value11={value11}/>],
	['12.','Do you have adequate funding to support the staffing, equipment, and material costs of such an intervention over the course of the anticipated implementation period?', <TextInput onChangeText={text => onChangeText(text)} value12={value12}/>],
	['13.','Do you have staff in place to oversee, monitor and support improvements to the information kiosk model throughout the intervention?', <TextInput onChangeText={text => onChangeText(text)} value13={value13}/>],];
  return (
 <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
		 <Button
          title="Submit"
          onPress={() => Alert.alert("create JSON file or something")}
        />
      </View>
  );
}

FormTest.navigationOptions = {
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
  FormTestFilename: {
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
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 90  },
  text: { textAlign: 'center' }
});
