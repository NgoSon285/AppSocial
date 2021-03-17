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
const AddExperience = ({navigation, data, update}) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    console.log(data.experience);
  }, []);
  const updateExperience = () => {
    update.updateExperience(
      title,
      company,
      location,
      from,
      to,
      current,
      description,
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
        <View>
          <TextInput
            style={styles.inputEdit}
            placeholder={'Job title'}
            value={title}
            onChangeText={(value) => setTitle(value)}
          />

          <TextInput
            style={styles.inputEdit}
            placeholder={'Company'}
            value={company}
            onChangeText={(value) => setCompany(value)}
          />
          <TextInput
            style={styles.inputEdit}
            placeholder={'Location'}
            value={location}
            onChangeText={(value) => setLocation(value)}
          />
          <TextInput
            style={styles.inputEdit}
            placeholder={'From date'}
            value={from}
            onChangeText={(value) => setFrom(value)}
          />
          <TextInput
            style={styles.inputEdit}
            placeholder={'To date'}
            value={to}
            onChangeText={(value) => setTo(value)}
          />
          <TextInput
            style={styles.inputEdit}
            placeholder={'Description'}
            value={description}
            onChangeText={(value) => setDescription(value)}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 30}}>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={updateExperience}>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddExperience);
