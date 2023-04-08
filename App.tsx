import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.text}>OnlyFollower</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f4f4",
  },
  text: {
    color: "grey",
    fontSize: 50,
    fontWeight: "500",
    fontStyle: "italic",
    textDecorationLine: "underline",
  }
})