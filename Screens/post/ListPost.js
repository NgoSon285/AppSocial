import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Textarea,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {styles} from '../auth/style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PostAction from '../../redux/actions/postAction';

const ListPost = ({data, post}) => {
  const [contenPost, setContenPost] = useState('');
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    post.getAllPost();
  };
  const createAPost = () => {
    post.createPost(contenPost);
  };
  console.log(data);

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.titleDashboard}>Post</Text>
        <Text style={styles.subTitleDashboard}>
          <Icon type="Ionicons" name="person" />
          Welcome to the community
        </Text>
        <Text style={styles.titleListPost}>Say Something....</Text>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Create a post"
          value={contenPost}
          onChangeText={(text) => {
            setContenPost(text);
          }}
        />
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => {
            createAPost();
          }}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>

      {data == null ? (
        <Text>Can't find post</Text>
      ) : (
        data.map((item, index) => {
          return (
            <View key={index} style={styles.post}>
              <View style={styles.itemPost}>
                <Image
                  source={{uri: `${item.avatar}`}}
                  style={styles.imagePost}
                />
                <Text style={styles.subTitle}>{item.name}</Text>
                <View></View>
              </View>
              <Text>{item.text}</Text>
              <Text style={styles.post_date}>{`Poster on ${item.date.slice(
                0,
                10,
              )}`}</Text>
              <View style={{flexDirection: 'row'}}>
                <Button transparent>
                  <Icon
                    active
                    name="thumbs-up"
                    style={{fontSize: 20, color: 'black'}}
                  />
                  <Text>{item.likes.length} Likes</Text>
                </Button>
                <Button transparent>
                  <Icon
                    active
                    name="thumbs-down"
                    style={{fontSize: 20, color: 'black'}}
                  />
                </Button>
                <Button transparent>
                  <Icon
                    active
                    name="chatbubbles"
                    style={{fontSize: 20, color: 'black'}}
                  />
                  <Text>{item.comments.length} Comments</Text>
                </Button>
              </View>
            </View>
          );
        })
      )}
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({
  data: state.postReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  post: bindActionCreators(PostAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListPost);
