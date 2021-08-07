import React,{useState} from 'react'
import { StyleSheet, Dimensions,Text, View ,SafeAreaView, 
    StatusBar, ScrollView, TextInput, ImageBackground, FlatList,
      TouchableOpacity} from 'react-native'
// colors & icons and Data
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from '../consts/place'

//
const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {
    const [isActive, setisActive] = useState(false)

    const categoryIcons = [
        <Icon name="flight" size={25} color= {isActive ? COLORS.secondary : COLORS.dark }  />,
        <Icon name="beach-access" size={25} color={isActive ? COLORS.secondary : COLORS.dark }  />,
        <Icon name="near-me" size={25} color={isActive ? COLORS.secondary : COLORS.dark }  />,
        <Icon name="place" size={25} color={isActive ? COLORS.secondary : COLORS.dark }   />,
      ];

    const ListCatagories = ()=>{
        return (
            <View style={styles.catagoryContainer}>
              {categoryIcons.map((icon, index) => (
            
                <TouchableOpacity key={index} style={[styles.iconContainer]}  >
                  {icon}
                </TouchableOpacity>
              ))}
            </View>
          );
    }


// card Place 

    const Card = ({place})=>{
        return (
       <TouchableOpacity onPress={()=>{navigation.navigate("Details",place)}}>
            <ImageBackground style={styles.cardImg} source={place.image}>
            <Text style={{color:COLORS.white,fontSize:20,fontWeight:'bold',marginTop:10}}>{place.name}</Text>
            <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',alignItems:'flex-end'}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="place"  size={20} color={COLORS.white} />
                    <Text style={{marginLeft:5,color:COLORS.white}}>{place.location}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Icon name="star"  size={20} color={COLORS.white} />
                    <Text style={{marginLeft:5,color:COLORS.white}}>5.0</Text>
                </View>
            </View>
        </ImageBackground>
       </TouchableOpacity>
        )
    }
// Recommend Place 
const Recommended = ({place})=>{
    return(
        <TouchableOpacity>
            <ImageBackground style={styles.RmCardImg} source={place.image}>
             <Text style={{color:COLORS.white,fontSize:20,fontWeight:'bold',marginTop:10}}>{place.name}</Text>
                <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end'}}>
                    <View style={{width:'100%',flexDirection:'row', marginTop:10}}>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="place"  size={22} color={COLORS.white} />
                            <Text style={{marginLeft:5,color:COLORS.white}}>{place.location}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="star"  size={20} color={COLORS.white} />
                            <Text style={{marginLeft:5,color:COLORS.white}}>5.0</Text>
                        </View>
                    </View>
                    <Text style={{color: COLORS.white, fontSize: 13}}>
                        {place.details}
                    </Text>
                </View>
        </ImageBackground>
       </TouchableOpacity>
    )
}






    //
    return (
        <SafeAreaView>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />
            <View style={styles.header}>
                <Icon name="sort" size={28} color={COLORS.white} />
                <Icon name="notifications" size={28} color={COLORS.white} />
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={{backgroundColor:COLORS.primary,height:120,paddingHorizontal:20}}>
                    <View>
                    <Text style={styles.headerTitle}>Explore The</Text>
                    <Text style={styles.headerTitle}>beautiful Places</Text>
                        <View style={styles.inputContainer}>
                            <Icon name="search" size={28} color={COLORS.dark} />
                            <TextInput placeholder="Search Places" style={{color:COLORS.grey}} />
                        </View>
                    </View>
                </View>
                <ListCatagories />
                <Text style={styles.sectionTitle}>Place</Text>

                <View>
                    <FlatList 
                     contentContainerStyle={{paddingLeft: 20}}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     data={places}
                     renderItem={({item}) => <Card place={item} />}
                    />
                    <Text style={styles.sectionTitle}>Recommended</Text>
               
                    <FlatList 
                    snapToInterval={width - 20}
                     contentContainerStyle={{paddingLeft: 20,paddingBottom:20}}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     data={places}
                     renderItem={({item}) => <Recommended place={item} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.white
    },
    header:{
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.primary
    },
    headerTitle:{
        color: COLORS.white,
        fontWeight:'bold',
        fontSize:23,
    },
    inputContainer:{
        height:60,
        width: '100%',
        backgroundColor:COLORS.white,
        borderRadius:10,
        position: 'absolute',
        top: 90,
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        zIndex:1
    },
    catagoryContainer:{
        marginTop:60,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    iconContainer:{
            height: 60,
            width: 60,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            backgroundColor:COLORS.primary
    },
    sectionTitle:{
        marginHorizontal:20,
        marginVertical:20,
        fontWeight:'bold',
        fontSize:20,
    },
    cardImg:{
        height: 220,
        width: width/2,
        marginRight:20,
        padding: 10,
        overflow:'hidden',
        borderRadius:10,
    },
    RmCardImg:{
        width: width-40,
        height: 200,
        padding: 10,
        overflow:'hidden',
        borderRadius:10,
        marginRight:20,
    }
})
