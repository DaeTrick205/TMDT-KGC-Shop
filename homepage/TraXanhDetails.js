import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TraXanhDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Trà xanh không độ là một thức uống giải khát tuyệt vời với hương vị tươi mát từ trà xanh tự nhiên.
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
