import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import RegisterScreen from '../LOGIN/RegisterScreen';
export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const handleLogin = () => {
        if (!username || !password) {
            alert('Vui lòng nhập tài khoản và mật khẩu');
        } else if (username === 'User' && password === '123456') {
           // alert('Đăng nhập thành công');
            navigation.navigate('Home');
        } else {
            alert('Tài khoản hoặc mật khẩu không chính xác');
        }
    };
    const handleRegister = () => {
        navigation.navigate('Register'); // Chuyển hướng đến màn hình đăng ký khi người dùng nhấn nút đăng ký
    };
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>ỨNG DỤNG</Text>
                <Text style={styles.logoText}>THƯƠNG MẠI ĐIỆN TỬ</Text>
            </View>
            <View style={styles.login}>
                <LinearGradient
                    colors={['rgba(255,165,129,1)', '#FFFFFF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.2, y: 1 }}
                    style={styles.background}
                />
                <View style={styles.loginInput}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Tài khoản :</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Nhập tài khoản"
                                placeholderTextColor="#A0A0A0"
                                onChangeText={text => setUsername(text)}
                            />
                        </View>
                        <Text style={styles.inputLabel}>Mật khẩu :</Text>
                        <View style={styles.inputContainer}>
                            <View style={styles.passwordInput}>
                                <TextInput
                                    style={[styles.textInput, styles.passwordTextInput]}
                                    placeholder="Nhập mật khẩu"
                                    placeholderTextColor="#A0A0A0"
                                    onChangeText={text => setPassword(text)}
                                    secureTextEntry={hidePassword}
                                />
                                <TouchableOpacity
                                    style={styles.showHideButton}
                                    onPress={togglePasswordVisibility}
                                >
                                    <Ionicons
                                        name={hidePassword ? 'eye-off' : 'eye'}
                                        size={24}
                                        color="#A0A0A0"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <LinearGradient
                            colors={['#FF0011', '#FF9100']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 0.5, y: 0 }}
                            style={styles.buttonGradient}
                        />
                        <Text style={styles.buttonText}>Đăng Nhập</Text>
                    </TouchableOpacity>
                    
                </View>
                {/* Nút đăng nhập ở đây */}
                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.registerButtonText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Website: kgc.edu.vn - Tel: (+84 0297) 3.863.530 - 3.872.086 Hotline: 0916.769.269
                </Text>
                <Text style={styles.footerText}>Khoa Công nghệ thông tin</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logoText: {
        color: '#FFA581',
        fontSize: 24,
        fontWeight: 'bold',
    },
    login: {
        width: 300,
        height: 400,
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    background: {
        position: 'absolute',
        borderRadius: 20,
        left: 0,
        right: 0,
        top: 0,
        height: 400,
    },
    image: {
        marginTop: 20,
        alignSelf: 'center',
        width: 90,
        height: 90,
    },
    loginInput: {
        marginTop: 20,
        alignItems: 'center',
    },
    input: {
        marginTop: 70,
        width: '100%',
        paddingHorizontal: 20,
    },
    inputLabel: {
        color: 'blue',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#A0A0A0',
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        color: '#000000',
    },
    showHideButton: {
        position: 'absolute',
        right: 10,
    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#A0A0A0',
        width: '100%',
    },
    button: {
        marginTop: 20,
        width: 200,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 40,
        borderRadius: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 50,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#A0A0A0',
        marginBottom: 5,
        textAlign: 'center',
    },
    //Style đăng ký
    registerButton: {
        marginTop: 20,
        width: 200,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF9100', // Màu sắc của nút đăng ký
        alignSelf: 'center'
    },
    registerButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        
    },
});
/*
    <Image
        source={require('../assets/quochuy.png')}
        style={styles.image}
    /> 
*/