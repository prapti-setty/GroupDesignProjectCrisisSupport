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
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Switch
} from 'react-native-clean-form';


const onSubmit = (values, dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(values.toJS())
      resolve()
    }, 1500)
  })
}

const countryOptions = [
  {label: 'Denmark', value: 'DK'},
  {label: 'Germany', value: 'DE'},
  {label: 'United State', value: 'US'}
]

export default function ComplaintForm({ navigation }) {
  return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Shipping details" last>
            <FormGroup>
              <Label>Address</Label>
              <Input placeholder="Hejrev ej 33" />
            </FormGroup>
            <FormGroup>
              <Label>City</Label>
              <Input placeholder="Copenhagen" />
            </FormGroup>
            <FormGroup>
              <Label>ZIP Code</Label>
              <Input placeholder="2400" />
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Select
                  name="country"
                  label="Country"
                  options={countryOptions}
                  placeholder="Denmark"
              />
            </FormGroup>
            <FormGroup border={false}>
              <Label>Save my details</Label>
              <Switch />
            </FormGroup>
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right">Save</Button>
        </ActionsContainer>
      </Form>
  );
}
