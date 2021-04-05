import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import FlatlistComponent from './Components/Flatlist';
const App = ({navigation, routes}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Header2 />
      <FlatlistComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default App;
