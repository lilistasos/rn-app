import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import coffeeImg from "@/assets/images/cafe.jpg"
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground
      source={coffeeImg}
      resizeMode='cover'
      style={styles.image}
      >
      <Text style = {styles.title}>Coffee Shop</Text>
      <Link href="/explore" style={styles.link}>Explore</Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 120,
  }
})