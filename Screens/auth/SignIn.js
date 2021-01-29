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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {styles} from './style';
// create a component
import * as AuthAction from '../../redux/actions/authAction';
const uriImage =
  'https://nganhangphapluat.thukyluat.vn/images/CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg';

const SignIn = ({navigation, authAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignIn = () => {
    authAction.signInRequest(email, password, navigation);
  };
  const saveToken = async () => {
    await AsyncStorage.setItem('@token', 'tokendata');
  };
  const nextSignUp = () => {
    navigation.navigate('SignUp');
  };
  const nextScreen = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{uri: uriImage}} style={{width: 200, height: 200}} />
      </View>
      <View style={styles.body}>
        <TextInput
          placeholder={'email'}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onSignIn}>
          <Text style={{color: 'green'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextSignUp}>
          <Text style={{color: 'green'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  authAction: bindActionCreators(AuthAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
