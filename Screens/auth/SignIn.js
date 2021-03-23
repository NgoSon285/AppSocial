import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {styles} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
// create a component
import * as AuthAction from '../../redux/actions/authAction';

const SignIn = ({navigation, authAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignIn = () => {
    authAction.signInRequest(email, password, navigation);
  };
  const nextScreenSignUp = () => {
    navigation.navigate('SignUp');
  };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <View>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../Image/background/top_bg.png')}
          style={styles.backgroundTop}>
          <Image
            source={require('../../Image/logo/Hi_Blob.png')}
            style={{width: 150, height: 150}}
          />
        </ImageBackground>
        <Text style={styles.textSignIn}>Hello again. Welcome back.</Text>
      </View>
      <View style={styles.contenLogin}>
        <View style={styles.formInput}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
              setEmail(values.email);
              setPassword(values.password);
            }}>
            {({handleChange, handleBlur, handleSubmit, errors, values}) => (
              <>
                <Item floatingLabel style={{marginVertical: 20}}>
                  <Label style={{marginLeft: 20, fontSize: 16}}>Username</Label>
                  <Input
                    name="email"
                    placeholder="Email Address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                </Item>
                {errors.email && (
                  <Text style={{fontSize: 16, color: '#FF0019'}}>
                    {errors.email}
                  </Text>
                )}
                <Item floatingLabel>
                  <Label style={{marginLeft: 20, fontSize: 16}}>Password</Label>
                  <Input
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                </Item>
                {errors.password && (
                  <Text style={{fontSize: 16, color: '#FF0019'}}>
                    {errors.password}
                  </Text>
                )}

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      handleSubmit();
                      onSignIn();
                    }}
                    style={styles.button}>
                    <Text style={styles.text}>SignIn</Text>
                  </TouchableOpacity>
                  <Text>
                    Don't have an account?{' '}
                    <Text
                      style={{color: '#ff0019'}}
                      onPress={() => {
                        nextScreenSignUp();
                      }}>
                      SignUp
                    </Text>
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
      <View>
        <ImageBackground
          source={require('../../Image/background/Bottom_Blob.png')}
          style={styles.backgroundBotton}></ImageBackground>
      </View>
    </View>
  );
};

//make this component available to the app
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  authAction: bindActionCreators(AuthAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
