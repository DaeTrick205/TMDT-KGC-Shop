import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AoDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Áo thun ngắn tay UT POP MART mang lại cảm giác thoải mái và phong cách thời trang hiện đại.
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
