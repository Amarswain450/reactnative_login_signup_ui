import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={[styles.footer]}>
        <Text style={styles.text_footer}>Username:</Text>
        <View style={styles.action}>
          <TextInput 
              placeholder='Your Username'
              placeholderTextColor="#666666"
              style={[styles.textInput]}
          />
        </View>
        <Text style={styles.text_footer}>Password:</Text>
        <View style={styles.action}>
          <TextInput 
              placeholder='Your Password'
              placeholderTextColor="#666666"
              secureTextEntry={true}
              style={[styles.textInput]}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}>
            <Text style={[styles.textSign]}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.signUp, {borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15}]}>
            <Text style={[styles.textSign, {color: "#000"}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  }, 
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    padding: "10px",
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  },
  button: {
    alignItems: 'center',
    // marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#009387"
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
