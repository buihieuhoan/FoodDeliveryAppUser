import React, {useState,useContext,useEffect,} from 'react';
import auth from '@react-native-firebase/auth'

import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity,
  AppState
} from 'react-native';


import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,

  } from '@react-navigation/drawer';

import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { Avatar, 
    Button 
} from '@rneui/themed';

import {colors} from '../global/styles'
import { SignInContext } from '../contexts/authContext';




export default function DrawerContent(props) {
    

    const {dispatchSignedIn} = useContext(SignInContext)

    async function signOut(){
       
        try{
            auth()
            .signOut()
            .then(
                ()=>{console.log("USER SUCCESSFULLY SIGNED OUT")
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            })
    
        }catch(error){
            Alert.alert(error.code)
        }
    }
    


    return (
        <View style={styles.container} >
            <DrawerContentScrollView {...props}>
            <View style={{backgroundColor:colors.buttons,}} >          
                <View style={{flexDirection:'row', alignItems:'center', 
                         paddingLeft:20, paddingVertical:10}} >
                    <Avatar  
                        rounded
                        avatarStyle ={styles.avatar}
                        size={75}
                        source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png'}}
                    />

                    <View style={{marginLeft:10}} >
                        <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }} > Bui Hieu Hoan </Text>
                        <Text style ={{color:colors.cardbackground,fontSize:14}} > buihieuhoan@gmail.com </Text>
                    </View>

                </View>

                <View style={{flexDirection:'row', justifyContent:"space-evenly",paddingBottom:5}} >

                    <View style={{flexDirection:'row', marginTop:0}} >
                        <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }} >
                            <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }} > 1 </Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}} >My Favorites</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginTop:0}} >
                        <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }} >
                            <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }} > 0 </Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}} >Shopping Cart</Text>
                        </View>
                    </View>

                </View>
            </View>



            <DrawerItemList {...props} />

            <DrawerItem
                label= 'Payment'
                icon = {({color,size})=>(
                    <Icon
                        type='material-community'
                        name='credit-card'
                        color={color}
                        size={size}
                    />
                )}
            />


            <DrawerItem
                label= 'Promotions'
                icon = {({color,size})=>(
                    <Icon
                        type='material-community'
                        name='loyalty'
                        color={color}
                        size={size}
                    />
                )}
            />



            <DrawerItem
                label= 'Settings'
                icon = {({color,size})=>(
                    <Icon
                        type='material-community'
                        name='settings'
                        color={color}
                        size={size}
                    />
                )}
            />



            <DrawerItem
                label= 'Help'
                icon = {({color,size})=>(
                    <Icon
                        type='material-community'
                        name='help'
                        color={color}
                        size={size}
                    />
                )}
            />


            


            <View style={{borderTopWidth:1,borderTopColor:colors.grey5}} >
                <Text style={styles.preferences} > Preferences </Text>

                <View style={styles.switchText} >
                    <Text style={styles.darkthemeText} > Dark Theme </Text>
                    <View style={{paddingRight:10}} >
                        <Switch 
                            trackColor = {{false: "#767577",true : "#81b0ff"}}
                            thumbColor = "#f4f3f4"
                        />
                    </View>
                </View>

            </View>




            </DrawerContentScrollView>

            
                <DrawerItem 
                    label = "Sign Out"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "logout"
                            color ={color}
                            size ={size}
                            onPress ={()=>{signOut()}} 
                        />
                    )}
                />
            
        </View>
    )
}






const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    avatar:{
        borderWidth:4,
        borderColor:colors.pagebackground,
    },

    preferences:{
        fontSize: 16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20,
    },
    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize: 16,
        color:colors.grey2,
         paddingTop:10,
         paddingLeft:0,
         fontWeight:"bold"
    }
})