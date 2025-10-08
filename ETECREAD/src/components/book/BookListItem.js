import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BookListItem = ({ book }) => {
  return (

    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: book.coverUrl }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinha a imagem e o texto lado a lado
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center', // Centraliza os itens verticalmente
  },
  coverImage: {
    width: 60,
    height: 90,
    marginRight: 15,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1, // Faz com que o container de informações ocupe o espaço restante
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
});

export default BookListItem;