import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Banner = () => {
  return (
    <LinearGradient
      colors={['#A11922', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.banner}
    >
      <Text style={styles.mainTitulo}>ETEC{'\n'}READ</Text>
      <View style={styles.divisor} />
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Aplicativo Oficial da</Text>
        <Text style={styles.subtitulo}>Etec De Guarulhos</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  mainTitulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  divisor: {
    width: 4,
    height: 50,
    marginHorizontal: 16,
    backgroundColor: '#fff', 
    opacity: 0.7,
  },
  textContainer: {
    flex: 1,
  },
  subtitulo: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Banner;