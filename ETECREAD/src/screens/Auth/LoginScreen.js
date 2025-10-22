import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Loginstyles from '../../components/ScreensStyles/Loginstyles';

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
    <SafeAreaView style={Loginstyles.container}>
      <StatusBar barStyle="light-content" />

      <View style={Loginstyles.header}>
      
      <View style={Loginstyles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')} 
          style={Loginstyles.logoImage}
          resizeMode="contain"
        />
      </View>

        <View style={Loginstyles.welcomeContainer}>
          <Text style={Loginstyles.appTitle}>Etec</Text>
          <Text style={Loginstyles.appTitle}>Read</Text>
          <Text style={Loginstyles.welcomeText}>BEM-VINDO DE VOLTA!</Text>
        </View>
      </View>

      <View style={Loginstyles.formContainer}>
        <View style={Loginstyles.inputGroup}>
          <Text style={Loginstyles.label}>E-MAIL INSTITUCIONAL</Text>
          <TextInput
            style={Loginstyles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={Loginstyles.inputGroup}>
          <Text style={Loginstyles.label}>RM</Text>
          <TextInput
            style={Loginstyles.input}
            value={rm}
            onChangeText={setRm}
            keyboardType="default"
          />
        </View>

        <View style={Loginstyles.inputGroup}>
          <Text style={Loginstyles.label}>SENHA</Text>
          <View style={Loginstyles.passwordContainer}>
            <TextInput
              style={Loginstyles.passwordInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={Loginstyles.eyeButton}
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

        <TouchableOpacity style={Loginstyles.loginButton} onPress={handleLogin}>
          <Text style={Loginstyles.loginButtonText}>LOG-IN</Text>
        </TouchableOpacity>

        <View style={Loginstyles.divider} />

        <TouchableOpacity style={Loginstyles.forgotPasswordContainer}>
          <Text style={Loginstyles.forgotPasswordText}>ESQUECEU A SENHA?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

