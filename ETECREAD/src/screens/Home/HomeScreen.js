import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BookListItem from '../../components/book/BookListItem'; 

const MOCK_BOOKS = [
  { id: '1', title: 'O Alienista', author: 'Machado de Assis', coverUrl: 'https://via.placeholder.com/60x90' },
  { id: '2', title: 'Dom Casmurro', author: 'Machado de Assis', coverUrl: 'https://via.placeholder.com/60x90' },
  { id: '3', title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', coverUrl: 'https://via.placeholder.com/60x90' },
  { id: '4', title: 'Iracema', author: 'José de Alencar', coverUrl: 'https://via.placeholder.com/60x90' },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Principais Destaques</Text>
      <FlatList
        data={MOCK_BOOKS} 
        renderItem={({ item }) => <BookListItem book={item} />} 
        keyExtractor={item => item.id} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    color: '#8B0000', 
  },
});

export default HomeScreen;