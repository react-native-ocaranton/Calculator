import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import Screen from '../components/Screen';
import ContentButtons from '../components/ContentButtons';
import styles from './styles';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.number1 = '';
    this.number2 = '';
    this.operator = '';
    this.arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    this.arrayOperator = ["+", "-", "*", "/"];
  }

  getResult = () => {
    if (this.number1 !== '' && this.number2 !== '') {
      let resp = '';
      if (this.operator === '+') {
        resp = parseInt(this.number1) + parseInt(this.number2);
      }
      if (this.operator === '-') {
        resp = parseInt(this.number1) - parseInt(this.number2);
      }
      if (this.operator === '*') {
        resp = parseInt(this.number1) * parseInt(this.number2);
      }
      if (this.operator === '/') {
        if (this.number2 === "0") {
          this.showAlert();
          resp = this.number1;
        } else {
          resp = parseInt(this.number1) / parseInt(this.number2);
        }
      }
      this.number1 = resp;
      this.number2 = '';
      this.operator = '';
      this.setState({ text: resp });
    }
  }

  assignNumbers = (v) => {
    if (this.operator === '') {
      this.number1 = this.number1 + v;
    } else {
      this.number2 = this.number2 + v;
    }
    this.setState({ text: this.state.text + v });
  };

  assignOperator = (v) => {
    if (this.operator === "") {
      if (this.number1 === "") {
        this.number1 = this.number1 + v;
      } else {
        this.operator = v;
      }
      this.setState({ text: this.state.text + v });
    }
  }

  cleanData = () => {
    this.number1 = '';
    this.number2 = '';
    this.operator = '';
    this.setState({ text: '' });
  }

  assign = (v) => {
    //validate if current value is an number.
    if (this.arrayNumbers.indexOf(v) !== -1) {
      this.assignNumbers(v);
    }
    else {
      if (this.arrayOperator.indexOf(v) !== -1) {
        this.assignOperator(v);
      } else {
        if (v === 'C') {
          this.cleanData();
        } else {
          this.getResult();
        }
      }
    }
  }

  showAlert = () => (
    Alert.alert(
      'Uppss!!!',
      'No se puede dividir por cero (0)',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  )
  render = () => (
    <View style={styles.container}>
      <Screen text={this.state.text} />
      <ContentButtons onPress={this.assign} />
    </View>
  );
}