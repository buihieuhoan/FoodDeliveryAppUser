import React,{useEffect} from 'react'

import {View, Text, StyleSheet,StatusBar,} from 'react-native'
import  {SignInContextProvider}  from './src/contexts/authContext'
import {colors} from './src/global/styles'
import RootNavigator from './src/navigation/rootNavigation'
import {AppState} from 'react-native'






export default function App() {
  // useEffect(() => {
  //   const handleAppStateChange = (nextAppState) => {
  //     console.log('AppState changed to', nextAppState);
  //     // Thực hiện xử lý khi AppState thay đổi
  //   };

  //   const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

  //   return () => {
  //     appStateSubscription.remove();
  //   };
  // }, []);
  return (
    <SignInContextProvider>
      <View style = {styles.container}>
        <StatusBar 
          barStyle = "light-content"
          backgroundColor = {colors.statusbar}
        />
    
          <RootNavigator />
      
      </View>
    </SignInContextProvider> 
  )
}

const styles = StyleSheet.create({
  container: {flex: 1}
})
