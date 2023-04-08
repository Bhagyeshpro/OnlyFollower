import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import users from "../assets/users"
import UserCard from '../src/components/UserCard'

const HomeScreen = () => {
  return (
    <View style={styles.app}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
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