import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#800F0F',
    marginTop: -59,
  },
  mainText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: "Verdana"
  },
  loader: {
    marginTop: 50,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'red',
  }
});

export default HomeStyles;