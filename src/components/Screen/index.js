import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Screen extends Component {

  render = () => {
    return (
      <View style={styles.container}>
        <Text
          numberOfLines={1}
          style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}
