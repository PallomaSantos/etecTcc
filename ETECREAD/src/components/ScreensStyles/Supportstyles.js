import { StyleSheet } from 'react-native';

const Supportstyles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#800F0F',
  },
  mainText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: "Verdana"
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
  },
  supportTextBox: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 3,
  },
  supportTextQuestion: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  supportTextTitle: {
    color: '#222',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  textAnswer: {
    padding: 15,
    width: '100%',
  },
  supportTextAnswering: {
    color: '#333',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'left',
  },
});

export default Supportstyles;
