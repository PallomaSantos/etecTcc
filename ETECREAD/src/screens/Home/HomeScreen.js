import React, { useState, useEffect } from 'react';
import { View, Text, HomeStylesheet, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BookListItem from '../../components/book/BookListItem'; 
import HomeStyles from '../../components/ScreensStyles/Homestyles';

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:"machado+de+assis"&maxResults=10');
        const data = await response.json();

        const formattedBooks = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Autor desconhecido',
          coverUrl: item.volumeInfo.imageLinks?.thumbnail,
          publishedDate: item.volumeInfo.publishedDate || 'Data desconhecida',
        }));

        setBooks(formattedBooks);
        setError(null);

      } catch (err) {
        setError('Falha ao carregar os livros. Tente novamente.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Função para renderizar o conteúdo principal
  const renderContent = () => {
    if (loading) {
      // Mostra um indicador de carregamento
      return <ActivityIndicator size="large" color="#800F0F" style={HomeStyles.loader} />;
    }

    if (error) {
      // Mostra uma mensagem de erro
      return <Text style={HomeStyles.errorText}>{error}</Text>;
    }

    // Mostra a lista de livros
    return (
      <FlatList
        data={books}
        renderItem={({ item }) => <BookListItem book={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    );
  };

  return (
    <SafeAreaView style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <Text style={HomeStyles.mainText}>Principais destaques</Text>
      </View>
      {renderContent()} 
    </SafeAreaView>
  );
};


export default HomeScreen;