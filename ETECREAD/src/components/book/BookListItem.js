import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BookStyle from './BookStyle';

// Este componente recebe um 'book' como propriedade,
// que virá da API 
const BookListItem = ({ book }) => {

  const title = book.title || 'Título indisponível';
  const author = book.author || 'Autor desconhecido';
  const publishedDate = book.publishedDate || 'Data desconhecida';
  const coverUrl = book.coverUrl; 

  return (
    <View style={BookStyle.card}>
      <View style={BookStyle.infoContainer}>
        <Text style={BookStyle.title} numberOfLines={2}>{title}</Text>
        <Text style={BookStyle.author}>{author}</Text>
        <Text style={BookStyle.date}>{publishedDate}</Text>
        <TouchableOpacity style={BookStyle.button}>
          <Text style={BookStyle.buttonText}>ALUGAR</Text>
        </TouchableOpacity>
      </View>
      {coverUrl ? (
        <Image source={{ uri: coverUrl }} style={BookStyle.coverImage} />
      ) : (
        <View style={BookStyle.placeholder}>
          <Text style={BookStyle.placeholderText}>X</Text>
        </View>
      )}
    </View>
  );
};


export default BookListItem;