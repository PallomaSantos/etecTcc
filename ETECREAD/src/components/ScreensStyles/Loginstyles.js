import { StyleSheet } from "react-native";


const Loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A11922',
  },
  header: {
    backgroundColor: '#742222ff',
    paddingTop: 20,
    paddingBottom: 80,
    paddingHorizontal: 24,
    position: 'relative',
  },
   logoContainer: {
    width: '100%', 
    alignItems: 'center',
    marginBottom: 30,
    paddingRight: 20, 
  },
  logoImage: {
    width: 180,
    height: 60,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    marginTop:16,
  },
  appTitle: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    lineHeight: 52,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
    paddingHorizontal: 32,
    paddingTop: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeButton: {
    paddingHorizontal: 2,
  },
  loginButton: {
    backgroundColor: '#742222ff',
    borderRadius: 6,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 32,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginVertical: 24,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#7a2c2c',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default Loginstyles;