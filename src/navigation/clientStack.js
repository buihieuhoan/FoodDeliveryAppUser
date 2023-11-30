import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from './../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';



const ClientSearch = createStackNavigator()

export function ClientStack({navigation, route}) {

    useLayoutEffect(()=>{

        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName !== "RestaurantHomeScreen" || routeName !== "MenuProductScreen"){
            navigation.setOptions({tabBarVisible:true})
        }else{
            navigation.setOptions({tabBarVisible:false})
        }
        
    },[navigation,route])

    return (
    <ClientSearch.Navigator>

        <ClientSearch.Screen
            name='SearchScreen'
            component={SearchScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />

        <ClientSearch.Screen
            name='SearchResultScreen'
            component={SearchResultScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />


        <ClientSearch.Screen
            name='RestaurantHomeScreen'
            component={RestaurantHomeScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />

        <ClientSearch.Screen
            name='MenuProductScreen'
            component={MenuProductScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />

    </ClientSearch.Navigator>
  )
}

const styles = StyleSheet.create({

})
