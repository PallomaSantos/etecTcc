import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Supportstyles from '../../components/ScreensStyles/Supportstyles';

const SupportScreen = () => {
  return (
    <ScrollView style={Supportstyles.scrollView}>
      <View style={Supportstyles.header}>
        <Text style={Supportstyles.mainText}>Suporte</Text>
      </View>
      <View style={Supportstyles.Container}>
        <View style={Supportstyles.supportTextBox}>
          <View style={Supportstyles.supportTextQuestion}>
            <Text style={Supportstyles.supportTextTitle}>Como se cadastrar na ETEC READ?</Text>
          </View>
          <View style={Supportstyles.textAnswer}>
            <Text style={Supportstyles.supportTextAnswering}>
              Para realizar o cadastro no aplicativo Etec Read,
              é necessário comparecer presencialmente à biblioteca da
              Etec. A bibliotecária será responsável por
              coletar seus dados e efetuar o seu registro no sistema.
              Somente após esse procedimento o seu acesso ao
              aplicativo será liberado.
            </Text>
          </View>
        </View>
        <View style={Supportstyles.supportTextBox}>
          <View style={Supportstyles.supportTextQuestion}>
            <Text style={Supportstyles.supportTextTitle}>Como alugar um livro?</Text>
          </View>
          <View style={Supportstyles.textAnswer}>
            <Text style={Supportstyles.supportTextAnswering}>
              Para alugar um livro pelo Etec Read, basta acessar o
              aplicativo com seu login já cadastrado. Em seguida,
              pesquise pelo título desejado e verifique a
              disponibilidade. Caso o exemplar esteja livre, você
              poderá reservar diretamente pelo app. Depois, é só
              comparecer à biblioteca da Etec para
              retirar o livro com a bibliotecária, apresentando seu
              documento ou identificação estudantil.
            </Text>
          </View>
        </View>
        <View style={Supportstyles.supportTextBox}>
          <View style={Supportstyles.supportTextQuestion}>
            <Text style={Supportstyles.supportTextTitle}>Como pesquisar um livro?</Text>
          </View>
          <View style={Supportstyles.textAnswer}>
            <Text style={Supportstyles.supportTextAnswering}>
              Para pesquisar um livro no Etec Read, basta acessar o campo
              de busca na tela principal e digitar o nome do título,
              autor ou gênero desejado. O aplicativo exibirá os
              resultados disponíveis no acervo da biblioteca da Etec
              de Guarulhos.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SupportScreen;
