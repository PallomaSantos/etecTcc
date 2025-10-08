import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.mainTitulo}>ETEC{'\n'}READ</Text>
      <View style={styles.divisor} />
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Aplicativo Oficial da</Text>
        <Text style={styles.subtitulo}>Etec De Guarulhos</Text>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#a72c2c',
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
