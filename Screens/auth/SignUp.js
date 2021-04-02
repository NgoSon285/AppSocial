import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
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
import {styles} from './style';
import * as yup from 'yup';
import {Formik, Field} from 'formik';
import {bindActionCreators} from 'redux';
import * as AuthAction from '../../redux/actions/authAction';
import {connect} from 'react-redux';
const SignUp = ({navigation, actionAuth}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginValidationSchema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is Required'),
  });

  const nextScreenSignIn = () => {
    navigation.navigate('SignIn');
  };
  const onSignUp = () => {
    // actionAuth.signUpRequest(name, email, password, navigation);
  };
  return (
    <View>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../Image/background/top_bg_2.png')}
          style={styles.backgroundTop}
          resizeMode={'stretch'}>
          <Text style={styles.textSignUp}>Hello!</Text>
          <Text style={styles.textSignUp}>Sign up to get started.</Text>
        </ImageBackground>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../Image/logo/Hi_Blob.png')}
          style={{
            width: 170,
            height: 170,
            position: 'absolute',
            top: -60,
          }}
        />
      </View>
      <View style={styles.contenLogin}>
        <View style={styles.formInput}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={(values) => {
              setName(values.name);
              setEmail(values.email);
              setPassword(values.password);
              actionAuth.signUpRequest(name, email, password, navigation);
            }}>
            {({handleChange, handleBlur, handleSubmit, errors, values}) => (
              <>
                <Item floatingLabel style={{marginVertical: 0}}>
                  <Label style={{marginLeft: 20, fontSize: 16}}>Name</Label>
                  <Input
                    name="name"
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    keyboardType="default"
                  />
                </Item>
                {errors.name && (
                  <Text style={{fontSize: 16, color: '#FF0019'}}>
                    {errors.name}
                  </Text>
                )}
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
                    onPress={handleSubmit}
                    style={styles.button}>
                    <Text style={styles.text}>SignUp</Text>
                  </TouchableOpacity>
                  <Text>
                    You have an account?
                    <Text
                      style={{color: '#ff0019'}}
                      onPress={() => {
                        nextScreenSignIn();
                      }}>
                      SignIn
                    </Text>
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  actionAuth: bindActionCreators(AuthAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
