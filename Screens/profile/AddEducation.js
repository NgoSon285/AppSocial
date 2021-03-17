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
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fieldofstudy, setFieldofstudy] = useState('');
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState('');
  const updateEducation = () => {
    update.updateEducation(
      school,
      degree,
      from,
      to,
      fieldofstudy,
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

        <TextInput
          value={school}
          style={styles.inputEdit}
          placeholder="School"
          onChangeText={(text) => {
            setSchool(text);
          }}
        />
        <TextInput
          value={degree}
          style={styles.inputEdit}
          placeholder="Degree"
          onChangeText={(text) => {
            setDegree(text);
          }}
        />
        <TextInput
          value={from}
          style={styles.inputEdit}
          placeholder="From"
          onChangeText={(text) => {
            setFrom(text);
          }}
        />
        <TextInput
          value={to}
          style={styles.inputEdit}
          placeholder="To"
          onChangeText={(text) => {
            setTo(text);
          }}
        />
        <TextInput
          value={fieldofstudy}
          style={styles.inputEdit}
          placeholder="Fieldofstudy"
          onChangeText={(text) => {
            setFieldofstudy(text);
          }}
        />
        <TextInput
          value={description}
          style={styles.inputEdit}
          placeholder="Description"
          onChangeText={(text) => {
            setDescription(text);
          }}
        />

        <View style={{flexDirection: 'row', marginVertical: 30}}>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={updateEducation}>
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
