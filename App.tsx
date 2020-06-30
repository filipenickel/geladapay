import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={()=>{}} ><Text style={styles.text}>GeladaPay</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'blue',
    height: 100,
    width:400,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    color:'white',
    fontSize:35,
    fontWeight: '700'
  }
});
