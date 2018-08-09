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
    borderRadius: 8,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 6,
    paddingBottom: 6,
    color: '#ffff'
  },
  inputContainer: {
    flexDirection: 'column',
    margin: 5,
    marginLeft: 40,
    marginRight: 40,
    flex: 1
  },
  inputGroup: {
    flex: 1,
    flexDirection: 'row'
  },
  errorContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 40,
    marginRight: 40,
    flex: 1
  },
  errorView: {
    backgroundColor: 'rgba(255,0,0,0.5)',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 10
  },
  errorText: {
    flex: 10,
    color: '#ffff'
  },
  closeError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  btn: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center'
  },
  inputTextError: {
    flex: 1,
    color: 'rgba(255,80,80,0.9)'
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
  },
  tabStyle: {
    // backgroundColor: '#465a64',
    borderTopWidth: 2,
    padding: 0,
    margin: 0,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  tabBarStyle: {
    borderTopWidth: 0
  },
  tabIcon: {
    padding: 0,
    margin: 0,
    borderColor: '#fff'
  },
  powerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 120,
    width: 120,
    padding: 0,
    borderRadius: 60
  },
  white: {
    color: '#fff'
  }
});
export default styles;
