import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const SalesApp = () => {
  const [newProduct, setNewProduct] = useState({
    barcode: '',
    productName: '',
    price: '',
    quantity: ''
  });

  const addProduct = () => {
    // Xử lý thêm sản phẩm vào cơ sở dữ liệu
    console.log('Thêm sản phẩm:', newProduct);
    // Sau khi thêm, reset trường nhập liệu
    setNewProduct({
      barcode: '',
      productName: '',
      price: '',
      quantity: ''
    });
  };

  const editProduct = () => {
    // Xử lý sửa thông tin sản phẩm trong cơ sở dữ liệu
    console.log('Sửa thông tin sản phẩm:', newProduct);
    // Sau khi sửa, reset trường nhập liệu
    setNewProduct({
      barcode: '',
      productName: '',
      price: '',
      quantity: ''
    });
  };

  const deleteProduct = () => {
    // Xử lý xóa sản phẩm khỏi cơ sở dữ liệu
    console.log('Xóa sản phẩm:', newProduct);
    // Sau khi xóa, reset trường nhập liệu
    setNewProduct({
      barcode: '',
      productName: '',
      price: '',
      quantity: ''
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales App</Text>
      <ScrollView style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Barcode"
          value={newProduct.barcode}
          onChangeText={text => setNewProduct({ ...newProduct, barcode: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={newProduct.productName}
          onChangeText={text => setNewProduct({ ...newProduct, productName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={newProduct.price}
          onChangeText={text => setNewProduct({ ...newProduct, price: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={newProduct.quantity}
          onChangeText={text => setNewProduct({ ...newProduct, quantity: text })}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={addProduct}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.editButton]} onPress={editProduct}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteProduct}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  formContainer: {
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  addButton: {
    backgroundColor: 'green'
  },
  editButton: {
    backgroundColor: 'blue'
  },
  deleteButton: {
    backgroundColor: 'red'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

export default SalesApp;
