import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
export default class ContentButtons extends Component {

  renderButton = (v) => (
    <TouchableOpacity style={styles.btn} onPress={() => this.props.onPress(v)}>
      <Text style={styles.textBtn}>{v}</Text>
    </TouchableOpacity>
  );

  renderRow = (v1, v2, v3, v4) => (
    <View style={styles.linear}>
      {this.renderButton(v1)}
      {this.renderButton(v2)}
      {this.renderButton(v3)}
      {this.renderButton(v4)}
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        {this.renderRow("1", "2", "3", "+")}
        {this.renderRow("4", "5", "6", "-")}
        {this.renderRow("7", "8", "9", "*")}
        {this.renderRow("0", "=", "C", "/")}
      </View>
    )
  }
}