// Trang người dùng
import React from 'react';
import { View, Text, Image } from 'react-native';

const UserProfile = ({ navigation }) => {
  // Dữ liệu người dùng (tạm thời bạn có thể truyền từ props)
  const user = {
    name: 'Nguyễn Văn Phước',
    image: require('../assets/user.png'),
    email: 'nguyenvanphuoc@example.com',
    birthYear: '2000',
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={user.image} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Năm sinh: {user.birthYear}</Text>
    </View>
  );
};

export default UserProfile;
