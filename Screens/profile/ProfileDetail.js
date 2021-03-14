import React from 'react';
import {View, Image} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem,
  Thumbnail,
  ListItem,
  //   Button,
} from 'native-base';

import {styles} from '../auth/style';

const ProfileDetail = ({route, navigation}) => {
  const data = route.params;
  //   console.log('data detail', typeof data);
  return (
    <Container style={styles.container}>
      <Container style={{borderWidth: 0}}>
        <Header style={{backgroundColor: 'transparent', borderWidth: 0}}>
          <Left style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button
              transparent
              onPress={() => {
                navigation.navigate('DevelopeScreen');
              }}>
              <Icon name="arrow-left" type={'FontAwesome5'} />
            </Button>
            <Text style={styles.title}>{data.item.user.name}</Text>
          </Left>
          <Right />
        </Header>
        <Content style={{marginHorizontal: 20}}>
          <Content
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <Image
              style={styles.cover}
              source={{
                uri:
                  'https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/158378767_4119184884759511_4411723860510882361_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=rAmbj69c8XQAX8VhvPr&_nc_ht=scontent.fhan2-6.fna&oh=ce15495f8762d8f06d4105f565e7d423&oe=6071D6D0',
              }}
            />
          </Content>
          <View style={{position: 'relative'}}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarimg}
                source={{uri: `${data.item.user.avatar}`}}
              />
            </View>
          </View>
          <View style={styles.name}>
            <Text style={styles.title}>{data.item.user.name}</Text>
            <Text>{data.item.status}</Text>
          </View>
          <View>
            <Button iconLeft block>
              <Icon name="facebook-messenger" type="FontAwesome5" />
              <Text>Chat Now</Text>
            </Button>
          </View>
          <Card style={{justifyContent: 'center', padding: 50}}>
            <Text style={styles.titleDashboard}>Skill Set</Text>
            {data.item.skills.map((item, index) => {
              return (
                <CardItem key={index}>
                  <Icon
                    name="check"
                    type="FontAwesome5"
                    style={{fontSize: 18}}
                  />
                  <Text>{item}</Text>
                </CardItem>
              );
            })}
          </Card>
          <Card style={{justifyContent: 'center', padding: 30}}>
            <Text style={styles.titleDashboard}>Experience</Text>
            {data.item.experience.map((item, index) => {
              console.log(item.from);
              return (
                <CardItem
                  key={index}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={styles.subTitle}>{item.company}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.subTitle}>Position: </Text>
                    <Text>{item.title}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.subTitle}>Location: </Text>
                    <Text>{item.location}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.subTitle}>Description: </Text>
                    <Text>{item.description}</Text>
                  </View>
                </CardItem>
              );
            })}
          </Card>
          <Card style={{justifyContent: 'center', padding: 30}}>
            <Text style={styles.titleDashboard}>Education</Text>
            {data.item.education.map((item, index) => {
              return (
                <CardItem
                  key={index}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={styles.subTitle}>{item.school}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>{`${item.from.slice(0, 10)} - ${item.to.slice(
                      0,
                      10,
                    )}`}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.subTitle}>Degree: </Text>
                    <Text>{item.degree}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.subTitle}>Field Of Study: </Text>
                    <Text>{item.fieldofstudy}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.subTitle}>Description: </Text>
                    <Text>{item.description}</Text>
                  </View>
                </CardItem>
              );
            })}
          </Card>
        </Content>
      </Container>
    </Container>
  );
};

export default ProfileDetail;
