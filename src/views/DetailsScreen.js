import React,{useState} from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, 
    Text, TouchableOpacity, View } 
from 'react-native'
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetailsScreen({navigation,route}) {
    const [isActive, setisActive] = useState(true)
    const place = route.params
    return (
       <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
           <StatusBar />
           <ImageBackground style={{flex:0.7}} source={place.image}>
              <TouchableOpacity style={styles.header} onPress={()=>navigation.goBack()}>
                <Icon name="arrow-back-ios" size={28} color={COLORS.white}   />
              </TouchableOpacity>
                <View style={styles.ImageDetails}>
                    <Text style={{width:"70%",
                    fontSize:30,fontWeight:'bold',
                    color:COLORS.white,
                    marginBottom:20
                    }}>{place.name}</Text>
                    <View style={{flexDirection:'row'}}>
                      <Icon name="star" size={30} color={COLORS.orange}  />
                     <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:20}}>5.0</Text>
                    </View>
                </View>
           </ImageBackground>
           <View style={styles.detailsContainer}>
                    <TouchableOpacity 
                    activeOpacity={0.6}
                    style={styles.iconContainer}
                    onPress={()=>setisActive(!isActive)}
                    >
                        <Icon name="favorite" size={30} color={isActive ? COLORS.red : COLORS.dark}  />
                    </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Icon name="place" size={28} color={COLORS.primary}  />
                    <Text style={{marginLeft:5,fontSize:20,fontWeight:'bold',color:COLORS.primary}}>{place.location}</Text>
                </View>
                <Text style={{marginTop:20,fontWeight:'bold',fontSize:20}}>About the Trip</Text>
                <Text style={{marginTop:20,lineHeight:22,}}>{place.details}</Text>
           </View>
           <View style={styles.footer}>
               <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:COLORS.white}}>
                    $100
                    </Text>
                    <Text style={{fontSize:12,fontWeight:'bold',color:COLORS.white,marginLeft:2}}>
                    /PerDay
                    </Text>
               </View>
               <TouchableOpacity style={styles.bookNowBtn} activeOpacity={0.6}>
               <Text
                    style={{color: COLORS.primary, fontSize: 16,
                    fontWeight: 'bold'}}>
                    Book Now
                </Text>
               </TouchableOpacity>
           </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bookNowBtn:{
        height: 50,
        width: 150,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer:{
        flexDirection:'row',
        backgroundColor:COLORS.primary,
        height: 70,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        borderRadius:10,
    },
    iconContainer:{
        height: 60,
        width: 60,
        position: 'absolute',
        top: -30,
        backgroundColor:COLORS.white,
        right: 20,
        borderRadius:30,
        elevation:10,
        justifyContent:'center',
        alignItems:'center'
    }    ,
    header:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    ImageDetails:{
        padding: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 30,
    },detailsContainer:{
        top: -30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:40,
        paddingHorizontal:20,
        backgroundColor:COLORS.white,
        flex: 0.3,
        
    }
})
