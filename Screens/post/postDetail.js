import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../auth/style';
import * as PostAction from '../../redux/actions/postAction';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Thumbnail,
  Textarea,
} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const postDetail = ({route, navigation, infoProfile, post, dataPost}) => {
  const date = new Date();
  const [data, setData] = useState(route.params);
  const [comment, setComment] = useState('');
  useEffect(() => {
    setData(route.params);
  }, [route.params]);
  const createComments = () => {
    if (data) {
      let newComment = {
        name: infoProfile.user.name,
        avatar: infoProfile.user.avatar,
        text: comment,
        date: `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`,
        user: infoProfile.user._id,
      };
      data.comments.unshift(newComment);
      post.createComment(data._id, comment);
    }
  };
  const removeComments = (comment_id) => {
    if (data) {
      console.log(data._id, '/', comment_id);
      data.comments.filter((comment) => {
        return comment._id !== comment_id;
      });
    }
    post.deleteComment(data._id, comment_id);
  };
  const back = () => {
    navigation.navigate('ListPost');
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                back();
              }}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
      </View>
      <View style={styles.container}>
        <View style={{paddingBottom: 30}}>
          <View style={styles.itemPost}>
            <Image source={{uri: `${data.avatar}`}} style={styles.imagePost} />
            <Text style={styles.subTitle}>{data.name}</Text>
          </View>
          <Text style={styles.subTitle}>{data.text}</Text>
          <Text style={styles.post_date}>{`Poster on ${data.date.slice(
            0,
            10,
          )}`}</Text>
        </View>
        <View>
          <Text style={styles.titleListPost}>Leave a Comment</Text>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Comments a post"
            value={comment}
            onChangeText={(text) => {
              setComment(text);
            }}
          />
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={(text) => {
              createComments(text);
            }}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          {data.comments.map((item, index) => {
            return (
              <Card key={index}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: `${data.avatar}`}} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text
                        style={styles.post_date}>{`Poster on ${item.date.slice(
                        0,
                        10,
                      )}`}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={{paddingLeft: 20}}>
                  <Text>{item.text}</Text>
                </CardItem>
                <CardItem>
                  <Right>
                    {item.user == infoProfile.user._id ? (
                      <TouchableOpacity
                        onPress={() => {
                          removeComments(item._id);
                        }}>
                        <Icon
                          name="delete"
                          type="MaterialCommunityIcons"
                          style={{fontSize: 20, color: 'black'}}
                        />
                      </TouchableOpacity>
                    ) : (
                      <Text></Text>
                    )}
                  </Right>
                </CardItem>
              </Card>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({
  infoProfile: state.profileReducer.data,
  dataPost: state.postReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  post: bindActionCreators(PostAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(postDetail);
