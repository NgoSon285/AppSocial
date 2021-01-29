//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {styles} from '../auth/style';
import {Container, Header, Content, Icon} from 'native-base';
// create a component
import RNPickerSelect from 'react-native-picker-select';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileAction from '../../redux/actions/profileAction';
// import {TextInput} from 'react-native-gesture-handler';
const EditProfile = ({navigation, update}) => {
  const itemSelectBox = [
    {label: 'Developer', value: 'Developer'},
    {label: 'Junior Developer', value: 'Junior Developer'},
    {label: 'Senior Developer', value: 'Senior Developer'},
    {label: 'Manager', value: 'Manager'},
    {label: 'Student or Learning', value: 'Student  or Learning'},
    {label: 'Instructor  or Teacher', value: 'Instructor  or Teacher'},
    {label: 'Intern', value: 'Intern'},
    {label: 'Other', value: 'Other'},
  ];
  const [levels, setLevels] = useState(null);
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [githubName, setGithubName] = useState('');
  const [tellUs, setTellUs] = useState('');
  const [youtube, setYoutube] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');
  const editProfile = () => {
    console.log(levels);
    console.log(company, website, location, skills, githubName, tellUs);
    update.updateProfile(
      levels,
      company,
      website,
      location,
      skills,
      tellUs,
      twitter,
      facebook,
      youtube,
      linkedIn,
      instagram,
      navigation,
    );
  };
  const goBack = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView>
      <View style={{marginVertical: 50, marginLeft: 50}}>
        <Text style={styles.titleDashboard}>Edit Your Profile</Text>
        <Text style={styles.subTitleDashboard}>
          <Icon type="Ionicons" name="person" />
          Add some changes to profile
        </Text>

        <Text>require field</Text>
        <View style={styles.inputEdit}>
          <RNPickerSelect
            onValueChange={(value) => setLevels(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{label: 'Select Professional Status', value: null}}
            items={itemSelectBox}
          />
        </View>
        <Text style={styles.textSmall}>
          Give us an idea of where you are at in your career
        </Text>
        <View>
          <TextInput
            style={styles.inputEdit}
            placeholder={'Company'}
            value={company}
            onChangeText={(value) => setCompany(value)}
          />
          <Text style={styles.textSmall}>
            Could be your own company or one you work for
          </Text>
          <TextInput
            style={styles.inputEdit}
            placeholder={'Website'}
            value={website}
            onChangeText={(value) => setWebsite(value)}
          />
          <Text style={styles.textSmall}>
            Could be your own or a company website
          </Text>
          <TextInput
            style={styles.inputEdit}
            placeholder={'Location'}
            onChangeText={(value) => setLocation(value)}
            value={location}
          />
          <Text style={styles.textSmall}>
            City & state suggested (eg. Boston, MA)
          </Text>
          <TextInput
            style={styles.inputEdit}
            placeholder={'Skills'}
            onChangeText={(value) => setSkills(value)}
            value={skills}
          />
          <Text style={styles.textSmall}>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </Text>
          <TextInput
            style={styles.inputEdit}
            placeholder={'Github Username'}
            onChangeText={(value) => setGithubName(value)}
            value={githubName}
          />
          <Text style={styles.textSmall}>
            If you want your latest repo and a Github link, include your
            username
          </Text>

          <TextInput
            multiline={true}
            numberOfLines={8}
            style={styles.inputEdit}
            placeholder={'A short bio of yourself'}
            onChangeText={(value) => setTellUs(value)}
            value={tellUs}
          />
          <Text style={styles.textSmall}>Tell us a little about yourself</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            height: 40,

            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.buttonAddSocial}>
            <Text style={{fontWeight: '500'}}>Add Social Network Links</Text>
          </TouchableOpacity>
          <Text style={{marginHorizontal: 20, fontWeight: '500'}}>
            Optional
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 30}}>
          <TouchableOpacity style={styles.buttonSubmit} onPress={editProfile}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGoBack} onPress={goBack}>
            <Text>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  update: bindActionCreators(ProfileAction, dispatch),
});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
