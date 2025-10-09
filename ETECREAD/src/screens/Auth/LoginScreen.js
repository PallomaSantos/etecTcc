import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [rm, setRm] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && rm && password) {
      navigation.replace('App'); 
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Cps</Text>
          <Text style={styles.logoSubtext}>CENTRO PAULA SOUZA</Text>
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>BEM-VINDO DE VOLTA!</Text>
          <Text style={styles.appTitle}>Etec</Text>
          <Text style={styles.appTitle}>Read</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-MAIL INSTITUCIONAL</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>RM</Text>
          <TextInput
            style={styles.input}
            value={rm}
            onChangeText={setRm}
            keyboardType="default"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>SENHA</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={22}
                color="#8b3333"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOG-IN</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>ESQUECEU A SENHA?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A11922',
  },
  header: {
    backgroundColor: '#8b3333',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 24,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    zIndex: 10,
  },
  logoContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  logoText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  logoSubtext: {
    color: '#fff',
    fontSize: 10,
    marginTop: 4,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  appTitle: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 52,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
    paddingHorizontal: 32,
    paddingTop: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeButton: {
    paddingHorizontal: 12,
  },
  loginButton: {
    backgroundColor: '#742222ff',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 32,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginVertical: 24,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#7a2c2c',
    fontSize: 13,
    fontWeight: '600',
  },
});