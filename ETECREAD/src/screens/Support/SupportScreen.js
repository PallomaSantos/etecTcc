import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SupportScreen = () => {
  return (
    <ScrollView>
    <View style={styles.header}>
      <Text style={styles.mainText}>Suporte</Text>
    </View>
    <View style={styles.Container}>
      <View style={styles.supportTextBox}>
        <View style={styles.supportTextQuestion}>
          <Text style={styles.supportTextTitle}>Como se cadastrar na ETEC READ?</Text>
        </View>
        <View style={styles.textAnswer}>
          <Text style={styles.supportTextAnswering}>Para realizar o cadastro no aplicativo Etec Read,
            é necessário comparecer presencialmente à biblioteca da Etec de Guarulhos. 
            A bibliotecária será responsável por coletar seus dados e efetuar o seu registro no sistema. 
            Somente após esse procedimento o seu acesso ao aplicativo será liberado.</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header:{
    padding: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 40,
    paddingTop: 40,
    backgroundColor: '#800F0F',
  },
  mainText:{
    color:'white',
    fontSize: 28,
    fontWeight: 'bold'
  },
  supportTextBox:{
    padding: 0,
    alignItems:'center',
    flexDirection: 'column',
    marginTop: 20,
    marginBlock:20,
  },
  supportTextQuestion:{
    padding: 0,
    paddingTop: 20,
    paddingBottom:20,
    backgroundColor:'#D9D9D9',
  },
  supportTextTitle:{
    color:'black',
    fontSize: 20,
    fontWeight: 'light',

  }

});

export default SupportScreen;   