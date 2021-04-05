import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import sort from '../Images/sort.png';
import filter from '../Images/filter.png';
const Header2 = ({navigation, routes}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRightWidth: 0.6,
          borderColor: 'grey',
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
        }}>
        <Image source={sort} />
        <Text style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 6}}>
          Sort
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
        }}>
        <Image source={filter} />
        <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 6}}>
          Filter
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 4,
  },
});
export default Header2;
