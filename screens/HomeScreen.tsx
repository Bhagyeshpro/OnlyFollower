import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import users from "../assets/users"
import UserCard from "../src/components/UserCard"

const HomeScreen = ({ navigation: {navigate} }) => {
  return (
    <View style={styles.app}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard navigate={navigate} user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f2f4f4",
    padding: 10,
    marginBottom: 10
  },
  
})