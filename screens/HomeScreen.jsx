import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Maps"
        onPress={() => navigation.navigate('Locations')}
      />


<Button
        title="Go to Diabatic"
        onPress={() => navigation.navigate('Diabatic')}
      />



<Button
        title="Go to Retinopathy"
        onPress={() => navigation.navigate('Locations')}
      />


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
});
