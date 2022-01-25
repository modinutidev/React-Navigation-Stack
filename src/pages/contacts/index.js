import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contacts() {

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <Button 
        title='Home'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#2a2a2a',
    fontSize: 20
  }
});