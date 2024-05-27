import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderDetails = ({ order }) => {
  // Hàm tính tổng tiền của đơn hàng
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    order.forEach(product => {
      // Loại bỏ ký tự '$' và thay thế bằng "9.000vnđ", sau đó chuyển đổi giá thành số
      const price = parseFloat(product.price.replace('$', '9.000 vnđ').replace(/[^\d.-]/g, ''));
      totalPrice += price;
    });
    return totalPrice.toLocaleString('en-US', { minimumFractionDigits: 3 }); // Sử dụng toLocaleString để đảm bảo tổng tiền luôn có đủ hai chữ số sau dấu thập phân
  };

  // Hàm tính tổng số lượng của từng sản phẩm
  const calculateTotalQuantity = () => {
    let totalQuantity = {};
    order.forEach(product => {
      if (totalQuantity[product.name]) {
        totalQuantity[product.name] += 1;
      } else {
        totalQuantity[product.name] = 1;
      }
    });
    return totalQuantity;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết đơn hàng:</Text>
      {Object.keys(calculateTotalQuantity()).map((productName, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.productName}>{productName} x{calculateTotalQuantity()[productName]}</Text>
          {/* Định dạng lại giá của sản phẩm */}
          <Text style={styles.productPrice}>
            {order.find(product => product.name === productName).price.replace('$', '9.000 vnđ')}
          </Text>
        </View>
      ))}
      {/* Hiển thị tổng tiền */}
      <Text style={styles.totalPrice}>Tổng tiền: {calculateTotalPrice()} vnđ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default OrderDetails;
