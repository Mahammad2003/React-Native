import React from "react";
import { Image,SafeAreaView,ScrollView,StyleSheet,Text,View,TouchableOpacity} from "react-native";

export function Details(){
    return(
        <SafeAreaView style={styles.area}>
          <ScrollView style={{flex:1}}>
            <View style={styles.topic}>
             <Text style={styles.enjoy}>ENJOY FRIED RICE-THE BEST MEAL</Text>
            </View>
            <View style={styles.headers}>
             <View >
              <Image source={require('./assets/images/Fried.png')}></Image>
             </View>
             <View style={styles.group}>
              <Image source={require('./assets/icons/Group.png')}></Image>
             </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    area:{
        flex:1
    },
    topic:{
        marginTop:110,
        marginLeft:18
    },
    enjoy:{
        fontSize:50,
        color: '#333333',
        fontWeight:'800',
        fontFamily:'SofiaPro-Bold'
    },
    headers:{
        flexDirection:'row'
    },
    group:{
        marginRight:30 
    },
})