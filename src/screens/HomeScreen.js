import React from "react";

import {View, Text, StyleSheet} from 'react-native'
import { Button, SocialIcon } from '@rneui/themed'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import HomeHeader from "../components/HomeHeader";
export default function HomeScreen() {

    return (
        <View style={styles.container} >
            <HomeHeader />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
      
    }
})