//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {styles} from './style';
const uriImage =
  'https://nganhangphapluat.thukyluat.vn/images/CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg';
import * as AuthAction from '../../redux/actions/authAction';
import {connect} from 'react-redux';
// create a component
const SignUp = ({navigation, actionAuth}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignUp = () => {
    actionAuth.signUpRequest(name, email, password, navigation);
    console.log(name,email);
  };
  const nextScreen = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{uri: uriImage}} style={{width: 200, height: 200}} />
      </View>
      <View style={styles.body}>
        <TextInput
          value={name}
          placeholder={'name'}
          style={styles.input}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <TextInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          placeholder={'email'}
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onSignUp}>
          <Text style={{color: 'green'}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextScreen}>
          <Text style={{color: 'green'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
//make this component available to the app
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actionAuth: bindActionCreators(AuthAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
