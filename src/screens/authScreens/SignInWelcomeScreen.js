import React, {useState, useRef} from 'react'

import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import {colors, parameters, title } from '../../global/styles'
import * as Animatable from 'react-native-animatable'

import Swiper from 'react-native-swiper'

import { Button, SocialIcon } from '@rneui/themed'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
export default function SignInWelcomeScreen({navigation}){
    return ( 
        <View style={{flex:1}} >

            <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:20}} >
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}} > DISCOVER RESTAURANTS </Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}} > IN YOUR AREA </Text>
            </View>


            <View style={{flex:4,justifyContent:'center'}} >
                
                <Swiper autoplay={true} >
                    <View style={styles.slide1} >
                        <Image 
                            source={{uri:"https://images.foody.vn/res/g117/1163852/prof/s640x400/foody-upload-api-foody-mobile-co-d9ccd215-230308161210.jpeg"}}
                            style={{height:'100%', width:'100%'}}
                        />
                    </View>

                    <View style={styles.slide2} >
                        <Image 
                            source={{uri:"https://images.foody.vn/res/g112/1114707/prof/s640x400/foody-upload-api-foody-mobile-un-de857048-211105141117.jpeg"}}
                            style={{height:'100%', width:'100%'}}
                        />
                    </View>


                    <View style={styles.slide3} >
                        <Image 
                            source={{uri:"https://images.foody.vn/res/g106/1052967/prof/s640x400/foody-upload-api-foody-mobile-beauty-upload-api-im-201027144648.jpeg"}}
                            style={{height:'100%', width:'100%'}}
                        />
                    </View>

                    <View style={styles.slide3} >
                        <Image 
                            source={{uri:"https://images.foody.vn/res/g113/1123512/prof/s280x175/foody-upload-api-foody-mobile-ti-357cb35b-230616110024.jpeg"}}
                            style={{height:'100%', width:'100%'}}
                        />
                    </View>

                </Swiper>
            </View>


            <View style={{flex:4, justifyContent:'flex-end', marginBottom:20}} >

                <View style={{marginHorizontal: 20, marginTop: 30}} >
                    <Button 
                        title='SIGN IN'
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            if (navigation) {
                                navigation.navigate("SignInScreen")
                            }
                        }}
                    />
                </View>

                <View style={{marginHorizontal: 20,marginTop:25}} >
                    <Button
                        title='Create an account'
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={() => {
                            if (navigation) {
                                navigation.navigate("SignUpScreen")
                            }
                        }}
                    />
                </View>
            </View>

        </View>
     );
}
 
const styles = StyleSheet.create({

    slide1: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#9dd6eb'
    },
    slide2: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#97cae5'
    },
    slide3: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#92bbd9'
    },
    createButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        borderColor:colors.buttons,
    },

    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3
    }
})
