import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable, TextInput,} from "react-native";


const MoreScreen = ({navigator}) => {
  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row', marginTop: 30}}>
        
        {/*    Header   */}
        <View>
          <Image style={{width: 73, height: 69, borderRadius: 9, marginRight: 3}} source={require("../../images/Emenaldo.png")}/>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 13, fontWeight:400}}>Emenaldo</Text>
        </View>
        <View>
          <Image style={{width: 73, height: 69, borderRadius: 9, marginRight: 3}} source={require("../../images/Onyeka.png")}/>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 13, fontWeight:400}}>Onyeka</Text>
        </View>
        <View>
          <Image style={{width: 73, height: 69, borderRadius: 9, marginRight: 3}} source={require("../../images/Thelma.png")}/>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 13, fontWeight:400}}>Thelma</Text>
        </View>
        <View>
          <Image style={{width: 73, height: 69, borderRadius: 9, marginRight: 3}} source={require("../../images/Kids.png")}/>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 13, fontWeight:400}}>Kids</Text>
        </View>
        <View>
          <Image style={{width: 73, height: 69, borderRadius: 9, marginRight: 3}} source={require("../../images/btnAdd.png")}/>
        </View>
      </View>

      {/*    Body    */}

      <View style={{flexDirection: 'row', marginTop: 30, }}>
        <Image style={{width: 20, height:20, marginRight: 10, marginTop:3}} source={require("../../images/bx_bxs-pencil.png")}/>
        <Text style={{color: 'rgba(255, 255, 255, 0.81)', fontSize: 16, fontWeight:500}}>Manage Profiles</Text>
      </View>

      {/*    Body -> TodoLink   */}
      <View style={{width: "100%", height: 330, backgroundColor: '#1A1A1A'}}>

        <View style={{flexDirection: 'row', marginTop: 20,marginLeft: 20,}}>
          <Image style={{width: 30, height: 30}} source={require("../../images/comment.png")}/>
          <Text style={{color: '#FFF',fontFamily: 'SF Pro Display', textAlign: 'center', fontSize: 20, fontWeight:700, marginLeft: 15}}>Tell friends about Netflix.</Text>
        </View>

        <View>
        <Text style={{color: '#FFF',fontSize: 13,fontWeight: 500,lineHeight:18, marginTop: 10,marginLeft: 20,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar diam.</Text>
        </View>

        <View>
        <Text style={{color: '#C4C4C4',fontSize: 12,fontWeight: 500,lineHeight:18, marginTop: 10,marginLeft: 20,textDecorationLine: "underline",}}>Terms & Conditions</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20,marginLeft: 20}}>
          <TextInput style={{width: 250, height: 50, backgroundColor: '#000', color: 'white'}} />
          <Pressable style={{width:100, height:50, borderRadius: 2, backgroundColor: '#FFF',marginLeft:10}}>
            <Text style={{color: '#000', fontFamily: 'SF Pro Display',textAlign: 'center', fontSize: 20, fontWeight:600, marginTop:10}}>Copy Link</Text>
          </Pressable>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20,marginLeft: 20}}>
          <Image style={{width: 50, height: 50,marginLeft:20}} source={require("../../images/logos_whatsapp.png")}/>
          <View style={{width: 1, height: 60  , backgroundColor:'#8C8787',marginLeft:20}}/>
          <Image style={{width: 50, height: 50,marginLeft:20}} source={require("../../images/logos_facebook.png")}/>
          <View style={{width: 1, height: 60  , backgroundColor:'#8C8787',marginLeft:20}}/>
          <Image style={{width: 50, height: 60,marginLeft:20}} source={require("../../images/Gmail-logo 1.png")}/>
          <View style={{width: 1, height: 60  , backgroundColor:'#8C8787',marginLeft:20}}/>
          <View style={{marginLeft: 20}}>
          <Image style={{width: 50, height: 35}} source={require("../../images/bx_bx-dots-vertical-rounded.png")}/>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 15, fontWeight:500}}>More</Text>
          
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop:20, marginLeft:40}}>
          <Image style={{width:40, height:40,}} source={require("../../images/check.png")}/>
          <Text style={{color: '#FFF', fontFamily: 'SF Pro Display',textAlign: 'center', fontSize: 21, fontWeight:500, marginLeft:10, marginTop:10  }}>My List</Text>
        </View>

        <View style={{width: "100%", height: 1  , backgroundColor:'#8C8787',marginTop:10}}/>
        
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 15, fontWeight:500,marginTop:15}}>App Settings</Text>
        <View style={{width: 1, height: 20  , backgroundColor:'#8C8787',marginLeft:20, marginTop:15}}/>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 15, fontWeight:500,marginTop:15,marginLeft:20}}>Account</Text>
        <View style={{width: 1, height: 20  , backgroundColor:'#8C8787',marginLeft:20, marginTop:15}}/>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 15, fontWeight:500,marginTop:15,marginLeft:20}}>Help</Text>
        <View style={{width: 1, height: 20  , backgroundColor:'#8C8787',marginLeft:20, marginTop:15}}/>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 15, fontWeight:500,marginTop:15,marginLeft:20}}>Sign Out</Text>
      </View>
      </View>
  );
}
export default MoreScreen;

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: "black"
  }
});
