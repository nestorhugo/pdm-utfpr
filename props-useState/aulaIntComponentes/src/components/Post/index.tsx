import { View, Text } from "react-native";
import React from "react";

interface PostProps {
  author: string;
  title: string;
  content: string;
  likes?: number;
}

export default function Post({ author, title, content, likes }: PostProps) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text>Author: {author}</Text>
      <Text>Title: {title}</Text>
      <Text>Content: {content}</Text>

      {likes && <Text>Likes: {likes}</Text>}
    </View>
  );
}
