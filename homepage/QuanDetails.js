import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuanDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Quần jeans chất lượng cao, thiết kế thời trang và thoải mái cho mọi hoạt động hàng ngày.
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
