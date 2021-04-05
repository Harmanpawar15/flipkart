import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import backBtn from '../Images/backBtn.png';
import smallsearch from '../Images/smallsearch.png';
import cart from '../Images/cart.png';
import heart from '../Images/heart.png';
import microphn from '../Images/microphn.png';
const Header = ({navigation, routes}) => {
  return (
    <View style={styles.container}>
      <Image source={backBtn} style={{tintColor: 'white'}} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
          marginLeft: -60,
        }}>
        Shoes
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={smallsearch}
          style={{tintColor: 'white', marginHorizontal: 10}}
        />
        <Image source={microphn} style={{marginHorizontal: 5}} />
        <Image
          source={heart}
          style={{height: 25, width: 25, marginHorizontal: 5}}
        />
        <Image
          source={cart}
          style={{
            tintColor: 'white',
            height: 25,
            width: 25,
            marginHorizontal: 5,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#047BD5',
  },
});
export default Header;
