import React from 'react'
import { StyleSheet, Text, View,ImageBackground,StatusBar,TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors';

const OnBoardScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
           <ImageBackground 
           style={{flex:1}}
           source={require('../assets/onboardImage.jpg')}
           >
            <View style={styles.details}>
                <Text style={styles.title}>Discover</Text>
                <Text style={[styles.title,{fontSize:30}]}>World with us</Text>
                <Text style={styles.subtitle}>Let’s meet my new exploration work. This time I have come up with a Travel App UI Exploration</Text>
            <TouchableOpacity style={styles.btn}
            activeOpacity={0.8}
            onPress={()=>navigation.navigate("Home")}
            >
                <Text style={{fontWeight:'bold'}}>Get Started</Text>
            </TouchableOpacity>
            </View>
           </ImageBackground>
        </View>
    )
}

export default OnBoardScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignContent:'center'
        
    },
    details:{
        height: '40%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal:40,
    },
    title:{
        fontSize:35,
        color: COLORS.white,
        fontWeight:'bold',
    },
    subtitle:{
        color: COLORS.white ,
        lineHeight:25,
        marginTop:25,
    },
    btn:{
        height: 50,
        width: 120,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        marginTop:20,
    },
    
})
