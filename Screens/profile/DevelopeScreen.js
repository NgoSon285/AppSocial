import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileAction from '../../redux/actions/profileAction';

import {styles} from '../auth/style';
import {TouchableHighlight} from 'react-native-gesture-handler';

const DevelopeScrenn = ({navigation, data, getProfileAction}) => {
  useEffect(() => {
    getProfileAction.getAllProfile();
  }, []);

  return (
    <ScrollView>
      {data ? (
        <Container style={{borderWidth: 0}}>
          <Content>
            <View style={styles.titleHeader}>
              <TouchableOpacity>
                
              </TouchableOpacity>
              <Text style={styles.titleDashboard}>Developers</Text>
              <TouchableOpacity>
                <Icon name="ios-menu" />
              </TouchableOpacity>
            </View>
            <List>
              {data.map((item, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => {
                      console.log('click');
                      navigation.navigate('ProfileDetail', {item: item});
                    }}
                    underlayColor="#2196F3"
                    style={styles.text}>
                    <ListItem thumbnail>
                      <Left>
                        <Thumbnail
                          square
                          source={{
                            uri: `${item.user.avatar}`,
                          }}
                          style={{borderRadius: 50}}
                        />
                      </Left>
                      <Body>
                        <Text>{`${item.user.name}`}</Text>
                        <Text note numberOfLines={1}>
                          {`${item.status} ${
                            item.company ? 'at ' + item.company : ''
                          }`}
                        </Text>
                      </Body>
                      <Right>
                        <Button transparent>
                          <Text>View</Text>
                        </Button>
                      </Right>
                    </ListItem>
                  </TouchableHighlight>
                );
              })}
            </List>
          </Content>
        </Container>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Not Found</Text>
        </View>
      )}
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({
  data: state.profileReducer.listProfile,
});
const mapDispatchToProps = (dispatch) => ({
  getProfileAction: bindActionCreators(ProfileAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(DevelopeScrenn);
