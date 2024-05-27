import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StingDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Sting là một loại nước tăng lực phổ biến với hương vị dâu tây. Nó cung cấp năng lượng nhanh chóng và giúp bạn tỉnh táo tức thì.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});
