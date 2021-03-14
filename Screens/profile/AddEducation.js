import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileAction from '../../redux/actions/profileAction';
import {styles} from '../auth/style';
import {Container, Header, Content, Icon} from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
const AddEducation = ({navigation, data, update}) => {
  const [status, setStatus] = useState(null);
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [github, setGithub] = useState('');
  const [exp, setExp] = useState('');
  const [edu, setEdu] = useState('');
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
  const editProfile = () => {
    update.updateProfile(
      status,
      company,
      website,
      location,
      skills,
      github,
      navigation,
      exp,
      edu,
    );
    goBack();
  };
  const goBack = () => {
    navigation.navigate('Profile');
  };
  return (
    <ScrollView>
      <View style={{marginVertical: 50, marginLeft: 50}}>
        <Text style={styles.titleDashboard}>Education,Experience</Text>

        <View style={styles.inputEdit}>
          <RNPickerSelect
            value={status}
            onValueChange={(value) => setStatus(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{label: 'Select Professional Status', value: null}}
            items={itemSelectBox}
          />
        </View>
        <TextInput
          value={skills}
          style={styles.inputEdit}
          placeholder="Skills"
          onChangeText={(text) => {
            setSkills(text);
          }}
        />
        <TextInput
          value={exp}
          style={styles.inputEdit}
          placeholder="Exp"
          onChangeText={(text) => {
            setExp(text);
          }}
        />
        <TextInput
          value={edu}
          style={styles.inputEdit}
          placeholder="Edu"
          onChangeText={(text) => {
            setEdu(text);
          }}
        />
        <TextInput
          value={company}
          style={styles.inputEdit}
          placeholder="Company"
          onChangeText={(text) => {
            setCompany(text);
          }}
        />
        <TextInput
          value={location}
          style={styles.inputEdit}
          placeholder="Location"
          onChangeText={(text) => {
            setLocation(text);
          }}
        />
        <TextInput
          value={github}
          style={styles.inputEdit}
          placeholder="GitHub"
          onChangeText={(text) => {
            setGithub(text);
          }}
        />
        <TextInput
          value={website}
          style={styles.inputEdit}
          placeholder="WebSite"
          onChangeText={(text) => {
            setWebsite(text);
          }}
        />
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
const mapStateToProps = (state) => ({
  data: state.profileReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  update: bindActionCreators(ProfileAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddEducation);
