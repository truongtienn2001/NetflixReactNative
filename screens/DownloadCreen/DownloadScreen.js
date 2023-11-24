import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const DownloadScreen = ({navigator}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF', textAlign:'center',fontSize: 15,fontWeight: 400,lineHeight:30, marginTop: 30, right: 100}}>Smart Downloads</Text>
      <Text style={{color: '#FFF', fontSize: 20, fontWeight: 700, marginTop:30,marginRight: 80 }}>Introducing Downloads For You</Text>
      <Text style={{color: '#FFF',fontSize: 11,fontWeight: 400,lineHeight:18, marginTop: 10,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus <br/>bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, <br/>id ut ipsum aliquam enim non posuere pulvinar diam.</Text>
      <Image style={{width: 177, height: 177, marginTop: 15}} source={require("../../images/circle.png")}/>
      <Pressable style={{width: 353,height: 41, backgroundColor: '#0071EB', borderRadius: 2, marginTop: 15}}>
        <Text style={{color:'#FFF',textAlign: 'center', fontSize: 14,fontWeight: 400, marginTop: 10}}>SETUP</Text>
      </Pressable>

      <Pressable style={{width: 239,height: 33, backgroundColor: '#424242', marginTop: 25}}>
        <Text style={{color:'#FFF',textAlign: 'center', fontSize: 17,fontWeight: 700, marginTop: 5}}>Find Something to Download</Text>
      </Pressable>

  
  </View>
  )
}
export default DownloadScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor: "black"
  }
});
