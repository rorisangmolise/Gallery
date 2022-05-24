import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Display({image}) {
  return (
  
      <View style={styles.Picture}>
       <Image style={styles.Picture} source = {image} />
    </View>
    
  )
}

const styles = StyleSheet.create({
  Picture: {
    height: "100%",
    width: "100%",
    borderRadius: 6,
   }
})