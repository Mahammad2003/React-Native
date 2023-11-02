import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,} from "react-native";

function App(){
  return(
    <SafeAreaView style={styles.area}>
     <ScrollView  style={{flex:1}}>
       <View style={styles.header}>
        <Image source={require('./assets/icons/Menu.png')}/>
       <View style={{flexDirection:'row',alignItems:'center'}}>
         <Image source={require('./assets/icons/Search.png')} style={{marginRight:24}}/>
       <Image source={require('./assets/icons/Shopping.png')}/>
       </View>
       </View>
       <View style={styles.topics}>
        <Text style={styles.topicsText}>DELICIOUS FOOD</Text>
        <Text style={styles.topicsText2}>AT YOUR DOOR STEPS</Text>
       </View>
        <View style={styles.icon}>
         <Image source={require('./assets/icons/Allfood.png')} style={{borderWidth:5, marginTop:47, marginLeft:20}}/>
         <Image source={require('./assets/icons/Rice.png')} style={{marginTop:47}}/>
         <Image source={require('./assets/icons/fast.png/')} style={{marginTop:47}}/>
         <Image source={require('./assets/icons/Drinks.png')} style={{marginTop:47, marginLeft:47}}/>
        </View>
         <View style={styles.image}>
          <Image source={require('./assets/images/Rice.png')}/>
          <Image style={{marginLeft:20}} source={require('./assets/images/Zinger.png')}/>
         </View>
        <View style={styles.Text}>
         <Text style={styles.Text1}>Popular</Text>
         <Text style={styles.Text2}>Now</Text>
        </View>
        <View style={styles.footer}>
          <Image style={{marginHorizontal:8,marginVertical:5}} source={require('./assets/images/Rectangle.png')}/>
          <View style={styles.footerText}>
          <Text style={styles.footerText1}>Chicken Manchurian</Text>
          <Text>Chinese Cuisine</Text>
          <View style={styles.footicon1}>
          <Text style={styles.footText2}>$110.50</Text>
          <Image style={styles.footicon} source={require('./assets/icons/Vector.png')}/>
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default App
 
const styles = StyleSheet.create({
  area:{
    flex:1
  },
  header:{
    flexDirection:'row',
    margin:30,
    marginLeft:20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topics:{
      marginTop:10,
      marginLeft:26,
  },
  topicsText:{
    fontSize: 32,
    color:'black',
    fontWeight:'bold'
  },
  topicsText2:{
    fontSize:20,
    color:'#333333',
    fontWeight:'500' 
  },
  icon:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:10,
    margin:10
  },
  image:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
    borderRadius:24,
    marginLeft:3,
  },
  Text1:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    marginRight:10
  },
  Text2:{
    fontSize:25
  },
  Text:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:18,
    marginTop:27
  },
  footer:{
    marginTop:27,
    display: "flex",
    flexDirection:'row',
    marginHorizontal:17,
    borderWidth:3,
    borderColor:'black',
    borderRadius:12
  },
  footerText:{
    marginLeft:16
  },
  footerText1:{
    fontSize:18,
    color:'black',
    fontWeight:'bold'
  },
  footText2:{
    marginTop:14,
    fontSize:20,
    color:'black',
    fontWeight:'600'
  },
  footicon:{
    backgroundColor:'#4E5156',
    borderRadius:8,
    padding:15,
    marginLeft:118,
    marginBottom:24
  },
  footicon1:{
    flexDirection:'row'
  }
})