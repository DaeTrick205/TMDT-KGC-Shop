import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import StingDetails from '../homepage/StingDetails';
import TraXanhDetails from '../homepage/TraXanhDetails';
import AoDetails from '../homepage/AoDetails';
import QuanDetails from '../homepage/QuanDetails';
import { useNavigation } from '@react-navigation/native';
import OrderDetails from '../Order/OrderDetails';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderDetailsVisible, setOrderDetailsVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentFeaturedProductIndex, setCurrentFeaturedProductIndex] = useState(0);

  const products = [
    { id: 1, name: 'Sting', price: '9.000 vnđ/ 1 chai', image: require('../assets/sting.jpg') },
    { id: 2, name: 'Trà xanh không độ', price: '9.000 vnđ/ 1 chai', image: require('../assets/0đo.jpg') },
    { id: 3, name: 'POPMART Ngắn Tay', price: '150.000 vnđ', image: require('../assets/aothun.jpg') },
    { id: 4, name: 'Quần jeans', price: '492.000 vnđ', image: require('../assets/quanjean.jpg') },
    { id: 5, name: 'Áo Thun Ngắn Tay', price: '293.000 vnđ', image: require('../assets/aothun2.jpg') },
    // Thêm sản phẩm thuộc mục "Bánh"
    { id: 6, name: 'Bánh Nabati', price: '6.000 vnđ/ 1 gói', image: require('../assets/nabati.jpg') },
    { id: 7, name: 'Bánh Nabati', price: '45.000 vnđ/ 1 hộp', image: require('../assets/nabati.jpg') },
  ];

  const featuredProducts = [
    { id: 3, name: 'POPMART Ngắn Tay', price: '150.000 vnđ', image: require('../assets/aothun.jpg') },
    { id: 5, name: 'Áo Thun Ngắn Tay', price: '293.000 vnđ', image: require('../assets/aothun2.jpg') },
  ];

  const navigation = useNavigation();

  const handleUserProfilePress = () => {
    navigation.navigate('UserProfile');
  };

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, { ...product }];
    setCart(updatedCart);
    console.log('Cart Items:', updatedCart);
  };

  const handleViewCart = () => {
    console.log('Opening Cart Details Modal');
    setOrderDetailsVisible(true);
  };

  const handleFilterProducts = (productType) => {
    if (productType === 'all') {
      setFilteredProducts(null);
    } else if (productType === 'Nước uống') {
      setFilteredProducts(products.filter(product => product.name.includes('Trà xanh không độ') || product.name.includes('Sting')));
    } else if (productType === 'Bánh') {
      setFilteredProducts(products.filter(product => product.name.includes('Bánh')));
    } else {
      setFilteredProducts(products.filter(product => product.name.includes(productType)));
    }
  };

  const displayedProducts = filteredProducts || products;

  const handleNextFeaturedProduct = () => {
    setCurrentFeaturedProductIndex((currentFeaturedProductIndex + 1) % featuredProducts.length);
  };

  const handlePreviousFeaturedProduct = () => {
    setCurrentFeaturedProductIndex((currentFeaturedProductIndex - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>KGC SHOP</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
          <Text style={styles.logoutButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userProfileButton} onPress={handleUserProfilePress}>
          <Image source={require('../assets/user.png')} style={styles.userProfileIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={handleViewCart}>
          <Text style={styles.cartButtonText}>Giỏ hàng ({cart.length})</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterButtons}>
      <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterProducts('all')}>
          <Text style={styles.filterButtonText}>Tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterProducts('Nước uống')}>
          <Text style={styles.filterButtonText}>Nước</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterProducts('Áo')}>
          <Text style={styles.filterButtonText}>Áo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterProducts('Quần')}>
          <Text style={styles.filterButtonText}>Quần</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterProducts('Bánh')}>
          <Text style={styles.filterButtonText}>Bánh</Text>
        </TouchableOpacity>
       
      </View>

      {/* Featured Product */}
      <View style={styles.featuredProductContainer}>
        <Text style={styles.featuredProductTitle}> Sản Phẩm Nổi Bật </Text>
        <View style={styles.featuredProductNavigation}>
          <TouchableOpacity onPress={handlePreviousFeaturedProduct}>
            <Text style={styles.navigationButton}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featuredProduct} onPress={() => handleProductPress(featuredProducts[currentFeaturedProductIndex])}>
            <Image source={featuredProducts[currentFeaturedProductIndex].image} style={styles.featuredProductImage} />
            <View style={styles.featuredProductDetails}>
              <Text style={styles.featuredProductName}>{featuredProducts[currentFeaturedProductIndex].name}</Text>
              <Text style={styles.featuredProductPrice}>{featuredProducts[currentFeaturedProductIndex].price}</Text>
              <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(featuredProducts[currentFeaturedProductIndex])}>
                <Text style={styles.addToCartButtonText}>Thêm vào giỏ</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextFeaturedProduct}>
            <Text style={styles.navigationButton}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Products */}
      <ScrollView style={styles.productContainer}>
        <View style={styles.productGrid}>
          {displayedProducts.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productItem} onPress={() => handleProductPress(product)}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(product)}>
                <Text style={styles.addToCartButtonText}>Thêm vào giỏ</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Selected Product Modal */}
      <Modal visible={selectedProduct !== null} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setSelectedProduct(null)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Đóng</Text>
          </TouchableOpacity>
          {selectedProduct && (
            <View style={styles.selectedProductContent}>
              <Image source={selectedProduct.image} style={styles.selectedProductImage} />
              <Text style={styles.selectedProductName}>{selectedProduct.name}</Text>
              <Text style={styles.selectedProductPrice}>{selectedProduct.price}</Text>
              <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(selectedProduct)}>
                <Text style={styles.addToCartButtonText}>Thêm vào giỏ</Text>
              </TouchableOpacity>
              {selectedProduct.name === 'Sting' && <StingDetails />}
              {selectedProduct.name === 'Trà xanh không độ' && <TraXanhDetails />}
              {selectedProduct.name.includes('Áo') && <AoDetails />}
              {selectedProduct.name.includes('Quần') && <QuanDetails />}
            </View>
          )}
        </View>
      </Modal>

      {/* Order Details Modal */}
      <Modal visible={orderDetailsVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setOrderDetailsVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Đóng</Text>
          </TouchableOpacity>
          <OrderDetails order={cart} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  userProfileButton: {
    padding: 10,
  },
  userProfileIcon: {
    width: 30,
    height: 30,
  },
  cartButton: {
    padding: 10,
  },
  cartButtonText: {
    fontSize: 16,
    color: 'yellow',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginHorizontal: 1,
  },
  logoutButton: {
    padding: 10,
  },
  logoutButtonText: {
    fontSize: 15,
    color: 'yellow',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginHorizontal: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginHorizontal: 1,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  featuredProductContainer: {
    marginBottom: 10,
  },
  featuredProductTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'red',
  },
  featuredProductNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigationButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  featuredProduct: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  featuredProductImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  featuredProductDetails: {
    flex: 1,
    marginLeft: 10,
  },
  featuredProductName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredProductPrice: {
    fontSize: 16,
    color: '#888',
  },
  addToCartButton: {
    marginTop: 5,
    padding: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'yellow',
    fontSize: 15,
    textAlign: 'center',
  },
  productContainer: {
    flex: 1,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  selectedProductContent: {
    alignItems: 'center',
  },
  selectedProductImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  selectedProductName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  selectedProductPrice: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
});

