import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import users from "../assets/users"
import Post from '../src/components/Post';
const ProfileScreen = ({ navigation, route }) => {

  const { id } = route.params;

  const user = users.find((u) => u.id === id)
  return (
    <View>
      <ImageBackground style={styles.coverImage} source={{ uri: user?.coverImage }}>
        <View style={styles.overlay} />
        <Text style={styles.text}>{user?.name} @{user?.handle}</Text>
        <Text style={styles.text} onPress={() => navigation.goBack()}>Go Back</Text>
      </ImageBackground>

      {/* Posts */}
      <FlatList
        data={user?.posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator
      />
    </View>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 22,
  },
  coverImage: {
    height: 200,
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    ...StyleSheet.absoluteFillObject,
  }

})