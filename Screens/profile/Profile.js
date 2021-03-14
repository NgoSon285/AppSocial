//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileAction from '../../redux/actions/profileAction';
import {styles} from '../auth/style';

// create a component

const Profile = ({navigation, infoProfile, route, profile}) => {
  // const [data, setData] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email);
    }
  }, [route.params?.email]);
  console.log('info', infoProfile);
  const nextScreenEdit = () => {
    navigation.navigate('EditProfile');
  };
  const nextScreenCreate = () => {
    navigation.navigate('CreateProfile');
  };
  const nextScreenAddExperience = () => {
    navigation.navigate('AddExperience');
  };
  const nextScrennEducation = () => {
    navigation.navigate('AddEducation');
  };
  const removeToken = async () => {
    console.log('test 222');
    await AsyncStorage.removeItem('@token');
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      {infoProfile == null ? (
        <View style={{paddingLeft: 50}}>
          <Text style={styles.titleDashboard}>Dashboard</Text>
          <Text style={styles.subTitleDashboard}>
            <Icon type="Ionicons" name="person" />
            Welcome <Text>{email}</Text>
          </Text>
          <Text style={styles.textProfile}>
            You have not yet setup a profile, please add some info
          </Text>
          <TouchableOpacity
            style={styles.buttonDashboard}
            onPress={nextScreenCreate}>
            <Text style={{color: 'white'}}>Create Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removeToken} style={styles.buttonLogout}>
            <Text style={{color: 'white', fontWeight: '500'}}>LogOut</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{marginHorizontal: 50, marginLeft: 30}}>
          <Text style={styles.titleDashboard}>Dashboard</Text>
          <Text style={styles.subTitleDashboard}>
            <Icon type="Ionicons" name="person" />
            Welcome
          </Text>
          <View style={styles.manageDashboard}>
            <TouchableOpacity
              style={styles.buttonManageDashboard}
              onPress={nextScreenEdit}>
              <Text style={{color: 'white'}}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonManageDashboard}
              onPress={nextScreenAddExperience}>
              <Text style={{color: 'white'}}>Add Experience</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonManageDashboard}
              onPress={nextScrennEducation}>
              <Text style={{color: 'white'}}>Add Education</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Experience Credentials</Text>
          <View style={styles.titleTable}>
            <Text style={styles.subTitleTable}>Company </Text>
            <Text style={styles.subTitleTable}>Year</Text>
          </View>
          {/* item exp */}
          <View style={styles.listItemExp}>
            <Text style={styles.itemEXp}>T3h</Text>
            <Text style={styles.itemEXp}>18/05/2020 - Now</Text>
            <TouchableOpacity style={styles.buttonDelete}>
              <Text style={{color: 'white', fontWeight: '500'}}>Delete</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Education Credentials</Text>
          <View style={styles.titleTable}>
            <Text style={styles.subTitleTable}>Company </Text>
            <Text style={styles.subTitleTable}>Year</Text>
          </View>
          {/* item edu */}
          <View style={styles.listItemExp}>
            <Text style={styles.itemEXp}>T3h</Text>
            <Text style={styles.itemEXp}>18/05/2020 - Now</Text>
            <TouchableOpacity style={styles.buttonDelete}>
              <Text style={{color: 'white', fontWeight: '500'}}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={removeToken} style={styles.buttonLogout}>
              <Text style={{color: 'white', fontWeight: '500'}}>LogOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

// define your styles

//make this component available to the app
const mapStateToProps = (state) => ({
  infoProfile: state.profileReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  profile: bindActionCreators(ProfileAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
