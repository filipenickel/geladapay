import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Default: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>GeladaPay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Default;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 100,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  },
});
