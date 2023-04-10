import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.postImage} src={post.postImage} />
      <Text style={{ color: "black" }}>{post.caption}</Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postImage: {
        width: 200,
        height: 200,
        borderRadius: 5,
        borderColor: "#ffffff",
        borderWidth: 1,
        marginRight: 10
    }
})