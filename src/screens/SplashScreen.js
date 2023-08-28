import { View, Text, Animated, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreen({ navigation }) {
  const logoScale = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(logoScale, {     
      toValue: 2,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      navigation.replace('Home');
    });
  }, []);
  const animatedStyle = {
    transform: [{ 'scale': logoScale }],
  };
  return (
    <View style={styles.container}>
      
      <Animated.Image
        source={require('../assets/1.png')} 
        style={[styles.logo, animatedStyle]}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
