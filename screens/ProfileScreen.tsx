import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import users from "../assets/users"
import Post from '../src/components/Post';

import ProfileHeader from '../src/components/ProfileHeader';

const ProfileScreen = ({ navigation, route }) => {

  const { id } = route.params;

  const user = users.find((u) => u.id === id)

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>

      {/* Posts */}
      <FlatList
        data={user?.posts}
        renderItem={({ item }) => <Post post={item} user={user} />}
        ListHeaderComponent={() => (
          <ProfileHeader
            id={id}
            navigation={navigation}
            route={route}
          />
        )}
      />
    </View>

  )
}

// Adding icons

export default ProfileScreen

const styles = StyleSheet.create({

})