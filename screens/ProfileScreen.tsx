import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import users from "../assets/users"

const ProfileScreen = ({id}) => {
  return (
    <View>
      <Text style={styles.text}>{id}</Text>
      {/* <Text style={styles.text} onPress={() => goBack()}>Go Back</Text> */}
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 22,
    }
})