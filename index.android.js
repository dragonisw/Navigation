import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from './App';

export default class Shop extends Component {
    render() {
    return (
    <View style={styles.container}>
    <Text style={styles.welcome}>
    Shop!
    </Text>
    <Text style={styles.introductions}>
        Choose from editor
        </Text>
      <Text style={styles.introductions}>
           Reload to refresh
            </Text>
            </View>
    );
  }
}

const styles = StyleSheet.create ({
container: {
flex: 1,
justifyContent:'center',
}})