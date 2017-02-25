import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  red: {
    color: 'red'
  },
  smallBox: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  mediumBox: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue'
  },
  largeBox: {
    width: 150,
    height: 150,
    backgroundColor: 'steelblue'
  },
  scrollView: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 40,
    marginTop: 200,
    textAlign: 'center'
  }
});

module.exports = styles;
