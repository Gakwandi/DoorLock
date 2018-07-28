import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#465a64'
  },
  logo: {
    width: 100,
    height: 100
  },
  logoText: {
    paddingRight: 15,
    color: 'rgba(255,255,255,0.7)'
  },
  scrollContainer: {
    flex: 1
  },
  content: {
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    flex: 1,
    borderRadius: 28,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 6,
    paddingBottom: 6,
    color: '#ffff'
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
    flex: 1
  },
  btn: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 28,
    padding: 10,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  },
  footerText: {
    color: '#fff',
    flex: 1,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 15
  },
  footerTextBold: {
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20
  },
  footer: {
    flex: 1,
    marginTop: 100,
    flexDirection: 'row'
  }
});
export default styles;
