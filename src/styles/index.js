import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#465a64'
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
    flex: 1
  },
  btn: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 28,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  }
});
export default styles;
