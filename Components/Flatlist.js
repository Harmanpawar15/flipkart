import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Body from './Body';
import heart from '../Images/heart.png'
import star from '../Images/star.png'
const FlatlistComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList numColumns={2} key={'g'}
        data={Body.data}
        keyExtractor={data => data.id.toString()}
        renderItem={({item}) => (
             
          <View  style={{flex:1 ,overflow:'hidden' ,borderLeftWidth:0.5 , borderBottomWidth:1 ,borderColor:'grey'}} >
                                          <View style={{flexDirection:'row' ,marginRight:30,justifyContent:'space-between'}}>
                                        <Text style={{padding:5 ,height:25 ,backgroundColor:'#afb5b5' ,color:'white'}}>AD</Text>
                                        <TouchableOpacity style={{borderRadius:16 ,borderWidth:1,elevation:6 ,backgroundColor:'white' ,marginLeft:110}}>
                                                  <Image source={heart} style={{height:30 ,width:30,tintColor:'grey' }}/>
                                        </TouchableOpacity>
                                        </View>
               <View style={{paddingHorizontal:6 ,overflow:'hidden' }}>                 
            <Image  source={{uri:item.Image}} style={{height:200 ,width:200 , resizeMode:'center' ,padding:8 }}/>
            <Text>{item.name}</Text>
            <Text style={{fontSize:12}}>{item.description}</Text>
            </View>
            <View style={{flexDirection:'row' ,padding:5 }}>
                      <Text>{item.price}</Text>
                      <Text style={{textDecorationLine:'line-through' ,color:'green' ,marginRight:5 ,marginLeft:5}}>{item.bdiscount}</Text>
                      </View>
                      <View style={{flexDirection:'row' ,padding:5 }}>
                                <View style={{flexDirection:'row' ,borderWidth:2 ,borderRadius:35,padding:2 ,backgroundColor:'green' }}>
                                <Text style={{marginLeft:5 , color:'white'}}>{item.rating}</Text>
                                 <Image source={star}  style={{height:20,width:20 ,tintColor:'white'}}/>
                                </View>
                                <Text style={{marginLeft:9}}>{item.trate}</Text>
                                </View>

          </View>
          
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1
, backgroundColor:'white'},
});
export default FlatlistComponent;
